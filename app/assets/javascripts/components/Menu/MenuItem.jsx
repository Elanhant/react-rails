var MenuItem = React.createClass({
  render: function() {
    return (
      <li className="menu__item">
        <a href={ this.props.url } title={ this.props.title }>
          { this.props.title }
        </a>
      </li>
    );
  }
});