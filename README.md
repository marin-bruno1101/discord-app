<h1 align="center" id="title">Full Stack Discord Clone</h1>

<p align="center"><img src="https://socialify.git.ci/marin-bruno1101/discord-app/image?language=1&amp;name=1&amp;owner=1&amp;pattern=Brick%20Wall&amp;theme=Auto" alt="project-image"></p>

<p id="description">This is a repository for Full Stack Discord Clone</p>

<p align="center"><img src="https://img.shields.io/badge/Status-DONE-green" alt="shields"></p>

<h2>🚀 Demo</h2>

[https://discord-app.up.railway.app/](https://discord-app.up.railway.app/)
  
<h2>Project Screenshots:</h2>

<img src="https://imgur.com/PB4MXbN.jpg" alt="project-screenshot" width="500">

<img src="https://imgur.com/uVaS8gZ.jpg" alt="project-screenshot" width="500">

<img src="https://imgur.com/TDaibm1.jpg" alt="project-screenshot" width="500">

<img src="https://imgur.com/VyrtLby.jpg" alt="project-screenshot" width="500">
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

- Real-time messaging using Socket.io
- Send attachments as messages using UploadThing
- Delete & Edit messages in real time for all users
- Create Text Audio and Video call Channels
- 1:1 conversation between members
- 1:1 video calls between members
- Member management (Kick Role change Guest / Moderator)
- Unique invite link generation & full working invite system
- Infinite loading for messages in batches of 10 (tanstack/query)
- Server creation and customization
- Beautiful UI using TailwindCSS and ShadcnUI
- Full responsivity and mobile UI
- Light / Dark mode
- Websocket fallback: Polling with alerts
- ORM using Prisma
- MySQL database using Planetscale
- Authentication with Clerk

<h2>💻 Built with</h2>

Technologies used in the project:

- Tailwind
- React
- Next.js
- Prisma
- MySQL
- Socket.io
- UploadThing
- ShadcnUI

<h2>Prerequisites</h2>

Node version 18.x.x

<h2>Cloning the repository</h2>

```shell
git clone https://github.com/AntonioErdeljac/next13-discord-clone.git
```

<h2>Install packages</h2>

```shell
npm i
```

<h2>Setup .env file</h2>

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=


DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

<h2>Setup Prisma</h2>

**Add MySQL Database (I used PlanetScale)**

```shell
npx prisma generate
npx prisma db push
```

<h2>Start the app</h2>

```shell
npm run dev
```

<h2>Available commands</h2>

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |

<h2>🛡️ License:</h2>
This project is licensed under the MIT
