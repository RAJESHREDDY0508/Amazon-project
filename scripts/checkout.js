import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../javascript-amazon-project-main/data/products.js";
// import '../javascript-amazon-project-main/data/cart-class.js'
//import '../javascript-amazon-project-main/data/backend-practice.js';

loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
