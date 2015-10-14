# Service Workers Workshop

 * The "start" folder contains the base site from which we will work.
 * The "finished" folder contains the [completed site](https://marcoscaceres.github.io/sw-workshop/finished/).
   If you get stuck, you can see how things were done there.

## Before we start (pre-reqs)

Grab:

 * [Firefox Nightly](https://nightly.mozilla.org/)
 * [Chrome Canary](https://www.google.com/chrome/browser/canary.html)

In Firefox, go to "[about:config](about:config)", and type "serviceworkers". 
Make sure everything is set to "true".

Also enable "`devtools.debugger.workers`" in [about:config](about:config).

Git clone (or fork) this repo:

```Bash
git clone https://github.com/marcoscaceres/sw-workshop.git
```

## Start serving

In the terminal, got to "start" and start a web server:

```JS
python -m SimpleHTTPServer
```

**REMEMBER: All the caches are working against you trying to ruin your day.**

## Fire up browser 

 * In Firefox, go to [about:serviceworkers](about:serviceworkers)
 * In Chrome, go to [about:serviceworker-internals](about:serviceworker-internals)

I suggest you bookmark those or "pin" them!

Navigate to [http://localhost:8000](http://localhost:8000).

## Files
We will be working on two files in the [start](start) folder:

 * [registration.js](start/js/registration.js) (client registration)
 * [sw.js](start/sw.js) (worker)
