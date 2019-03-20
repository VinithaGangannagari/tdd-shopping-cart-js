const Item = require('../src/Item.js')

module.exports = class Cart {

  constructor(totalPrice,items){
      this.totalPrice = 0;
      this.items=[];
      this.myMap = new Map();
  }

  addItem(item,quantity){
      this.myMap.set(item,quantity);

  }
 itemQuantities(){
 return this.myMap.forEach(function (value, key, map) {
    return (`m[${key.name}] = ${value}`);
  });
 }
}

