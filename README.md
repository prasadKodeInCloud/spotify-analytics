## Introduction

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), [tailwind](https://tailwindcss.com/) and [echarts](https://echarts.apache.org/) to visualise spotify web api track analytics and features.

## Getting Started

First you need to set the Spotify client id and secret environment variables. ( SPOTIFY_CLIENT_ID, SPOTIFY_SECRET)
Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Visualise track analytics

- Copy a track id from spotify

`ex: In https://open.spotify.com/track/4OROzZUy6gOWN4UGQVaZMF 
trackId is 4OROzZUy6gOWN4UGQVaZMF `

- Navigate to the following url in the app. `http://localhost:3000/track/{trackId}`
