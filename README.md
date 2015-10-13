# SW Workshop

 * The "start" folder contains the base site from which we will work.
 * The "finished" folder contains the completed site.
   If you get stuck, you can see how things were done there.

## Before we start (pre-reqs)

Grab:

 * [Firefox Nightly](https://nightly.mozilla.org/)
 * [Chrome Canary](https://www.google.com/chrome/browser/canary.html)

In Firefox, go to "about:config", and type "serviceworkers". 
Make sure everything is set to "true".

Also enable "devtools.debugger.workers" in about:config.

## Start serving

In the terminal, got to "start" and start a web server:

```JS
python -m SimpleHTTPServer
```

** REMEMBER: All the caches are working against you trying to ruing your day. **

## Fire up browser 

 * In firefox, go to `about:serviceworkers`
 * In chrome, go to `about:serviceworker-internals`

I suggest you bookmark those! 

## Files

 * registration.js (client)
 * sw.js (worker)
