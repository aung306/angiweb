# Documentation for AngiWeb!

- [Frontend Framework: Remix Docs](https://remix.run/docs)
- [CSS Framework: Tailwind Docs](https://tailwindcss.com/docs/installation)
- [Deployment: Fly.io](https://fly.io/launchpad)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

# Want to make a website of your own?
### Let me help! Here are step by step instructions for how to start making your own website.

1. Prerequisites: Node.js & npm! [Install Node.JS](https://nodejs.org/en/download)
2. Create an empty GitHub Repository (no README.md or LICENSE)
3. ```git clone``` your repository into your local desktop using your computer's terminal. Then ```cd``` into this repository.
4. In the repository, use ```npx create-remix@latest``` to create a new Remix application.
5. When prompted 'Where should we create your new project?' answer ```/``` because you are in the repository already.
6. Remix will recognize there is a Git repo initialized with your folder and begin downloading.
7. ```npm run build``` and click the localhost link to see your app in production!
8. ```app/routes/_index.tsx``` is your main page. Customize it any way you'd like!
9. For deployment, go to [Fly.io](https://fly.io/launchpad) and create an account
10. Install Fly.io using ```powershell -Command "iwr https://fly.io/install.ps1 -useb | iex"```
11. In your project folder, use ```fly launch``` and watch the magic happen!
12. Congrats! You just made your own website.

This part of the documentation was made for David V :) Thank you for giving me motivation to work on my personal projects!
