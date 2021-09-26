This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Pre-requisuites

First, we need to make sure that both Node & NPM are installed on your machine, can be verified by executing commmands as below.

```bash
node -v 
npm -v

if it is not installed yet, install it from [Node](https://nodejs.org/en/download/).

Confirm the installation by running the same set of commands once installed it. 
you could see the versions installed on your machine.

```

### Install Dependencies

Secondly, install the dependent NPM packages before starting the application by

```bash
npm i or npm install
# or
yarn i or yarn install

Note: Make sure this step is executed successfully to proceed next step.
```
### Ready for running application
The application supports both development & production mode.

#### Development Mode
 The development mode is mainly for running the application in local maching during the development phase of the SDLC. It is not intended for deploying application on to production environments. It is because lot of features like code spliting, webpack bundling features are not enabled, build is not optimised for better performance.

  ##### HMR Feature
  HMR is a nice feature helps in improving developer experience. NextJS supports this HMR features out of the box.

  The some of the features of HMR here to highlight are 
    Fast feedback loop
    No server restart
    Changes reflect in browser immediately
  
 The HMR feature in development mode makes the development experience better i.e. the changes will reflect on the broswser immediately without any delay, helps in reducing the development effort a lot.

To start the application in development mode, run commands as below.  
```bash
npm run dev
# or
yarn dev

The application will start on http://localhost:3000
```

To debug the application in development, run commands as below. 

```bash
npm run dev:debug
# or
yarn dev:debug

The application will start on http://localhost:8000, 
along with debugging features enabled at port 9229. 
The server logs confirms it by showing message as below

Debugger listening on ws://127.0.0.1:9229 

```


#### Production Mode
 The production mode is mainly for publishing application for production deployment, and the packages published can be moved to production server.

 It is two step process as below

  ##### Building packages
    First step in production mode is building the application. It create bundle and deployment package.
Run as below to perform this step

```bash
npm run build
# or
yarn run build
```

Next, start the application by executing below command 

```bash
npm run start
# or
yarn run start
```
The application will start on http://localhost:8000, and enable the debugging at port 9229. Below message will appear on the server log.
Debugger listening on ws://127.0.0.1:9229 

 ##### Browsing Application
That's all, application is ready for browsing, copy the url [http://localhost:8000] and 
place it in the address bar of any browser, to see the result.
 
The flight routes page looks similar the snapshot below.

[Flight Routes] ()

### Modifying the application / REST API hosted in the same application

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on development system @ [Flight routes API](http://localhost:8000/api/routes/flight-routes?code=dxb-lhr-1). This endpoint can be edited in `pages/api/routes/flight-routes.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## About Application
The application shows customer options to see the available flight routes, also supports them to select one of the routes available. 

The application is designed in ATOMIC design patterns which helps to build the component as modular, consistent and resusable.

The application folders are 

#### ATOMS
This folder holds the tiny components which would be used in molecules to compose the component.

#### MOLECULES
This folder holds the litter bigger components which would be used in organism to compose the component that represents a section in the page.

#### ORGANISMS
This folder hols the section level component of your page, composed of using more than a molecules.

#### PAGES
This folder hols the acutal pages which user would be seeing, the page is composed of using more than an organism.

Also pages host the restful APIs which can be accessed by application @ the folder [pages/api].

The current flight route api rely on the local storage i.e. [flight-schedule.json]

#### LAYOUTS
This folder holds the component which builds the layout of the application.

#### UTILS
This folder holds the utility functions that are available for the application components/ pages for use.

#### PUBLIC 
This folder holds any assets like image, fonts and any resources the application would need to make it available for others. Theimages / icons are placed in this folder.

#### STYLES
This folder holds the global styles which are applicable for all the pages of the application.


#### MULTIPLE ENVIRONMENT SUPPORT
The application is designed to run the application in different mode like local, dev, test, production. It supports to maintain a separate configuration for each environment. 

use [.env, .env.local, .env.development, .env.production, .env.test] files to maintain the configuration with specific to an environment.


## Application / System Features
#### SEO Friendly
Application is designed to comply with SEO, and react/nextjs server side rendering nature makes page is SEO friendly.

#### Multilingual
Application is designed to support more than a languages, NPM package [next-intl] makes is it easy, and possible. Currently application supports ['en', 'ja', 'ru-RU','ar-AE'] languages, the [english] is set as default languages.

The language supportive materials are placed in the foler [locales].

#### SAAS / CSS SUPPORT
The application is designed to support resources such as css / scss / saas, nextjs supports such features out of the box.

### Engineering Practices 
The application is designed considering the engineering best practices and guidelines.
#### Quality

It supports automation of unit testing, snapshot testing, UI testing. Tools and technologies like [JEST, enzyme] make it easier.

NPM Packages like Lint, Eslint helps css/sass to be aligned with the standard best practices rules.


The code quality is one of the key constraint which has been taken into while designing this application.

The quality check like lint, unit test and code coverage are automated and integrated with each commit. The npm package [pre-commit] makes it easy, and integrated with the application.

## Application Demo on production
The Demo application is available on production.
  
 [Flight Routes App Home Page](https://flight-routes-app-theta.vercel.app/), 
 
 [Flight Routes Search Results](https://flight-routes-app-theta.vercel.app/flight-routes?code=dxb-lhr-2)


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## Application deployment on production
Once the application is ready for deployment, it can be deployed in any of the hosting provider. Vercel is the one of the hosting provider which supports Nextjs application features out of the box.

The demo application is available on production, Home page is available at
[Flight Routes App Home Page] (https://flight-routes-app-theta.vercel.app/), and [Flight Routes Search Results] (https://flight-routes-app-theta.vercel.app/flight-routes?code=dxb-lhr-2)


The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
