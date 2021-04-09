/**
 * @module Parallax
 */

import prefix from "prefix-style";
import clamp from "clamp";

/**
 * @typedef {"x" | "y"} Direction Parallax direction (x or y).
 */

/**
 * @typedef {Object} Options
 * @property {number} [speed=1] Parallax relative speed.
 * @property {number} [offset=0.5] Offset (0 to 1) relative to window height.
 * @property {number} [heightOffset=0] Offset (0 to 1) relative to element height.
 * @property {Direction} [direction="y"] Parallax direction.
 * @property {number} [min=-Infinity] Minimum translation.
 * @property {number} [max=Infinity] Maximum translation.
 * @property {boolean} [background=false] Apply parallax to background position instead of transform.
 */

/**
 * Simple Parallax on DOM elements.
 *
 * @alias module:Parallax
 */
class Parallax {
  /**
   * Creates an instance of Parallax.
   * @param {HTMLElement[]} elements Elements to be transformed.
   * @param {Options} options
   */
  constructor(elements, options) {
    this.layers = elements;
    this.options = Object.assign(
      {
        speed: 1,
        offset: 0.5,
        heightOffset: 0,
        direction: "y",
        min: -Infinity,
        max: Infinity,
        background: false,
      },
      options
    );
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

  cacheLayerProperties(element) {
    return {
      element,
      top:
        this.getScrollTop() +
        this.getElementTop(element) -
        this.getElementTranslateY(element),
      height: this.getElementHeight(element),
      speed: element.dataset.parallaxSpeed
        ? element.dataset.parallaxSpeed
        : this.options.speed,
      offset: element.dataset.parallaxOffset
        ? element.dataset.parallaxOffset
        : this.options.offset,
      heightOffset: element.dataset.parallaxHeightOffset
        ? element.dataset.parallaxHeightOffset
        : this.options.heightOffset,
      direction: element.dataset.parallaxDirection
        ? element.dataset.parallaxDirection
        : this.options.parallaxDirection,
      min: element.dataset.parallaxMin
        ? parseInt(element.dataset.parallaxMin)
        : this.options.parallaxMin,
      max: element.dataset.parallaxMax
        ? parseInt(element.dataset.parallaxMax)
        : this.options.parallaxMax,
      background: element.dataset.parallaxBackground,
    };
  }

  getElementHeight(element) {
    return element.clientHeight;
  }

  getElementTop(element) {
    return element.getBoundingClientRect().top;
  }

  getElementTranslateY(element) {
    const style = window.getComputedStyle(element);
    const transform = style[prefix("transform")];

    const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) return parseFloat(matrix3d[1].split(", ")[13]);

    const matrix = transform.match(/^matrix\((.+)\)$/);
    return matrix ? parseFloat(matrix[1].split(", ")[5]) : 0;
  }

  getScrollTop() {
    return Math.max(0, window.pageYOffset);
  }

  transform() {
    const scrollTop = this.getScrollTop();

    for (let i = 0; i < this.items.length; i++) {
      // (∆ / offset) * height
      const progress = clamp(
        ((this.items[i].top +
          this.items[i].height * this.items[i].heightOffset -
          scrollTop -
          this.viewportHeight * this.items[i].offset) /
          (this.items[i].speed * this.viewportHeight)) *
          this.viewportHeight,
        this.items[i].min,
        this.items[i].max
      );
      const translation = ["0", "0"];
      translation[this.items[i].direction === "x" ? 0 : 1] = `${~~progress}px`;

      if (this.items[i].background) {
        this.items[i].element.style.backgroundPosition = `${translation.join(
          " "
        )}`;
      } else {
        this.items[i].element.style[
          prefix("transform")
        ] = `translate3d(${translation.join(", ")} , 0)`;
      }
    }
  }

  onScroll() {
    this.transform();
  }

  onResize() {
    this.reset();
  }
}

export default Parallax;
