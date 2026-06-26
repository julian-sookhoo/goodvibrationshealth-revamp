2:58:27 PM: build-image version: cbbb2660d860fe70694043ec05851a3910a2bf39 (noble-new-builds)
2:58:27 PM: buildbot version: 863d78834c7df98fbadcc32a31460eb244115cc2
2:58:28 PM: Building with cache
2:58:28 PM: Starting to prepare the repo for build
2:58:28 PM: Preparing Git Reference refs/heads/main
2:58:29 PM: Custom build path detected. Proceeding with the specified path: 'site'
2:58:29 PM: Custom publish path detected. Proceeding with the specified path: 'site/dist'
2:58:29 PM: Custom build command detected. Proceeding with the specified command: 'npm run build'
2:58:29 PM: Installing dependencies
2:58:30 PM: mise ~/.config/mise/config.toml tools: python@3.14.3
2:58:30 PM: mise ~/.config/mise/config.toml tools: ruby@3.4.8
2:58:30 PM: mise ~/.config/mise/config.toml tools: go@1.26.2
2:58:31 PM: v20.20.2 is already installed.
2:58:31 PM: Now using node v20.20.2 (npm v10.8.2)
2:58:31 PM: Enabling Node.js Corepack
2:58:31 PM: No npm workspaces detected
2:58:31 PM: Installing npm packages using npm version 10.8.2
2:58:34 PM: npm warn deprecated tsconfck@3.1.6: unmaintained
2:58:35 PM: added 386 packages in 4s
2:58:35 PM: npm packages installed
2:58:36 PM: Successfully installed dependencies
2:58:36 PM: Detected 1 framework(s)
2:58:36 PM: "astro" at version "4.16.19"
2:58:36 PM: Starting build script
2:58:37 PM: Section completed: initializing
2:58:40 PM: ​
2:58:40 PM: Netlify Build                                                 
2:58:40 PM: ────────────────────────────────────────────────────────────────
2:58:40 PM: ​
2:58:40 PM: ❯ Version
2:58:40 PM:   @netlify/build 36.0.0
2:58:40 PM: ​
2:58:40 PM: ❯ Flags
2:58:40 PM:   accountId: 6a3ed72bca43d6c1cfdfe9d8
2:58:40 PM:   baseRelDir: true
2:58:40 PM:   buildId: 6a3ed9e2562f5fc22497eea6
2:58:40 PM:   deployId: 6a3ed9e2562f5fc22497eea8
2:58:40 PM: ​
2:58:40 PM: ❯ Current directory
2:58:40 PM:   /opt/build/repo/site
2:58:40 PM: ​
2:58:40 PM: ❯ Config file
2:58:40 PM:   /opt/build/repo/site/netlify.toml
2:58:40 PM: ​
2:58:40 PM: ❯ Context
2:58:40 PM:   production
2:58:40 PM: ​
2:58:40 PM: build.command from netlify.toml                               
2:58:40 PM: ────────────────────────────────────────────────────────────────
2:58:40 PM: ​
2:58:40 PM: $ npm run build
2:58:40 PM: > goodvibrationshealth@0.0.1 build
2:58:40 PM: > astro build
2:58:41 PM: 19:58:41 [types] Generated 317ms
2:58:41 PM: 19:58:41 [build] output: "static"
2:58:41 PM: 19:58:41 [build] directory: /opt/build/repo/site/dist/
2:58:41 PM: 19:58:41 [build] Collecting build info...
2:58:41 PM: 19:58:41 [build] ✓ Completed in 347ms.
2:58:41 PM: 19:58:41 [build] Building static entrypoints...
2:58:44 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2
2:58:43 PM: 19:58:43 [vite] ✓ built in 2.03s
2:58:43 PM: 19:58:43 [build] ✓ Completed in 2.05s.
2:58:43 PM:  building client (vite) 
2:58:43 PM: 19:58:43 [vite] transforming...
2:58:43 PM: 19:58:43 [vite] ✓ 2 modules transformed.
2:58:43 PM: 19:58:43 [vite] rendering chunks...
2:58:43 PM: 19:58:43 [vite] ✓ built in 11ms
2:58:43 PM:  generating static routes 
2:58:43 PM: 19:58:43 ▶ src/pages/404.astro
2:58:43 PM: 19:58:43   └─ /404.html (+7ms)
2:58:43 PM: 19:58:43 ▶ src/pages/about.astro
2:58:43 PM: 19:58:43   └─ /about/index.html (+3ms)
2:58:43 PM: 19:58:43 ▶ src/pages/blog/[slug].astro
2:58:43 PM: The collection "blog" does not exist or is empty. Ensure a collection directory with this name exists.
2:58:43 PM: 19:58:43 ▶ src/pages/blog/index.astro
2:58:43 PM: 19:58:43   └─ /blog/index.htmlThe collection "blog" does not exist or is empty. Ensure a collection directory with this name exists.
2:58:43 PM:  (+2ms)
2:58:43 PM: 19:58:43 ▶ src/pages/book.astro
2:58:43 PM: 19:58:43   └─ /book/index.html (+2ms)
2:58:43 PM: 19:58:43 ▶ src/pages/faq.astro
2:58:43 PM: 19:58:43   └─ /faq/index.html (+6ms)
2:58:43 PM: 19:58:43 ▶ src/pages/help/[slug].astro
2:58:43 PM: 19:58:43   ├─ /help/anxiety-stress/index.html (+8ms)
2:58:43 PM: 19:58:43   ├─ /help/chronic-pain/index.html (+3ms)
2:58:43 PM: 19:58:43   ├─ /help/fears-phobias/index.html (+3ms)
2:58:44 PM: 19:58:43   ├─ /help/life-direction/index.html (+3ms)
2:58:44 PM: 19:58:43   ├─ /help/sleep/index.html (+3ms)
2:58:44 PM: 19:58:43   └─ /help/weight-habits/index.html (+3ms)
2:58:44 PM: 19:58:43 ▶ src/pages/help/index.astro
2:58:44 PM: 19:58:43   └─ /help/index.html (+2ms)
2:58:44 PM: 19:58:43 ▶ src/pages/index.astro
2:58:44 PM: 19:58:43   └─ /index.html (+3ms)
2:58:44 PM: 19:58:43 ▶ src/pages/privacy-policy.astro
2:58:44 PM: 19:58:43   └─ /privacy-policy/index.html (+2ms)
2:58:44 PM: 19:58:44 ▶ src/pages/services/[slug].astro
2:58:44 PM: 19:58:44   ├─ /services/bio-well/index.html (+4ms)
2:58:44 PM: 19:58:44   ├─ /services/hado/index.html (+3ms)
2:58:44 PM: 19:58:44   ├─ /services/hypnosis/index.html (+3ms)
2:58:44 PM: 19:58:44   ├─ /services/life-coaching/index.html (+3ms)
2:58:44 PM: 19:58:44   ├─ /services/mindscaping/index.html (+3ms)
2:58:44 PM: 19:58:44   ├─ /services/nlp/index.html (+3ms)
2:58:44 PM: 19:58:44   ├─ /services/psych-k/index.html (+7ms)
2:58:44 PM: 19:58:44   ├─ /services/source-energy-medicine/index.html (+4ms)
2:58:44 PM: 19:58:44   ├─ /services/thought-field-therapy/index.html (+3ms)
2:58:44 PM: 19:58:44   └─ /services/wave/index.html (+3ms)
2:58:44 PM: 19:58:44 ▶ src/pages/services/index.astro
2:58:44 PM: 19:58:44   └─ /services/index.html (+2ms)
2:58:44 PM: 19:58:44 ▶ src/pages/terms.astro
2:58:44 PM: 19:58:44   └─ /terms/index.html (+1ms)
2:58:44 PM: 19:58:44 ▶ src/pages/testimonials.astro
2:58:44 PM: 19:58:44   └─ /testimonials/index.html (+2ms)
2:58:44 PM: 19:58:44 ▶ src/pages/training.astro
2:58:44 PM: 19:58:44   └─ /training/index.html (+2ms)
2:58:44 PM: 19:58:44 ✓ Completed in 124ms.
2:58:44 PM: 
2:58:44 PM: Cannot read properties of undefined (reading 'reduce')
2:58:44 PM:   Location:
2:58:44 PM:     /opt/build/repo/site/node_modules/@astrojs/sitemap/dist/index.js:85:37
2:58:44 PM:   Stack trace:
2:58:44 PM:     at astro:build:done (file:///opt/build/repo/site/node_modules/@astrojs/sitemap/dist/index.js:85:37)
2:58:44 PM:     at async AstroBuilder.build (file:///opt/build/repo/site/node_modules/astro/dist/core/build/index.js:159:5)
2:58:44 PM:     at async build (file:///opt/build/repo/site/node_modules/astro/dist/core/build/index.js:51:3)
2:58:44 PM:     at async runCommand (file:///opt/build/repo/site/node_modules/astro/dist/cli/index.js:147:7)
2:58:44 PM: ​
2:58:44 PM: "build.command" failed                                        
2:58:44 PM: ────────────────────────────────────────────────────────────────
2:58:44 PM: ​
2:58:44 PM:   Error message
2:58:44 PM:   Command failed with exit code 1: npm run build
2:58:44 PM: ​
2:58:44 PM:   Error location
2:58:44 PM:   In build.command from netlify.toml:
2:58:44 PM:   npm run build
2:58:44 PM: ​
2:58:44 PM:   Resolved config
2:58:44 PM:   build:
2:58:44 PM:     base: /opt/build/repo/site
2:58:44 PM:     command: npm run build
2:58:44 PM:     commandOrigin: config
2:58:44 PM:     environment:
2:58:44 PM:       - NODE_VERSION
2:58:44 PM:     publish: /opt/build/repo/site/dist
2:58:44 PM:     publishOrigin: config
2:58:44 PM:   headers:
2:58:44 PM:     - for: /*
      values:
        Referrer-Policy: strict-origin-when-cross-origin
        X-Content-Type-Options: nosniff
        X-Frame-Options: DENY
  headersOrigin: config
  redirects:
    - from: /hypnotist/
      status: 301
      to: /about/
    - from: /holistic-therapy-services/
      status: 301
      to: /services/
    - from: /natural-wellness-speaker/
      status: 301
      to: /training/
    - from: /training-speaking/
      status: 301
      to: /training/
    - from: /fern-wolf-reviews/
      status: 301
      to: /testimonials/
    - from: /gratitude-2/
      status: 301
      to: /about/
    - from: /contact-fern-wolf/
      status: 301
      to: /book/
    - from: /hypnosis-therapy/
      status: 301
      to: /services/hypnosis/
    - from: /holistic-life-coaching/
      status: 301
      to: /services/life-coaching/
    - from: /neuro-linguistic-programming/
      status: 301
      to: /services/nlp/
    - from: /wave-quantum-hydration/
      status: 301
      to: /services/wave/
    - from: /bio-well/
      status: 301
      to: /services/bio-well/
    - from: /thought-field-therapy/
      status: 301
      to: /services/thought-field-therapy/
    - from: /hado/
      status: 301
      to: /services/hado/
    - from: /mindscaping/
      status: 301
      to: /services/mindscaping/
    - from: /psych-k/
      status: 301
      to: /services/psych-k/
    - from: /source-energy-medicine/
      status: 301
      to: /services/source-energy-medicine/
    - from: /*
      status: 404
      to: /404
  redirectsOrigin: config
2:58:44 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
2:58:44 PM: Failing build: Failed to build site
2:58:44 PM: Finished processing build request in 16.839s