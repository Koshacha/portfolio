---
title: Jobs Search
description: Next.js, PHP, Rest API
date: '2022-4-2'
sort: 4
categories:
  - frontend
  - backend
stack:
  - next.js
  - react.js
  - php
  - rest api!
published: true
emoji:
  - 💼
  - ✉️
  - 📮
  - 👩‍💻
  - 👨‍💻
---

<script>
  import DeferButton from '/src/components/DeferButton.svelte';
  import Gallery from '/src/components/Gallery.svelte';
  import image_1 from '/static/images/posts/jobs/image-1.jpg?format=webp';
  import image_2 from '/static/images/posts/jobs/image-2.jpg?format=webp';
  import image_3 from '/static/images/posts/jobs/image-3.jpg?format=webp';
  import image_4 from '/static/images/posts/jobs/image-4.jpg?format=webp';
  import image_5 from '/static/images/posts/jobs/image-5.jpg?format=webp';
</script>

You are here! At some point I needed a place where I could make myself known, talk about my skills and projects, that's how this site came about. I chose Svelte as a framework and during the whole time of development I have never regretted it. The interface of the site was created traditionally with Tailwind CSS, for hosting I used Vercel.

## Links

- Git repository: **not available due to NDA**
- Website link: <DeferButton><a href="https://jobsandneeds.com" rel="noreferrer">jobsandneeds.com</a></DeferButton>

## Choosing a Svelte/SvelteKit framework

I visited the framework's website, went through the small tutorials provided on the site and I found this framework interesting. So, I decided to explore it more deeply and build a website on it. And man, I just love Svelte! It's easy to learn and presents an incredibly user-friendly development experience. I think it's perfect for building both simple and complex sites. It's a huge relief to come to Svelte after React.js and realize that you don't have to worry about things like memoizing components.

## Work Progress

In the course of my work, I learned all the details of developing in Svelte, from simple components, to complex logic in +server.ts files. The posts on the site are generated from Markdown files, dynamic image optimization is set up, and the interface is full of simple but nice animations. I also got more familiar with Vite.

## Images

<Gallery
className="mb-2"
images={[image_4]}
alt={['job search page']}
/>

<Gallery
className="sm:columns-2 mt-4"
images={[image_1, image_3, image_2, image_5]}
alt={['about us page', 'page sections on the main page', 'search input on the main page', 'job search mobile page']}
/>
