---
title: "Learning Web Dev"
description: "Typing game/test"
date: "January 5 2020"
repoURL: "https://github.com/hkhaung/autocorrected-typing-software"
---

Autocorrected Typing Software, or ATS, is a small full-stack web application that presents a typing interface for users to test their typing skills. It features WPM, accuracy, and autocorrect. Websockets are used to enable real-time, low-latency communication between the client (browser) and the server and to enable multiplayer (multiplayer not yet implemented).


Check the repo out <a href="https://github.com/hkhaung/autocorrected-typing-software" target="_blank">here</a>.
<!-- 
<p>
  <img src="/imgs/learning-webdev/frontend-ecomm.png" alt="Another image from repo">
</p> -->

<!-- ![]() -->

## Purpose

I wanted to build a full-stack app since it exposes me to all layers of a web application.

I learned how data is fetched on the front end to how it's processed and stored on the back end. More specifically, I learned:
- Flask basics: how to create routes, handle HTTP requests
- CORS: during local dev, had to handle CORS restriction
- Websockets: learn how to use socketio/Flask-SocketIO, set up listeners 
- Databases: integrate a database (SQLite and MySQL)
- Frontend handling: connect to Flask backend through API endpoints to fetch or send data, connecting websocket to backend
- Frontend components: state management (`useState`, `useEffect`), utilizing Tailwind
- Docker: combining React and Flask, running production database in docker, environment variables + configuration

Overall, websockets and Docker are still confusing to me.

## Improvements

Possible improvements:
- Tests
- Set up CI/CD
- Better websockets

Possible features:
- Add multiplayer


## Tech Stack

- React + Tailwind
- Flask (w/ flask extensions) + SQLAlchemy
- SQLite (local dev) + MySQL (prod)
- Docker


<p>
  <img src="/imgs/ats/olddesign.png" alt="Old design">
  <em style="display: block; text-align: center; font-size: 14px;">Old design</em>
</p>
