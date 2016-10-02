const React = require('react');

const Product = React.createClass({

  checkStock: function () {
    if(this.props.product.quantity > 0) {
      return "In Stock";
    }
    return "Out of Stock";
  },

  render: function() {
    return (
        <div onClick={this.onClick}>
          <h1>{this.props.product.name}</h1>
          <img src={this.props.product.img} height="250" width="250"/>
          <p>£{this.props.product.price}</p>
          <p>{this.checkStock()}</p>
          <button>Add to Cart</button>
        </div>
    );
  }

});

module.exports = Product;
