var PostList = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.presenter);
  },
  render: function() {
    var postNodes = this.state.posts.map(function(post) {
      return (
        <PostItem key={post.id} data={post} />
      );
    });
    return (
      <section className="post-list">
        <header className="post-list__header">
          Latest posts
        </header>
        {postNodes}
      </section>
    );  
  }
});