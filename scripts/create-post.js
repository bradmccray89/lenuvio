/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

async function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function createPost() {
  console.log('📝 Creating a new blog post...\n');

  try {
    const title = await askQuestion('Post title: ');
    const excerpt = await askQuestion('Post excerpt: ');
    const category =
      (await askQuestion('Category (Development/Design/Technology): ')) ||
      'Development';
    const tagsInput = await askQuestion('Tags (comma-separated): ');
    const featured = await askQuestion('Featured post? (y/n): ');

    const slug = generateSlug(title);
    const tags = tagsInput
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);
    const isFeatured =
      featured.toLowerCase() === 'y' || featured.toLowerCase() === 'yes';
    const publishedAt = formatDate(new Date());

    const frontmatter = `---
title: "${title}"
excerpt: "${excerpt}"
publishedAt: "${publishedAt}"
category: "${category}"
tags: [${tags.map((tag) => `"${tag}"`).join(', ')}]
featured: ${isFeatured}
metaTitle: "${title} - Lenuvio Blog"
metaDescription: "${excerpt}"
---

# ${title}

${excerpt}

## Introduction

Write your introduction here...

## Main Content

Add your main content here. You can use:

- **Bold text**
- *Italic text*
- [Links](https://example.com)
- \`inline code\`

### Code Blocks

\`\`\`javascript
const example = () => {
  console.log('Hello, world!');
};
\`\`\`

### Lists

1. Numbered lists
2. Are great for
3. Step-by-step guides

- Bullet points
- Work well for
- Feature lists

### Blockquotes

> This is a blockquote. Great for highlighting important information or quotes.

## Conclusion

Wrap up your post with key takeaways and next steps for readers.
`;

    // Ensure content directory exists
    const contentDir = path.join(process.cwd(), 'content', 'blog');
    if (!fs.existsSync(contentDir)) {
      fs.mkdirSync(contentDir, { recursive: true });
    }

    // Write the file
    const filePath = path.join(contentDir, `${slug}.mdx`);
    fs.writeFileSync(filePath, frontmatter);

    console.log(`\n✅ Blog post created: ${filePath}`);
    console.log(`📝 Edit the file to add your content`);
    console.log(`🔗 URL will be: /blog/${slug}`);
  } catch (error) {
    console.error('Error creating post:', error);
  } finally {
    rl.close();
  }
}

createPost();
