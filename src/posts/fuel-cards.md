---
title: Fuel Card Website
description: Wordpress, PHP
seoDescription: A corporate website for a fuel card company created using Bootstrap and CMS Wordpress in Ilya's Mazunin Portfolio.
date: '2020-1-1'
sort: 1
categories:
  - frontend
  - backend
legacy: true
published: true
emoji:
  - 🚘
  - 🛻
  - 🛞
  - 🚓
  - 🚛
  - ⛽
---

<script>
  import DeferButton from '/src/components/DeferButton.svelte';
  import Gallery from '/src/components/Gallery.svelte';
  import image_1 from '/static/images/posts/cards/card-1.jpg?format=webp';
  import image_2 from '/static/images/posts/cards/card-2.jpg?format=webp';
</script>

A corporate website for a fuel card company created using Bootstrap and CMS Wordpress.

## Links

- The Gulp.js boilerplate I created, which I used for development: [github.com/koshacha/gulp-boilerplate](https://github.com/koshacha/gulp-boilerplate)
- Website link - <DeferButton><a href="https://tver-karta.ru/" rel="noreferrer">tver-karta.ru</a></DeferButton>

## Images

<Gallery
className="sm:columns-2 mb-2"
images={[image_1, image_2]}
alt={['main page head', 'cards catalogue']}
/>
