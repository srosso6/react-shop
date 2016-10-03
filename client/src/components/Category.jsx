const React = require('react');

const Category = React.createClass({

  onClick: function (event) {
    this.props.onCatClick(this.props.category);
  },

  render: function() {

    return (
        <div onClick={this.onClick} className={this.props.categoryClass}>
          {this.props.category}
        </div>
    );
  }

});

module.exports = Category;
