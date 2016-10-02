const React = require('react');
const Category = require("./Category.jsx");

const CategoryList = React.createClass({

  render: function() {

    const categories = this.props.categories.map((category, index) =>
      <Category key={index} category={category} onCatClick={this.props.onCatClick} categoryClass={this.props.categoryClass}/>
    );

    return (
        <div>
          {categories}
        </div>
    );
  }

});

module.exports = CategoryList;
