export const VehicleTypes = {
  car: 'car',
  airplane: 'airplane',
  helicopter: 'helicopter',
  train: 'train'
};

class Motorvehicle {
  constructor(type, make, model, year) {
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Aircraft {
  constructor(type, make, model, year) {
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Railvehicle {
  constructor(type, make, model, year) {
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

const vehicleFactory = (type, make, model, year) => {
  switch (type) {
    case VehicleTypes.car:
      return new Motorvehicle(VehicleTypes.car, make, model, year);

    case VehicleTypes.airplane:
      return new Aircraft(VehicleTypes.airplane, make, model, year);

    case VehicleTypes.helicopter:
      return new Aircraft(VehicleTypes.helicopter, make, model, year);

    default:
      return new Railvehicle(VehicleTypes.train, make, model, year);
  }
};

export default vehicleFactory;