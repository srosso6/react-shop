const React = require('react');
const CategoryList = require("./CategoryList.jsx");
const ProductList = require("./ProductList.jsx");
const ShoppingCart = require("./ShoppingCart.jsx");
const _ = require("lodash");

const Shop = React.createClass({

  getInitialState: function() {
    return {
      selectedCategory: null,
      viewShoppingCart: false,
      productsInCart: []
    };
  },

  onHeadingClick: function () {
    this.setState({selectedCategory: null});
    if(this.state.viewShoppingCart) {
      this.setState({viewShoppingCart: false});
    }
  },

  onCatClick: function (category) {
    this.setState({selectedCategory: category});
  },

  categories: function () {
    let categories = this.props.products.map((product, index) =>
      product.category
    );
    return _.uniq(categories);
  },

  productsInCategory: function () {
    return this.props.products.filter((product) =>
      product.category === this.state.selectedCategory
    );
  },

  addToCart: function (product) {
    let products = this.state.productsInCart;
    let productInfo = ({info: product, quantity: 1});
    let newProducts = products.concat([productInfo]);
    this.setState({productsInCart: newProducts});
  },

  removeFromCart: function (productId) {
    let products = this.state.productsInCart.filter((product) =>
      product.info.id !== productId
    );
    this.setState({productsInCart: products});
  },

  viewCart: function () {
    this.setState({viewShoppingCart: true});
  },

  render: function() {

    console.log("rendering shop");

    let content = <CategoryList
      categories={this.categories()}
      onCatClick={this.onCatClick}
      categoryClass="cat-box"
      listClass="page"/>

    if(this.state.selectedCategory) {
      content =
        <div className="inside-shop">
          <CategoryList
            categories={this.categories()}
            onCatClick={this.onCatClick}
            categoryClass="cat-bar"
            listClass="navbar"/>
          <ProductList
          products={this.productsInCategory()}
          category={this.state.selectedCategory}
          addToCart={this.addToCart}/>
        </div>
    }

    if(this.state.viewShoppingCart) {
      content =
      <div>
        <ShoppingCart
          products={this.state.productsInCart}
          vouchers={this.props.vouchers}
          removeFromCart={this.removeFromCart}
          />
      </div>
    }

    return (
      <div className="shop">
        <h1 id="shop-header" onClick={this.onHeadingClick}>Bex's Shop<img id="cart-button" src="/img/shoppingcart.jpg" onClick={this.viewCart}/></h1>
        {content}
      </div>
    );
  }

});

module.exports = Shop;
