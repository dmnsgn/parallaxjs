# parallaxjs

[![npm version](https://img.shields.io/npm/v/parallaxjs)](https://www.npmjs.com/package/parallaxjs)
[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://www.npmjs.com/package/parallaxjs)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/parallaxjs)](https://bundlephobia.com/package/parallaxjs)
[![dependencies](https://img.shields.io/librariesio/release/npm/parallaxjs)](https://github.com/dmnsgn/parallaxjs/blob/main/package.json)
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

<a name="module_Parallax"></a>

## Parallax

- [Parallax](#module_Parallax)
  - [Parallax](#exp_module_Parallax--Parallax) ⏏
    - [new Parallax(elements, options)](#new_module_Parallax--Parallax_new)
    - [~Direction](#module_Parallax--Parallax..Direction) : <code>&quot;x&quot;</code> \| <code>&quot;y&quot;</code>
    - [~Options](#module_Parallax--Parallax..Options) : <code>Object</code>

<a name="exp_module_Parallax--Parallax"></a>

### Parallax ⏏

Simple Parallax on DOM elements.

**Kind**: Exported class  
<a name="new_module_Parallax--Parallax_new"></a>

#### new Parallax(elements, options)

Creates an instance of Parallax.

| Param    | Type                                                        | Description                 |
| -------- | ----------------------------------------------------------- | --------------------------- |
| elements | <code>Array.&lt;HTMLElement&gt;</code>                      | Elements to be transformed. |
| options  | [<code>Options</code>](#module_Parallax--Parallax..Options) |                             |

<a name="module_Parallax--Parallax..Direction"></a>

#### Parallax~Direction : <code>&quot;x&quot;</code> \| <code>&quot;y&quot;</code>

Parallax direction (x or y).

**Kind**: inner typedef of [<code>Parallax</code>](#exp_module_Parallax--Parallax)  
<a name="module_Parallax--Parallax..Options"></a>

#### Parallax~Options : <code>Object</code>

**Kind**: inner typedef of [<code>Parallax</code>](#exp_module_Parallax--Parallax)  
**Properties**

| Name           | Type                                                            | Default                    | Description                                                 |
| -------------- | --------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------- |
| [speed]        | <code>number</code>                                             | <code>1</code>             | Parallax relative speed.                                    |
| [offset]       | <code>number</code>                                             | <code>0.5</code>           | Offset (0 to 1) relative to window height.                  |
| [heightOffset] | <code>number</code>                                             | <code>0</code>             | Offset (0 to 1) relative to element height.                 |
| [direction]    | [<code>Direction</code>](#module_Parallax--Parallax..Direction) | <code>&quot;y&quot;</code> | Parallax direction.                                         |
| [min]          | <code>number</code>                                             | <code>-Infinity</code>     | Minimum translation.                                        |
| [max]          | <code>number</code>                                             | <code>Infinity</code>      | Maximum translation.                                        |
| [background]   | <code>boolean</code>                                            | <code>false</code>         | Apply parallax to background position instead of transform. |

<!-- api-end -->

## License

MIT. See [license file](https://github.com/dmnsgn/parallaxjs/blob/main/LICENSE.md).
