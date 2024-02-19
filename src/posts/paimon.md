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
</script>

This is my first serious project on Node.js as a backend developer. I created a discord bot for a closed server dedicated to communication and roleplay.

## Links

- Git repository – [github.com/koshacha/paimon-nestjs](https://github.com/koshacha/paimon-nestjs)
<!-- - Bot link - <DeferButton>[deswop.com](https://deswop.com)</DeferButton> -->

As the main library for dealing with Discord.js I used [this one](https://github.com/necordjs/necord).

## Bot commands

The bot can do the following

- Counts user posts in certain channels (admin decides which ones) and generates a rating for the whole time, week or month.
- With the help of random org gives a random number/action
- Realizes server economy - allows server users to earn fictional currency and buy game items with it (which can be created by admin)

## Realizations details

- Development Language: Node.js
- Nest.js framework
- Database: Google Firebase

## Work progress

In the course of work I got to know Nest.js and Discord.js better, gained experience in bot development. I configured Github Actions so that the docker image would be updated after changes in the main repository branch. Speaking of docker, the project is dockerized and run with docker-compose.
