/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function listPosts() {
  const contentDir = path.join(process.cwd(), 'content', 'blog');

  if (!fs.existsSync(contentDir)) {
    console.log(
      'No blog posts found. Create your first post with: npm run create-post'
    );
    return;
  }

  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith('.mdx'));

  if (files.length === 0) {
    console.log(
      'No blog posts found. Create your first post with: npm run create-post'
    );
    return;
  }

  console.log('📚 Blog Posts:\n');

  files.forEach((file, index) => {
    const fullPath = path.join(contentDir, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    console.log(`${index + 1}. ${data.title}`);
    console.log(`   Slug: ${file.replace('.mdx', '')}`);
    console.log(`   Category: ${data.category}`);
    console.log(`   Published: ${data.publishedAt}`);
    console.log(`   Featured: ${data.featured ? 'Yes' : 'No'}`);
    console.log(`   Tags: ${(data.tags || []).join(', ')}`);
    console.log('');
  });
}

listPosts();
