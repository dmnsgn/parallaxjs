# parallaxjs [![Build Status](https://travis-ci.org/dmnsgn/parallaxjs.svg?branch=master)](https://travis-ci.org/dmnsgn/parallaxjs)

> Simple Parallax on DOM elements

## Install

```
$ npm install --save parallaxjs
```


## Usage

```html
<div class="WorkItem-picture layer" data-parallax-speed="0.6" >
	Parallax layer
</div>
<div class="WorkItem-picture layer" data-parallax-speed="0.2" >
	Other layer that moves faster
</div>
```

```js
const Parallax = require('parallaxjs');

const parallax = new Parallax('.layer');
```


## License

MIT © [Damien Seguin](https://github.com/dmnsgn)
