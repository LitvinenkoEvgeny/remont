// TODO: refactor this shit

export const calculate = values => {
  let price = 0;

  let modificators = {
      totalArea: 2208,
      roofHeight: 10683.5,
      doorsNumber: 2400,
      switchersNumber: 1200,
      windowsNumber: 900,
      waterPointsNumber: 1200,
      electricPointsNumber: 250,
      lightersNumber: 450,
      removalWall: 390,
      fixWall: 390,
      removalFloor: 0,
      fixFloor: 0,
      removalRoof: 800, //by totalArea
      fixRoof: 430, //by totalArea
      designProject: 0,
      remodelling: 0.2,
      assemblyFurniture: 0.1,
      waterProject: 15600,
      ventilationProject: 10190,
      electrificationProject: 14200
    }


  if (values.repareType === 'cosmetic') {
    if(values.homeType === 'new'){
      return (Math.ceil(getPrice(values, modificators)));
    } else if (values.homeType === 'old') {
      modificators['totalArea'] = 1920;
      modificators['roofHeight'] = 10683.5;
      return (Math.ceil(getPrice(values, modificators)));
    }
  } else if (values.repareType === 'capital') {
    if(values.homeType === 'new'){
      modificators['totalArea'] = 4720;
      modificators['removalRoof'] = 170;
      return (Math.ceil(getPrice(values, modificators)));
    } else if (values.homeType === 'old') {
      modificators['totalArea'] = 5428;
      modificators['roofHeight'] = 10683.5;
      modificators['removalRoof'] = 170;
      return (Math.ceil(getPrice(values, modificators)));
    }
  } else if (values.repareType === 'individual') {
    if(values.homeType === 'new'){
      modificators['totalArea'] = 7920;
      modificators['removalRoof'] = 170;
      return (Math.ceil(getPrice(values, modificators)));
    } else if (values.homeType === 'old') {
      modificators['totalArea'] = 9108;
      modificators['roofHeight'] = 10683.5;
      modificators['removalRoof'] = 170;
      return (Math.ceil(getPrice(values, modificators)));
    }
  }
  return (Math.ceil(getPrice(values, modificators)));
};

function getPrice(values, modificators) {
  let price = 0;
  for (let [key, value] of entries(values)) {
    if (modificators[key]) {
      // console.log(key, value) ;
      // console.log(`цена за единицу: ${modificators[key]}`);
      price += modificators[key] * +value;
    }
  }
  return price;
}

function entries(obj) {
  let entries = [];
  for (let key of Object.keys(obj)) {
    if (obj.hasOwnProperty(key) && Object.getOwnPropertyDescriptor(obj, key)['enumerable']) {
      entries.push([key, obj[key]]);
    }
  }
  return entries;
}
