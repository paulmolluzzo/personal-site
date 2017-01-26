---
layout: post
title:  "I like Meteor.js because I'm lazy"
date:   2013-10-07 21:52:07
featured: true
---
Over the past couple of weeks I've been playing with a cool new platform called [Meteor](http://meteor.com). The simple (incomplete) description is: Meteor is a Node.js framework that lets you write JavaScript that can run on both the client *and* the server.

I don't feel like studying for weeks/months to get started with a framework, and Meteor doesn't require it. A big selling point for me was that I can write a lot less code in a language I already know. Meteor takes that "write less" idea pretty far in my opinion. New projects start with just a JS file that can hold all application logic, interactions and serving, an empty CSS file and one HTML file. Handlebars is simple, transparent HTML templating. (At first blush Jade might seem kind of foreign.) And all the DB interaction (MongoDB) is done in JSON, which is probably already known by most developers. When compared to my foray(s) with Rails, the first steps felt tremendously easier because I only needed to learn a few Meteor functions.

I think another big part of the easy transition was that interactions with data on the client are "transparent" to the server without formal MVC structuring. You can list a collection in one line, then in another line create/update data for that collection. These operations aren't spanning different files and languages, and there's no "intra-application translation." Throw in the nifty reactivity and it's very easy to see your work producing something tangible quickly and get positive feedback of your effort.

Those two points, that it's all JavaScript and all in one place, made it possible to get up to speed — and deploy [my first, admittedly simple Meteor application](http://rolliodio.com) — fast and without much learning overhead. Really, you can just start hacking and and learn as you go along.

Meteor is a young framework and has some admitted caveats to what it offers, but if you're new to development and/or have only done front end work, I definitely suggest checking it out. It's made building a web application fun and quickly accessible, and I'm excited to see what else I can build with it.

EDIT - This post got a great response on Hacker News, and if you're interested in JavaScript or Meteor some folks have shared resources there. [Check it out.](https://news.ycombinator.com/item?id=6511509)