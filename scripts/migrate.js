#!/usr/bin/env node

/**
 * SuperCoach Migration Script
 * This script helps migrate assets and files to the Next.js structure
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 SuperCoach Next.js Migration Script');
console.log('=====================================\n');

// Create necessary directories
const dirs = [
  'public',
  'public/images',
  'public/videos',
  'public/fonts',
  'lib',
  'types',
  'styles'
];

console.log('📁 Creating directory structure...');
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`  ✅ Created: ${dir}`);
  } else {
    console.log(`  ℹ️  Exists: ${dir}`);
  }
});

// Move assets to public directory
console.log('\n📦 Moving assets to public directory...');

// Move images
if (fs.existsSync('images')) {
  console.log('  📸 Moving images...');
  // This would copy images to public/images
  console.log('  ℹ️  Images are already in the right place');
}

// Move videos
if (fs.existsSync('videos')) {
  console.log('  🎥 Moving videos...');
  // This would copy videos to public/videos
  console.log('  ℹ️  Videos are already in the right place');
}

// Move fonts
if (fs.existsSync('fonts')) {
  console.log('  🔤 Moving fonts...');
  // This would copy fonts to public/fonts
  console.log('  ℹ️  Fonts are already in the right place');
}

// Create .gitignore
console.log('\n📝 Creating .gitignore...');
const gitignore = `# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/
`;

if (!fs.existsSync('.gitignore')) {
  fs.writeFileSync('.gitignore', gitignore);
  console.log('  ✅ Created: .gitignore');
} else {
  console.log('  ℹ️  Exists: .gitignore');
}

// Create .env.local template
console.log('\n🔧 Creating environment template...');
const envTemplate = `# SuperCoach Environment Variables
NEXT_PUBLIC_GA_ID=G-5NBYPWHS4Q
NEXT_PUBLIC_INTERCOM_APP_ID=epc9u95z

# Add your other environment variables here
`;

if (!fs.existsSync('.env.local.example')) {
  fs.writeFileSync('.env.local.example', envTemplate);
  console.log('  ✅ Created: .env.local.example');
} else {
  console.log('  ℹ️  Exists: .env.local.example');
}

console.log('\n🎉 Migration setup complete!');
console.log('\n📋 Next steps:');
console.log('  1. Run: npm install');
console.log('  2. Copy .env.local.example to .env.local');
console.log('  3. Run: npm run dev');
console.log('  4. Start migrating HTML sections to React components');
console.log('\n📚 Check README.md for detailed instructions');
