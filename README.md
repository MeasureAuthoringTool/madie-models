# MADiE Typescript Models
madie-models is for including the Typescript models that can be shared between projects.

- npm install
- npm run build
- npm run lint
- npm run test
- npm run coverage

Create a PR for merge to main with a Title of "Release x.y.z" and the npm-publish github workflow will be executed.

To enable local development:

- npm install
- npm run build

In the package.json, for the app you are integrating with, replace
```"@madie/madie-models": "^0.0.5",```
with 
```"@madie/madie-models": "../madie-models/dist",```