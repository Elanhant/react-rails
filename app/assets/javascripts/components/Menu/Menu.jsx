var Menu = React.createClass({
  render: function() {
    var items = JSON.parse(this.props.items);
    var menuItems = items.map(function(item, index) {
      return (
        <MenuItem key={ index } title={ item.title } url={ item.url }/>
      );
    });
    return (
      <ul className="menu">
        { menuItems }
      </ul>
    );
  }
});