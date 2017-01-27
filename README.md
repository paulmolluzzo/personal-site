# ![](./logo.png) Personal Site

Static site built with Jekyll and compacted with Gulp. Modeled after [Compact](https://github.com/nestedobject/compact).

## Setup

You need `ruby` and `bundler` for the Jekyll stuff, `node` and `npm` for the Gulp stuff. You can use the [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) extension to auto-refresh your browser window if you're developing on the site.

Run `bundle install` and then `npm install`.

## Use

1. Build the site: `npm run build`
3. Start the server: `npm start`

If you're developing on the site run `npm run dev` to start a server with `guard` that'll watch for changes to the source code and refresh the browser if you're running the Live Reload extension.

## Test

1. `npm run test`

---

© 2017 Paul Molluzzo
