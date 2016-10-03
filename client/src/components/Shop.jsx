const React = require('react');
const data = require("../products.js");
const CategoryList = require("./CategoryList.jsx");
const ProductList = require("./ProductList.jsx");
const _ = require("lodash");

const Shop = React.createClass({

  getInitialState: function() {
    return {
      products: data,
      selectedCategory: null
    };
  },

  onHeadingClick: function () {
    this.setState({selectedCategory: null});
  },

  onCatClick: function (category) {
    this.setState({selectedCategory: category});
  },

  categories: function () {
    let categories = this.state.products.map((product, index) =>
      product.category
    );
    return _.uniq(categories);
  },

  productsInCategory: function () {
    return this.state.products.filter((product) =>
      product.category === this.state.selectedCategory
    );
  },

  render: function() {

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
          category={this.state.selectedCategory}/>
        </div>
    }

    return (
      <div className="shop">
        <h1 id="shop-header" onClick={this.onHeadingClick}>Bex's Shop</h1>
        {content}
      </div>
    );
  }

});

module.exports = Shop;
