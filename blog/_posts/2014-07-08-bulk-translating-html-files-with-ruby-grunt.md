---
layout: post
title:  "Bulk Translating HTML Files with Ruby & Grunt"
date:   2014-07-08 21:52:07
featured: true
---
I'm working on a project where a client wants to expand their market into regions that have a different language, and as part of that move, they want to bring over nearly 100 pages of static HTML pages with them. Since it's not in a CMS (it was always easier to build the next set of pages then build a CMS), we need to modify the text within the code, without disrupting the code itself. Each page is PHP with Smarty templating logic sprinkled throughout. Asking Chrome to translate each page and hand transferring the content is tedious and inefficient, so I looked for a better way.

The solution I came up with isn't perfect by any stretch, and if you're a Ruby or Grunt pro I'd welcome any suggestions for improving this. In the end, it is working even with a little extra work that probably could be automated. But I'll take "working and imperfect" over "perfect and not ready to use."

At first my Google-fu turned up nothing. All my searches found were ways of translating small strings itemized in JSON or some other config. But I have entire files to translate, so that doesn't work. Then I came across [easy_translate](https://github.com/seejohnrun/easy_translate), which is a Ruby gem for using [Google's Translate API](https://developers.google.com/translate/) to translate strings of text you pass as an argument. So, why not pass the file as a string?

Enter this Ruby snippet:

<script src="https://gist.github.com/paulmolluzzo/49243f515eccf65ab0d7.js"></script>

The quick run through is we go through each file in the `target_path` and, basically, if it's a worthwhile item we make variables `contents` and `update` we'll use to place in the old and new versions of the contents of the file, respectively. Then we open the file and fill up those variable. On line 20 we empty the file, then in the last block on lines 22-24 we write the `update` string into the file. In the end, this took about 60 files with Russia and translated them to English in ~30 seconds. Once the script was working, the biggest impediment was Google's rate limit.

There are a couple of small quirks in this Ruby script, and I'm sure there's a solution if I spend a couple more hours on it. The big one is that I could use `.truncate(0)` within the `File.open` block, but for some reason having it that way started appending Unicode characters to the strings. I'm totally open to advice here. When I replaced it with `File.open(item, "w") {}` the issue evaporated, so it stayed put.

The other problem with this script is that while the HTML remains (somewhat) untouched, the formatting is lost. The new translated files are a single line of minified HTML. Not so good for making changes in the future.

In comes Grunt, and now we'll prettify the HTML and then find all the Smart templating that got mangled in the process. I used [grunt-prettify](https://www.npmjs.org/package/grunt-prettify) and [grunt-text-replace](https://github.com/yoniholmes/grunt-text-replace) for these two tasks. They were both pretty straightforward uses of the packages, the only wackiness came from finding all the ways Smarty didn't come out nicely. In the example file below I only included a few things we're finding/replacing, and we have a good 30 or so find/replace items listed in the actual Gruntfile.

This is the Gruntfile:

<script src="https://gist.github.com/paulmolluzzo/ed41f3423f23f13a1322.js"></script>

This whole thing is pretty neat to me, even though parts of the Ruby are still rather mysterious to me. In the end the biggest failure point of this solution is the accuracy of Google's translations since there's no way of checking the confidence rating before updating the file. The easy_translate gem does support that argument for the API, so maybe I'll take a look and tweak this all further.
