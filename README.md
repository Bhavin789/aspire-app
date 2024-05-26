# Aspire App

Aspire app holds a static webpage for the `Cards` section where a user can see his/her account details like cards, recent transactions etc.


## How to start?

To run the app locally:
1. Run `yarn` to install all dependencies
2. Run `yarn start` to start the app on localhost

To build the app:
1. Run `yarn` build. It will transpile all the `TS` code `JS` inside a `build` folder

## Deployment

The app is deployed using `Netlify`. 

Link to the latest deployment: [https://main--bhavin-aspire-app.netlify.app/](https://main--bhavin-aspire-app.netlify.app/)

## Tools Used
1. React
2. react-query: Used to maintain API requests
3. typescript
4. styled-components: Used to styled native HTML elements. **Note**: `Tailwind` might have been an easier choice here but since I have already tried it many times, wanted to give `styled-components` a shot knowing that this might impact some performance
5. redux-toolkit: A library built over redux for better and isolated state management
6. antd: Used for OOTB components like Layout, Modal, Accordion, Carousel styled using styled-components .
7. prettier: Used for formatting the code

## Folder Structure

Folder structure is as follows: 

1. `src`: Holds all the code. It contains:
   1. `api-mocks`: Contains a mock server utility to serve static data to the for the calls
   2. `assets`: Contains all svgs
   3. `components` : Contains all components that are generic in nature and can be used across pages
   4. `constants`: Contains all the constants
   5. `hooks` : Contains all api and custom hooks used in the app
   6. `pages`: Contains various pages in the app. Each page has a folder with `pagename` and each folder has `PageName.tsx` file. It can also be accompanied by another `components` folder that are used within that page only. 
   7. `store`: Contains `slices` of redux store. More to read [here](https://redux-toolkit.js.org/introduction/getting-started)
   8. `types` : Holds generic types across. 
   9. `utils` : Contains utility functions that can be used across pages.

## Further Improvements

1. Make current version more responsive with collapsible side nav, div overflows etc.
2. Make Mobile version
3. Add UTs
4. Refactor some code to add to appropriate folders
5. Add lint support
6. Implement react-router to configure routing in app