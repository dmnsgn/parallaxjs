import prefix from 'prefix-style';

export default class Parallax {
  constructor(elements, options) {
    this.layers = elements;
    this.options = Object.assign({
      speed: 1
    }, options);

    this.support();
  }

  init() {
    this.reset();
  }

  reset() {
    // Store window height
    this.viewportHeight = window.innerHeight;

    // Cache initial position of all layers
    this.items = [];
    for (const layer of this.layers) {
      this.items.push(this.cacheLayerProperties(layer));
    }
    this.transform();
  }

  support() {
    this.support.pageOffset = window.pageXOffset !== undefined;
    this.support.getComputedStyle = window.getComputedStyle;
  }

  cacheLayerProperties(element) {
    return {
      element,
      top: this.getScrollTop() + this.getElementTop(element) - this.getElementTranslateY(element),
      height: this.getElementHeight(element),
      speed: element.dataset.parallaxSpeed ? element.dataset.parallaxSpeed : this.options.speed
    };
  }

  getElementHeight(element) {
    return element.clientHeight || element.offsetHeight || element.scrollHeight;
  }

  getElementTop(element) {
    return element.getBoundingClientRect().top;
  }

  getElementTranslateY(element) {
    if (!this.support.getComputedStyle) {
      throw new Error('Your browser needs to support window.getComputedStyle');
    }
    const style = window.getComputedStyle(element);
    const transform = style[prefix('transform')];

    const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
      return parseFloat(matrix3d[1].split(', ')[13]);
    }
    const matrix = transform.match(/^matrix\((.+)\)$/);
    return matrix ? parseFloat(matrix[1].split(', ')[5]) : 0;
  }

  getScrollTop() {
    return Math.max(
      0,
      this.support.pageOffset ?
        window.pageYOffset : (document.documentElement.scrollTop || document.body.scrollTop)
    );
  }

  transform() {
    const scrollTop = this.getScrollTop();

    for (let i = 0; i < this.items.length; i++) {
      // (∆ / offset) * height
      const progress = ((this.items[i].top - scrollTop) / (this.items[i].speed * this.viewportHeight)) * this.viewportHeight;

      this.items[i].element.style[prefix('transform')] = `translate3d(0, ${~~progress}px, 0)`;
    }
  }

  onScroll() {
    this.transform();
  }

  onResize() {
    this.reset();
  }
}
