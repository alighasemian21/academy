require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

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

async function createAdminUser() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');
    
    const db = client.db(DB_NAME);
    const usersCollection = db.collection('users');
    
    const adminEmail = 'admin@academy84.ir';
    const adminPassword = 'Admin123!';
    const adminName = 'مدیر سیستم';
    
    console.log(`\n📋 Checking for existing user with email: ${adminEmail}`);
    
    const existingUser = await usersCollection.findOne({ email: adminEmail });
    if (existingUser) {
      console.log('⚠️  User with this email already exists!');
      console.log('   If you want to update the password, delete the user first or use the API endpoint.');
      return;
    }
    
    console.log('🔐 Hashing password...');
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    console.log('✅ Password hashed successfully');
    
    console.log('👤 Creating admin user...');
    const result = await usersCollection.insertOne({
      name: adminName,
      email: adminEmail,
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    
    console.log('\n🎉 Admin user created successfully!');
    console.log('\n📧 Login credentials:');
    console.log('   Email:', adminEmail);
    console.log('   Password:', adminPassword);
    console.log('\n⚠️  IMPORTANT: Please change the password after first login!');
    console.log('   Go to /dashboard/profile to change password');
    console.log('\n📝 User ID:', result.insertedId.toString());
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.code === 'ENOTFOUND' || error.code === 'ETIMEDOUT') {
      console.error('   Could not connect to MongoDB. Please check:');
      console.error('   1. Internet connection');
      console.error('   2. MongoDB URI in .env.local');
      console.error('   3. IP whitelist in MongoDB Atlas');
    }
    process.exit(1);
  } finally {
    await client.close();
    console.log('\n🔌 Disconnected from MongoDB');
  }
}

console.log('🚀 Starting admin user creation...\n');
createAdminUser();

