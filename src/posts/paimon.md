---
title: Discord Bot
description: Node.js, Nest.js, Google Firebase, Docker
date: '2024-1-7'
sort: 4
categories:
  - backend
stack:
  - node.js
  - nest.js
  - google firebase!
  - docker!
published: true
emoji:
  - 🤖
  - 🎲
  - 💬
---

<script>
  import DeferButton from '/src/components/DeferButton.svelte';
  import Gallery from '/src/components/Gallery.svelte';
  import image_1 from '/static/images/posts/paimon/image-1.jpg?format=webp';
  import image_2 from '/static/images/posts/paimon/image-2.jpg?format=webp';
  import image_3 from '/static/images/posts/paimon/image-3.jpg?format=webp';
</script>

This is my first serious non-study project on Node.js as a backend developer. I created a bot for a private Discord server dedicated to communication and roleplay.

## Links

- Git repository: [github.com/koshacha/paimon-nestjs](https://github.com/koshacha/paimon-nestjs)
- Bot link: <DeferButton>I'll add it later</DeferButton>

As the main library for dealing with Discord.js with Nest.js I used [this one](https://github.com/necordjs/necord).

## Bot commands

The bot can do the following.

- Counts member posts in certain channels (admin decides which ones) and outputs a rating for the whole time, week or month.
- With the power of [RANDOM.ORG](https://www.random.org/) gives a random number/action
- Supports simple server economy - allows server users to earn currency and buy game items with it (which can be created by admin)

## Realizations details

- Development Language: Node.js
- Nest.js framework
- Database: Google Firebase

## Work progress

In the course of work I got to know Nest.js and Discord.js better, gained experience in bot development. I configured Github Actions so that the image at Docker Hub would be updated after changes in the main repository branch.

## Images

<Gallery
className="mb-2"
images={['/images/posts/paimon/rating.gif']}
alt={['members rating']}
/>

<Gallery
className="sm:columns-2 mt-4"
images={[image_2, image_3, image_1]}
alt={['skillcheck', 'rating output, if we do not have enough messages on server', 'commands menu']}
/>

## Launch the bot using docker compose

```yaml
name: paimon
services:
  paimon-bot:
    ports:
      - 8000:8000
    volumes:
      - .:/usr/src/app
    env_file:
      - .env
    restart: always
    logging:
      options:
        max-size: 1g
    image: koshacha/paimon-bot:master
```

You'll also need to create an .env file and put it next to it.

```
DISCORD_TOKEN=""
DEV_GUILD=""
GOOGLE_APPLICATION_CREDENTIAL=""
GOOGLE_PROJECT_ID=""
GOOGLE_CLIENT_EMAIL=""
GOOGLE_PRIVATE_KEY=""
```

You'll need to get a Discord token and Google Firebase keys first, of course.
