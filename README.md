# nuxt-mjml-web

[![npm](https://img.shields.io/npm/v/nuxt-mjml-web.svg)](https://www.npmjs.com/package/nuxt-mjml-web)

> Browser-compatible [mjml](https://github.com/mjmlio/mjml) module for NuxtJS.

## Installation

You can install `nuxt-mjml-web` with your `npm` client of choice.

```bash
$ npm install nuxt-mjml-web
```

## Usage

Add `nuxt-mjml-web` to the `buildModules` section of `nuxt.config.js`.

```js
export default {
  buildModules: ['nuxt-mjml-web'],
}
```

The module depends on [mjml-web](https://github.com/vberlier/mjml-web) and takes care of isolating the bundle into its own chunk. It also prevents minification from breaking mjml component registration.

```js
import mjml2html, { registerComponent } from 'mjml-web'

registerComponent(MyComponent)
mjml2html('<mjml>...</mjml>')
```

Keep in mind that the bundle isn't compatible with server-side rendering. You should only import `mjml-web` in a client-only context. You can use dynamic imports to only load mjml when you need it.

```js
const { default: mjml2html, registerComponent } = await import('mjml-web')

registerComponent(MyComponent)
mjml2html('<mjml>...</mjml>')
```

---

License - [MIT](https://github.com/vberlier/nuxt-mjml-web/blob/master/LICENSE)
