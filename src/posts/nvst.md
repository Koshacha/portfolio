---
title: Marketplace Platform
description: Next.js, RTK Query, WebSocket, Google Firebase Authentication, Docker
seoDescription: 'Marketplace platform leveraging Next.js, RTK Query, WebSocket, Google Firebase Authentication, and Docker for seamless user experience.'
date: '2023-6-1'
sort: 5
categories:
  - frontend
stack:
  - next.js
  - rtk query!
  - socket!
  - google firebase authentication!
  - docker!
colspan: true
rowspan: true
published: true
emoji:
  - 🛒
  - 👜
  - 👛
  - 🛍️
---

<script>
  import DeferButton from '/src/components/DeferButton.svelte';
  import Gallery from '/src/components/Gallery.svelte';
  import image_1 from '/static/images/posts/nvst/image-1.jpg?format=webp';
  import image_2 from '/static/images/posts/nvst/image-2.jpg?format=webp';
  import image_3 from '/static/images/posts/nvst/image-3.jpg?format=webp';
  import image_4 from '/static/images/posts/nvst/image-4.jpg?format=webp';
  import image_5 from '/static/images/posts/nvst/image-5.jpg?format=webp';
  import image_6 from '/static/images/posts/nvst/image-6.jpg?format=webp';
</script>

My first complex project using React.js - a website for a marketplace where users can create accounts, customize their personal profile, create stores, products, promotional posts and jobs, add items to cart and correspond with sellers. In this project I worked exclusively on the Frontend. I was in constant contact with the specialist responsible for the Backend.

## Links

- Git repository - **not available due to NDA**
- Website link - <DeferButton><a href="https://anvost.com" rel="noreferrer">anvost.com</a></DeferButton>

## Choosing a Next.js framework

SEO-optimization, availability of every page of the site in search engine results was very important for the customer, that's why Next.js was chosen as the main technology. It has the usual and familiar React.js under the hood and provides convenient work with routing, page creation and SSR.

## Work Progress

During the course of the project, I became familiar with a number of essential technologies and libraries such as:

- Incremental Static Regeneration (ISR) in Next.js
- Socket for implementing chat (https://www.npmjs.com/package/react-use-websocket)
- Google Firebase Auth - users can use social networks for registration and or authorization on the site

## Images

<Gallery
className="sm:columns-2"
images={[image_2, image_5, image_1, image_4, image_3, image_6]}
alt={['landing page', 'the shops list', 'settings page', 'shop\'s detail page', 'advantages section on landing page', 'paid promotion page']}
/>
