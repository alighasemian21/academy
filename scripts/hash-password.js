require('dotenv').config({ path: '.env.local' });
const bcrypt = require('bcryptjs');

const password = process.argv[2] || 'Admin123!';

async function hashPassword() {
  try {
    console.log('🔐 Hashing password...');
    console.log('Password:', password);
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    console.log('\n✅ Password hashed successfully!');
    console.log('\n📋 Hashed password (copy this):');
    console.log(hashedPassword);
    console.log('\n💡 You can now use this hashed password in MongoDB Compass');
    console.log('   to create the admin user manually.');
    console.log('\n📝 User document structure:');
    console.log(JSON.stringify({
      name: 'مدیر سیستم',
      email: 'admin@academy84.ir',
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, null, 2));
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

console.log('🚀 Starting password hashing...\n');
hashPassword();

