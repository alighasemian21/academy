const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const envPath = path.join(process.cwd(), '.env.local');
const envExamplePath = path.join(process.cwd(), '.env.example');

console.log('🔧 Setting up environment variables...\n');

let envContent = '';

if (fs.existsSync(envPath)) {
  console.log('📄 .env.local already exists, reading current values...');
  envContent = fs.readFileSync(envPath, 'utf-8');
  
  if (envContent.includes('NEXTAUTH_SECRET=your-secret-key-here') || 
      envContent.includes('NEXTAUTH_SECRET=') && !envContent.includes('NEXTAUTH_SECRET=9XZ')) {
    console.log('🔑 Generating new NEXTAUTH_SECRET...');
    const secret = crypto.randomBytes(32).toString('base64');
    envContent = envContent.replace(
      /NEXTAUTH_SECRET=.*/g,
      `NEXTAUTH_SECRET=${secret}`
    );
    if (!envContent.includes('NEXTAUTH_SECRET=')) {
      envContent += `\n# NextAuth Secret\nNEXTAUTH_SECRET=${secret}\n`;
    }
  } else {
    console.log('✅ NEXTAUTH_SECRET already configured');
  }
} else {
  console.log('📝 Creating new .env.local file...');
  
  const secret = crypto.randomBytes(32).toString('base64');
  
  envContent = `# MongoDB Atlas Connection
MONGODB_URI=mongodb+srv://alighasemian2111_db_user:65K7zWOvJb0W5wd2@cluster0.mxvrcg1.mongodb.net/?appName=Cluster0
MONGODB_DB_NAME=academy

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# NextAuth Secret (auto-generated)
NEXTAUTH_SECRET=${secret}

# Google Analytics 4 (optional - add your GA ID here when ready)
NEXT_PUBLIC_GA_ID=

# Email Service (optional - for future email features)
EMAIL_SERVICE=resend
RESEND_API_KEY=

# Admin User Creation Secret (optional - for API endpoint)
ADMIN_CREATE_SECRET=
`;
}

fs.writeFileSync(envPath, envContent);
console.log('✅ .env.local file created/updated successfully!');
console.log('\n📋 Next steps:');
console.log('   1. Run: node scripts/create-admin.js');
console.log('   2. Start the dev server: npm run dev');
console.log('   3. Login at: http://localhost:3000/auth/signin');

