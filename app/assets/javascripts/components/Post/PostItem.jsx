var PostItem = React.createClass({
  render: function() {
    return (
      <article className="post-list__item post">
        <header className="post__title">
          <a href={ this.props.data.url } title={ this.props.data.title }>
            { this.props.data.title }
          </a>
        </header>
        <section className="post__description" dangerouslySetInnerHTML={{__html: this.props.data.description}}></section>
      </article>
    );
  }
});