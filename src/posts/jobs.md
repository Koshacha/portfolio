---
title: Jobs Search Board
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

As part of this project, I developed a Next.js application with a PHP backend that provides users with a listing of employment opportunities. Talroo API and CareerJet API are used to retrieve the jobs. The users can filter the results by category, job location and by text query.

The UI has been designed using Tailwind CSS.

## Links

- Git repository: **not available due to NDA**
- Website link: <DeferButton><a href="https://jobsandneeds.com" rel="noreferrer">jobsandneeds.com</a></DeferButton>

## Digital Mailing

In contact with Advertising Specialist, I got to learn about a lot of different services and integrations. With Apps Script, I organized the collection of leads from landing pages into a Google Sheets spreadsheet, and in the email sending services, I prepared and set up all the necessary scripts to work. I'll list all the integrations used below:

- GetResponse is an online marketing platform that allows you to send email newsletters, create lendings, host webinars, etc., based in Poland.
- SendGrid is a Denver, Colorado based customer communication platform for transactional and marketing emails.
- GoHighLevel is a comprehensive software solution built to help you manage customer relationships, automate sales processes and improve lead generation efforts, all from a single platform.

Part of my job was also to improve the reputation of our domains for email services, reduce the risk of getting into the spam folder, and make users more likely to actually open emails.

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
