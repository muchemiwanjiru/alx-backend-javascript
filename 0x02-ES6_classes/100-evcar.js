/* eslint no-underscore-dangle: 0 */ // ---> OFF
import Car from './10-car';

/* Represents EVCar object */
export default class EVCar extends Car {
  /**
   * Creates new EVCar instance.
   * @param {Brand} brand - Car's brand
   * @param {Motor} motor - Car's motor type
   * @param {Color} color - Car's color
   * @param {Range} range - Car's range
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /* Getter for @@species static property */
  static get [Symbol.species]() {
    return Car;
  }
}
