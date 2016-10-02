const React = require('react');
const ReactDOM = require('react-dom');
const Shop = require("./components/Shop.jsx");
require("./style/main.scss");

window.onload = function(){
  ReactDOM.render(
    <Shop/>,
    document.getElementById('app')
  );
}
