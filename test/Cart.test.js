const Cart = require('../src/Cart.js');
const expect = require('chai').expect;
const Item = require('../src/Item.js')

describe('Cart', () => {
    it('should initialize as empty', () => {
       var items = [new Item("hb",50,true),new Item("wt",500,true)];
        const cart = new Cart(10,items)
    cart.addItem(items[0],52);
    cart.addItem(items[1],2);
    var itemKeys = cart.myMap.keys
    
      //expect(cart.items.length).to.be.equal(2);
     // expect(cart.myMap.size).to.be.equal(2);
     cart.myMap.forEach(function(value, key) {
        console.log(key + ' = ' + value);
      });
     
      function logMapElements(value, key, map) {
        console.log(`m[${key.name}] = ${value}`);
      }
      cart.myMap.forEach(logMapElements);
      expect(cart.itemQuantities.length).to.be.equal(2);
     // expect(cart.myMap.get(`${key.name}`)).to.be.equal("hb");
     //expect(cart.myMap.get(items[0])).to.be.equal(52);
      //expect(cart.totalPrice).to.be.equal(10);
    })
})