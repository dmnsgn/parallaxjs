# parallaxjs

[![npm version](https://img.shields.io/npm/v/parallaxjs)](https://www.npmjs.com/package/parallaxjs)
[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://www.npmjs.com/package/parallaxjs)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/parallaxjs)](https://www.npmjs.com/package/parallaxjs)
[![dependencies](https://img.shields.io/david/dmnsgn/parallaxjs)](https://github.com/dmnsgn/parallaxjs/blob/main/package.json)
[![types](https://img.shields.io/npm/types/parallaxjs)](https://github.com/microsoft/TypeScript)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-fa6673.svg)](https://conventionalcommits.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-Prettier-f8bc45.svg?logo=prettier)](https://github.com/prettier/prettier)
[![linted with eslint](https://img.shields.io/badge/linted_with-ES_Lint-4B32C3.svg?logo=eslint)](https://github.com/eslint/eslint)
[![license](https://img.shields.io/github/license/dmnsgn/parallaxjs)](https://github.com/dmnsgn/parallaxjs/blob/main/LICENSE.md)

Simple Parallax on DOM elements.

[![paypal](https://img.shields.io/badge/donate-paypal-informational?logo=paypal)](https://paypal.me/dmnsgn)
[![coinbase](https://img.shields.io/badge/donate-coinbase-informational?logo=coinbase)](https://commerce.coinbase.com/checkout/56cbdf28-e323-48d8-9c98-7019e72c97f3)
[![twitter](https://img.shields.io/twitter/follow/dmnsgn?style=social)](https://twitter.com/dmnsgn)

![](https://raw.githubusercontent.com/dmnsgn/parallaxjs/main/screenshot.gif)

## Installation

```bash
npm install parallaxjs
```

## Usage

```html
<div class="layer" data-parallax-speed="3">Parallax layer</div>
<div class="layer" data-parallax-speed="1.5">Other layer that moves faster</div>
```

```js
import Parallax from "parallaxjs";
const parallax = new Parallax(document.querySelectorAll(".layer"));

// Add parallax handlers to your own listeners (so that you can debounced them or whatever)
window.addEventListener("scroll", () => parallax.onScroll());
window.addEventListener("resize", () => parallax.onResize());
```

## API

<!-- api-start -->

Auto-generated API content.

<!-- api-end -->

## License

MIT. See [license file](https://github.com/dmnsgn/parallaxjs/blob/main/LICENSE.md).
