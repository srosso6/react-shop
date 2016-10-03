const React = require('react');
const Product = require("./Product.jsx");

const ProductList = React.createClass({

  render: function() {

    const products = this.props.products.map((product, index) =>
      <Product key={index} product={product}/>
    );

    return (
      <div className="product-list-header">
        <h1 id="category-header">{this.props.category}</h1>
        <div className="product-list">
          {products}
        </div>
      </div>
    );
  }

});

module.exports = ProductList;
