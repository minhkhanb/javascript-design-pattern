const atvPrototype = {
  mud: () => {
    console.log('Mudding');
  }
};

function Atv(make, model, year) {
  function constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  constructor.prototype = atvPrototype;

  let instance = new constructor(make, model, year);

  return instance;
}

export default Atv;