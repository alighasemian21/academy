require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://alighasemian2111_db_user:65K7zWOvJb0W5wd2@cluster0.mxvrcg1.mongodb.net/?appName=Cluster0';
const DB_NAME = process.env.MONGODB_DB_NAME || 'academy';

const mongoOptions = {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  },
  tls: true,
  tlsAllowInvalidCertificates: false,
};

async function testConnection() {
  const client = new MongoClient(MONGODB_URI, mongoOptions);
  
  try {
    console.log('🔌 Attempting to connect to MongoDB...');
    console.log('URI:', MONGODB_URI.replace(/:[^:@]+@/, ':****@'));
    console.log('Database:', DB_NAME);
    console.log('');
    
    await client.connect();
    console.log('✅ Successfully connected to MongoDB!');
    
    const db = client.db(DB_NAME);
    const collections = await db.listCollections().toArray();
    
    console.log('\n📋 Available collections:');
    collections.forEach(col => {
      console.log(`   - ${col.name}`);
    });
    
    const usersCollection = db.collection('users');
    const userCount = await usersCollection.countDocuments();
    
    console.log(`\n👥 Users in database: ${userCount}`);
    
    if (userCount > 0) {
      const adminUsers = await usersCollection.find({ role: 'admin' }).toArray();
      console.log(`   Admin users: ${adminUsers.length}`);
      
      if (adminUsers.length > 0) {
        console.log('\n📧 Admin users:');
        adminUsers.forEach(user => {
          console.log(`   - ${user.email} (${user.name})`);
        });
      }
    }
    
    console.log('\n✅ Connection test completed successfully!');
    
  } catch (error) {
    console.error('\n❌ Connection failed!');
    console.error('Error:', error.message);
    
    if (error.code === 'ENOTFOUND' || error.code === 'ETIMEDOUT') {
      console.error('\n💡 Possible solutions:');
      console.error('   1. Check your internet connection');
      console.error('   2. Verify MongoDB URI in .env.local');
      console.error('   3. Check IP whitelist in MongoDB Atlas');
      console.error('   4. Try using MongoDB Compass to connect');
    } else if (error.message.includes('SSL') || error.message.includes('TLS')) {
      console.error('\n💡 SSL/TLS Error - Possible solutions:');
      console.error('   1. Check IP whitelist in MongoDB Atlas');
      console.error('   2. Try using MongoDB Compass (method 1 in CREATE_ADMIN_USER.md)');
      console.error('   3. Contact MongoDB Atlas support');
    } else if (error.message.includes('authentication')) {
      console.error('\n💡 Authentication Error - Possible solutions:');
      console.error('   1. Verify username and password in MongoDB URI');
      console.error('   2. Check database user permissions in MongoDB Atlas');
    }
    
    process.exit(1);
  } finally {
    await client.close();
    console.log('\n🔌 Disconnected from MongoDB');
  }
}

console.log('🚀 Starting MongoDB connection test...\n');
testConnection();

