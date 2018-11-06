//PRIVATE
import VendingMachine from "../models/VendMachine.js";
import Product from "../models/Product.js";

//instatiates an instance of the vending machine class
let vm = new VendingMachine(100, [
  new Product('Fritos', 1, 3, 'https://pics.drugstore.com/prodimg/468197/900.jpg'),
  new Product('Tab', .75, 10, 'https://drinks.seriouseats.com/images/2011/11/20111115-tab-primary.jpg'),
  new Product('Mt. Dew', 1, 1, 'https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/e32e100d-8a45-44c7-aa18-c4b69ee3f6ca.jpg._CB285155187_.jpg')
])


  
// [{
//   name: 'Fritos',
//   price: 1,
//   quantity: 3,
//   image: 
// }, {
//   name: 'Tab',
//   price: .75,
//   quantity: 10
// }, {
//   name: 'Mt. Dew',
//   price: 1,
//   quantity: 1
// }])

//PUBLIC
export default class VendService {
  //increases currentTransaction and returns new total
  addQuarter() {
    console.log(2)
    vm.currentTransaction += .25
    return vm.currentTransaction
  }
  //attempts to get the item requested from its index
  vendItem(productIndex) {
    //check if valid
    let product = vm.products[productIndex]
    // IF Exists    we have some            you have enough money
    if (product && product.quantity > 0 && vm.currentTransaction >= product.price) {
      this.processTransaction(product)
      return JSON.parse(JSON.stringify(product))
    }
    return false
  }
  //updates vending data on successful transaction
  processTransaction(product) {
    product.quantity--
    vm.totalMoney += product.price
    vm.currentTransaction -= product.price
    
    
    
  }
  //returns all products from the vending machine
  getProducts() {
    //breaks refrence in memory to protect code
    return JSON.parse(JSON.stringify(vm.products))
  }
}