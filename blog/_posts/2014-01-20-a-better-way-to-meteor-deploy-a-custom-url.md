---
layout: post
title:  "A better way to 'meteor deploy' a custom URL"
date:   2014-01-20 21:52:07
featured: true
---
Part of the allure of Meteor is that deploying apps you build is simple and free. Yes, **free**. Meteor will host your new application on their servers just by running a short command. You can even use your own domain for the app, but there's a hitch: An application deployed using `meteor deploy www.appdomain.com` will only be available using the www. subdomain, and similarly, using `meteor deploy appdomain.com` doesn't handle connections from the www. subdomain. In fact, running both commands will create two separate instances of the application that are not connected.

The solution I've found is to deploy to the www. subdomain and point the naked domain to the subdomain using a 301 redirect. Here are the steps to do it yourself:


1. Have/acquire some sort of hosting where you can upload an .htaccess file for the naked domain, and point the naked domain to that hosting service.
1. In the html folder on that naked domain's hosting, upload a .htaccess file with the 301 redirect snippet below.
1. Following the Meteor directions run `meteor deploy www.appdomain.com`.
1. Also following the directions, point the CNAME for the www. subdomain to `origin.meteor.com`

.htaccess Snippet:

~~~
Redirect 301 / http://www.appdomain.com/
~~~

If you've done this all correctly navigating to www.appdomain.com should behave exactly the same, and navigating to the naked domain will redirect to www.appdomain.com. A User might notice that the URL is updated in the browser to prepend the subdomain. The directory path (i.e. appdomain.com/pathname) remains intact through the redirect and the app's routing should work as usual.

NB - Doing this process inverted — i.e. pointing the www. to the naked domain and pointing deploying on http://domain.com — is possible if you use an A record that points to the Meteor server at `107.22.210.133` but it's not advised since a change in that IP address will down your entire application.