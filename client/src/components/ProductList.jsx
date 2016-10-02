const React = require('react');
const Product = require("./Product.jsx");

const ProductList = React.createClass({

  render: function() {

    const products = this.props.products.map((product, index) =>
      <Product key={index} product={product}/>
    );

    return (
      <div>
        <h1>{this.props.category}</h1>
        {products}
      </div>
    );
  }

});

module.exports = ProductList;
