---
title: Building Materials Website
description: 1C-Bitrix, PHP
seoDescription: A corporate website with catalog for a building materials store, created with Bootstrap and CMS 1C-Bitrix in Ilya's Mazunin Portfolio
date: '2020-1-1'
sort: 1
categories:
  - frontend
  - backend
legacy: true
published: true
emoji:
  - 🔨
  - 👷
  - 👷‍♀️
  - 🧑‍🔧
  - 📐
---

<script>
  import DeferButton from '/src/components/DeferButton.svelte';
  import Gallery from '/src/components/Gallery.svelte';
  import image_1 from '/static/images/posts/stroymarket/stroymarket-1.jpg?format=webp';
  import image_2 from '/static/images/posts/stroymarket/stroymarket-2.jpg?format=webp';
  import image_3 from '/static/images/posts/stroymarket/stroymarket-3.jpg?format=webp';
  import image_4 from '/static/images/posts/stroymarket/stroymarket-4.jpg?format=webp';
  import image_5 from '/static/images/posts/stroymarket/stroymarket-5.jpg?format=webp';
</script>

A corporate website with catalog for a building materials store, created with Bootstrap and CMS 1C-Bitrix.

## Links

- The Gulp.js boilerplate I created, which I used for development: [github.com/koshacha/gulp-boilerplate](https://github.com/koshacha/gulp-boilerplate)
- Website link - <DeferButton><a href="https://stroymarket23.ru/" rel="noreferrer">stroymarket23.ru</a></DeferButton>

## Techstack

- Pug/Jade
- SCSS
- Bootstrap CSS
- jQuery
- Gulp
- 1C-Bitrix CMS

## Images:

<Gallery
className="mb-2"
images={[image_2]}
alt={['main page head']}
/>

<Gallery
className="sm:columns-2 mt-4"
images={[image_1, image_3, image_4, image_5]}
alt={['news page mobile', 'catalog categories', 'catalog categories aside (mobile)', 'catalog items']}
/>
