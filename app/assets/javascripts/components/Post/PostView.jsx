var PostView = React.createClass({
  render: function() {
    return (
      <article className="post">
        <header className="post__title">
          <a href={ this.props.data.url } title={ this.props.data.title }>
            { this.props.data.title }
          </a>
        </header>
        <section className="post__content">{ this.props.data.content }</section>
      </article>
    );
  }
});