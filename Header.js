var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="header row">
        <div className="col-sm-9">
          <h1>Buyflix - sql + json!!!</h1>
        </div>
        <div className="hello col-sm-3 text-center">
          <h2>Hi Brian, this was really hard for me. Thought I was a goner there for a second. But alas, I figured (some) of it out #thxvideos - Love, Tiff</h2>
        </div>
      </div>
    )
  }
})

module.exports = Header;
