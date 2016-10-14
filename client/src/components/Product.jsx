const React = require('react');

const Product = React.createClass({

  checkStock: function () {
    if(this.props.product.quantity > 0) {
      return "In stock";
    }
    return "Out of stock";
  },

  addToCart: function () {
    if(this.checkStock() === "In stock") {
      this.props.addToCart(this.props.product);
    } else {
    alert("Sorry, no stock available");
    }
  },

  removeFromCart: function () {
    this.props.removeFromCart(this.props.product.id);
  },

  render: function() {

    let content =
    <div>
      <p>{this.checkStock()}</p>
      <button onClick={this.addToCart}>Add to Cart</button>
    </div>

    if(this.props.view === "cart") {
      content =
      <div>
        <h3>Quantity in cart: </h3>
        <button onClick={this.removeFromCart}>Remove From Cart</button>
      </div>
    }

    return (
        <div className="product" onClick={this.onClick}>
          <h1>{this.props.product.name}</h1>
          <img src={this.props.product.img} height="250" width="250"/>
          <p>£{this.props.product.price}</p>
          {content}
        </div>
    );
  }

});

module.exports = Product;
