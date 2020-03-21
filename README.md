# Linky

Easily share links and booksmarks with firends and colleagues...

## Sample Data

You can find a sample of what the data will look like in `sampleData.json`. The home page is populated from this sample data.

## Developing

To get the dev server running:

- clone this repo with `git clone https://github.com/BetterDevelopers/Linky.git`
- install dependencies by running `yarn`
- run `yarn start` from the project root

The app is now running in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Hot reloading is available so any changes you make will cause the browser to reload.

## Production

Running `yarn build` from route will build a production ready version of the app inside the `build` folder.

The build is minified and the filenames include the hashes.<br />
App is now ready to be deployed

## Docker

**build image**
with docker installed, run from the root directory of this project:
```
docker build -t linky -f sysops/Dockerfile .
```

after image is built, run it:
```
docker run -ti -p 3000:3000 linky
```

CTRL-C to quit running the container. If you want to run the container in the background, add -d as an option