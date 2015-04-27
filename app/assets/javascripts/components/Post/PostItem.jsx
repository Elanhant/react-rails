var PostItem = React.createClass({
  render: function() {
    return (
      <article className="post-list__item post">
        <header className="post__title">{this.props.title}</header>
        <section className="post__description">{this.props.description}</section>
        <section className="post__content">{this.props.children}</section>
      </article>
    );
  }
});