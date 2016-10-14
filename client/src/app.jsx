const React = require('react');
const ReactDOM = require('react-dom');
const products = require("./products.js");
const vouchers = require("./vouchers.js");
const Shop = require("./components/Shop.jsx");
require("./style/main.scss");

window.onload = function(){
  ReactDOM.render(
    <Shop products={products} vouchers={vouchers}/>,
    document.getElementById('app')
  );
}
