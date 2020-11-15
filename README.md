# tretton-ninjas

An interface to show the people working at tretton37. Built for the tretton37 JS code challenge.

## Approach

I've elected to build this project in Svelte, partly because I think it's a fantastic, lightweight framework that's pretty optimal for small apps like this, and partly because it's a good learning opportunity for me as I don't have very much experience with it in comparison to other similar frameworks. I've chosen the following requirements to focus on:

- No UI framework used (such as Bootstrap, Ant) (1 pt)
- Screen reader function (1 pt)
- Responsive design, works on mobile and tablets (2 pt)
- Sort by name and office (1 pt)
- Filter by name and office (1 pt)
- Works in Chrome, Firefox, Edge (1 pt)
- End-to-end testing (with an existing framework) (2 pt)

Three of these (screen reader function, responsive design, and cross-browser support) I chose mostly out of principle since I try to treat these as baseline requirements for things I build on the web. As for the rest of the requirements, I chose them because I feel they give a lot of value in relation to the effort of implementing them, in terms of both functionality and QA. My end goal was something that feels somewhat like a finished product. There are certainly more aspects that I think are lacking before it feels fully finished though, such as keyboard navigation, performance (e.g. the pagination/infinite scroll story), and a CI/CD pipeline.

## Installation

First off, you will need to have [Node.js](https://nodejs.org) installed. Then install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see the app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Running tests

To run end-to-end tests, first start the development server as described above. Then start [Cypress](https://www.cypress.io/) in another terminal:

```bash
npm run cypress:open
```

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
