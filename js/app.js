import Singleton from './patterns/Singleton.js';
import vehicleFactory, { VehicleTypes } from './patterns/Factory.js';
import CarBuilder from './patterns/Builder.js';
import Atv from './patterns/Prototype.js';

/*-----------Singleton------------*/

const singletonRun = () => {
  const singleton = new Singleton();
  const inst = singleton.getInstance();

  console.log('inst: ', inst);
};

/*-----------Singleton------------*/

const factoryRun = () => {
  const audiAllRoad = vehicleFactory(VehicleTypes.car, 'Audi', 'A6 AllRoad', '2020');
  const helicopterM6 = vehicleFactory(VehicleTypes.helicopter, 'Copter', 'M6 Fly', '2021');

  console.log('audiAllRoad: ', audiAllRoad);
  console.log('helicopterM6: ', helicopterM6);
};

factoryRun();

/*-----------Builder------------*/

const builderRun = () => {
  const bmw = new CarBuilder('bmw', 'x6', 2020).addInStock().build();
  const audi = new CarBuilder('audi', 'a8', 2021).notForSale().build();
  const mercedes = new CarBuilder('mercedes', 'c-class', 2022).build();

  console.log('bmw: ', bmw);
  console.log('audi: ', audi);
  console.log('mercedes: ', mercedes);
};

/*-----------Prototype------------*/

const prototypeRun = () => {
  const atv1 = new Atv();
  const atv2 = new Atv('Honda', 'Rincon 650', '2020');

  console.log('atv1: ', atv1);
  console.log('atv2: ', atv2);
};


