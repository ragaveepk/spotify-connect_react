# Spotify Connected App

The project is about a web application which visualizes personalized Spotify data with the help of Node.js, Express, React, Styled Components, and the Spotify API. On the front end -React, React hooks, and CSS-in- JS library, Styled Components were used to create a responsive user interface. The data will fetched from the Spotify API using modern ES6 async/await methods and display that data. On the back end, to authorize an app with Spotify using OAuth, and then build a Node server with the Express framework to handle the authentication requests. Finally, the project is deployed using Heroku.

[LIVE link](https://spotify-profile-connect.herokuapp.com/)
 
 ## Login 
![Login Page](https://github.com/ragaveepk/spotify-connect_react/blob/main/client/public/Screenshot%20(81).png)

## Profile 
![Profile Page](https://github.com/ragaveepk/spotify-connect_react/blob/main/client/public/Screenshot%20(82).png)

## Top Artists
![Top Artists Page](https://github.com/ragaveepk/spotify-connect_react/blob/main/client/public/Screenshot%20(83).png)



## Local Installation & Set Up

1. Register a Spotify App in your [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) and add `http://localhost:8888/callback` as a Redirect URI in the app settings

2. Create a `.env` file at the root of the project based on `.env.example` and add your unique `CLIENT_ID` and `CLIENT_SECRET` from the Spotify dashboard

3. Ensure [nvm](https://github.com/nvm-sh/nvm) and [npm](https://www.npmjs.com/) are installed globally

4. Install Node

    ```shell
    nvm install
    ```

5. Install dependencies

    ```shell
    npm install
    ```
6. Run the React app on <http://localhost:3000> and the Node server on <http://localhost:8888>

    ```shell
    npm start
    ```
## Deploying to Heroku with Git

1. Create a [Heroku](https://www.heroku.com/) app

2. Add your Heroku app as a git remote

    ```shell
    heroku git:remote -a your-app-name
    ```

3. Add `http://your-app-name.herokuapp.com/callback` as a Redirect URI in your Spotify app's settings

4. In your app's **Settings** tab in the Heroku dashboard, add [config vars](https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard).

   Based on the values in your `.env` file, the `CLIENT_ID`, `CLIENT_SECRET`, `REDIRECT_URI`, and `FRONTEND_URI` key value pairs. Make sure to replace the `localhost` URLs with your heroku app's URL.

   ```env
   REDIRECT_URI: http://your-app-name.herokuapp.com/callback
   FRONTEND_URI: http://your-app-name.herokuapp.com
   ```

5. Push to Heroku

    ```shell
    git push heroku main
   ```
