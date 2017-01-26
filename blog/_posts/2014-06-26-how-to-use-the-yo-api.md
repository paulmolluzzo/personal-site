---
layout: post
title:  "How to Use the Yo API"
date:   2014-06-27 21:52:07
featured: true
---
Yo is this new app that's made it around the block on Twitter recently, and in short order they've released an API that compliments the super simple app. The API doesn't come with much documentation—and it doesn't really need it, I guess—but since the founder is busy and there is no API Account management panel, it help to get these things right on the first shot.

[Yo is doing a hackathon tonight](https://www.eventbrite.com/e/yo-hackathon-2-letters-2-hours-ready-set-yo-tickets-12071296573), so I suspect it'll be easier for you to get changes made to your account settings if you're there, but with only two hours to whip something up, you'll want to be efficient.

First off, you're going to need an API key. Heads to http://yoapi.justyo.co to nab an API key. It took me about a day to get my key, but again, if you're at the hackathon I'm betting you'll get it quicker.

While you fill out the form there are two important areas to decide appropriately: The **username** that your Yos will come from (and that people will Yo at), and the **callback URL**.

The username is not the same as your personal account, so you won't be able to Yo from your phone *or* the API. It's just for the API. **Assume you won't be able to change this**. If you request a taken name, Yo will send you an email to choose another name.

The callback URL is going to get hit with a `GET` request from the Yo service with the parameter `?username=WHATEVER` whenever someone subscribes or sends your username a Yo. **There's no endpoint to get a current list of subscribers, so you must track traffic to this URL from the very beginning.** Two neat features here: Just getting hits on that URL will act as a "counter" of Yos similar to the count that's in the app. Second, each unique URL is a User that once "subscribed" to your Yos.

Now that you have the key, there's only one endpoint: http://api.justyo.co/yoall/ That endpoint will Yo all of the subscribers that you've accumulated so far. In the post that Yo put out there is a cURL example and a link to a repo with a Python example, which should be plenty to get started. If you're a fan of Meteor.js, I released a small Atmosphere package to use the Yo API here: [https://atmospherejs.com/package/yo-meteor](https://atmospherejs.com/package/yo-meteor)

That's all there is to it.