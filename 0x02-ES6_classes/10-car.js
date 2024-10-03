export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the current Car object
  cloneCar() {
    // Create a new object of the same class using `Object.getPrototypeOf` to keep it dynamic
    return new (Object.getPrototypeOf(this).constructor)();
  }
}
