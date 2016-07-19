# parallaxjs [![Build Status](https://travis-ci.org/dmnsgn/parallaxjs.svg?branch=master)](https://travis-ci.org/dmnsgn/parallaxjs)

> Simple Parallax on DOM elements

## Install

```
$ npm install --save parallaxjs
```


## Usage

```html
<div class="layer" data-parallax-speed="3" >
	Parallax layer
</div>
<div class="layer" data-parallax-speed="1.5" >
	Other layer that moves faster
</div>
```

```js
const Parallax = require('parallaxjs');

const parallax = new Parallax(document.querySelectorAll('.layer'));
```


## License

MIT © [Damien Seguin](https://github.com/dmnsgn)
