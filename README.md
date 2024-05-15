# What's on task

`What's on task` is an example of an application in the early stages of development.
It comes with some strong opinions, but at this early stage of development this is all open to discussion. 
The goal of this task is not to implement technical changes, but to discuss the architecture, technical decisions and your opinions on what has been made and how you would approach moving this project forward. You don't have to agree with the decisions made in this project, and it would be great to hear in which ways you disagree and justifications for doing so. 

Before the session consider what you'd like to discuss, but as a starting point perhaps consider: 
- What needs to be done to take this towards production.
- What decisions do we need to make? How might we properly inform those decisions? 
- Which areas of this project need the most work? Consider how much work needs to be done and begin making estimates on how much effort and developer resource is required. 

## Overview

This is the Natural History Museum's What's on task app. It consumes mock data from two mock API's, receiving events data and copy data in seperate calls. This data is requested server side via the `api/fetch-events-data` function.

Content from the Copy API is merged with events data on the server. The client can then consume the data as if it came from a single API.

## Styling

This project uses [TailwindCSS](https://tailwindcss.com/), CSS Modules and global CSS. It's recommended to familiarise yourself with the Composition and Utility CSS classes that are globally available, and with [Cube CSS](https://cube.fyi/) from which these are inspired. 

## Getting started

1. Set Node version to `18.12.1`
2. Configure `.env.local` with the following:

```
NEXT_PUBLIC_BASE_PATH =/whats-on-task
NEXT_PUBLIC_HOST=http://localhost:3000
```

3. Install dependencies `npm install`
4. Run the application `npm run dev`, the app will be viewable at [`http://localhost:3000/whats-on-task`](http://localhost:3000/whats-on-task)
