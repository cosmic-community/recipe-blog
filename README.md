# 🍳 Recipe Blog

![Recipe Blog](https://imgix.cosmicjs.com/c9205d30-021b-11f1-8a26-c3abee9ef662-photo-1621996346565-e3dbc646d9a9-1770245378581.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A stunning, modern recipe blog built with Next.js 16, featuring a beautiful dark mode design, smooth animations, and responsive layouts. Showcase your culinary creations with style!

## Features

- 🌙 **Dark Mode Design** - Elegant dark theme that makes food photos pop
- ✨ **Smooth Animations** - Framer Motion powered transitions and effects
- 📱 **Fully Responsive** - Perfect on all devices
- 🏷️ **Category Filtering** - Browse by cuisine type
- ⏱️ **Recipe Info** - Prep time, cook time, servings, difficulty
- 📝 **Rich Markdown** - Beautiful ingredient and instruction formatting
- 🚀 **Next.js 16** - Latest features with App Router
- 🎨 **Tailwind CSS** - Modern utility-first styling

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6983ccc1fcd45d052674e34c&clone_repository=6983ce71fcd45d052674e4c0)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a complete content model for: A recipe blog
> 
> Use the install_content_model action to create ALL object types AND demo content in one step. Include:
> 1. All necessary object types with appropriate metafields
> 2. 2-3 demo objects for each type with realistic content
> 3. Unsplash image URLs for thumbnails and file metafields (use real URLs like https://images.unsplash.com/photo-...)
> 
> Remember to create types that are referenced by others FIRST (e.g., categories and authors before blog posts)."

### Code Generation Prompt

> "A Next.js app, responsive, dark mode, animation"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Cosmic](https://www.cosmicjs.com/) - Headless CMS
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the Recipe Blog content model

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd recipe-blog
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see your recipe blog!

## Cosmic SDK Examples

### Fetching all recipes
```typescript
const { objects: recipes } = await cosmic.objects
  .find({ type: 'recipes' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a single recipe by slug
```typescript
const { object: recipe } = await cosmic.objects
  .findOne({ type: 'recipes', slug: 'creamy-garlic-tuscan-pasta' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching recipes by category
```typescript
const { objects: recipes } = await cosmic.objects
  .find({ 
    type: 'recipes',
    'metadata.category': categoryId 
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses Cosmic as a headless CMS with the following content types:

### Recipes
- Title, Description, Featured Image
- Prep Time, Cook Time, Servings, Difficulty
- Ingredients (Markdown)
- Instructions (Markdown)
- Category (relationship)

### Categories
- Name, Description

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import on [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy!

<!-- README_END -->