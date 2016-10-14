const React = require('react');
const Product = require("./Product.jsx");

const ShoppingCart = React.createClass({

  getInitialState: function() {
    return {
      codeValidated: false,
      codes: []
    };
  },

  totalPrice: function () {
    let totalPrice = 0;
    if(this.props.products) {
      for(let product of this.props.products) {
        totalPrice += product.info.price;
      }
    }
    return totalPrice;
  },

  totalPriceInclDiscount: function () {

    let price = this.totalPrice()
    if(this.state.codeValidated) {
      for(let code of this.state.codes) {
        let min_spend = code.min_spend;
        let product_cat = code.product_cat;
        if(price >= min_spend && this.productInCat(product_cat)) {
          price = price -= code.discount;
        }
      }
    }
    return price;
  },

  productInCat: function(product_cat) {
    if(product_cat.length === 0) {
      return true;
    }
    for(let product of this.props.products) {
      for(let cat of product_cat) {
        if(product.info.category === cat) {
          return true;
        }
      }
    }
    return false;
  },

  checkVoucherCode: function () {
    let code = this.refs.codeInput.value.trim().toLowerCase();
    let codes = this.state.codes;

    for(let voucher of this.props.vouchers) {
      if(voucher.code === code) {
        let newCodes = codes.concat([voucher]);
        this.setState({codeValidated: true, codes: newCodes});
        this.refs.codeInput.value = "";
        return;
      }
    }
    this.refs.codeInput.value = "";
    alert("Voucher code not recognised");
  },

  render: function() {

    const products = this.props.products.map((product, index) =>
      <Product key={index} product={product.info} view="cart" removeFromCart={this.props.removeFromCart}/>
    );

    return (
      <div className="cart-list-header">
        <h1 id="cart-header">Your Shopping Cart</h1>
        <div className="product-list">
          {products}
        </div>
          <input type="voucher_code"
            placeholder="Your voucher code"

            ref="codeInput"
            onChange={this.setCode}/>
          <button type="submit" onClick={this.checkVoucherCode}>Apply Code</button>
          <h3>Total Price: £{this.totalPrice()}</h3>
          <h3>Total Price Incl Discount: £{this.totalPriceInclDiscount()}</h3>
      </div>
    );
  }

});

module.exports = ShoppingCart;
