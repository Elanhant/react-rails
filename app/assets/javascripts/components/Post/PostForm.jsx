var PostForm = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.presenter);
  },
  handleSubmit: function(event) {
    event.preventDefault();

    var title = this.refs.title.getDOMNode().value.trim();
    var description = this.refs.description.getDOMNode().value.trim();
    var content = this.refs.content.getDOMNode().value.trim();

    if (!title || !description || !content) {
      return false;
    }

    var formData = $(this.refs.form.getDOMNode()).serialize();
    $.ajax({
      data: formData,
      url: this.state.form.action,
      type: "POST",
      dataType: "json",
      success: function ( data ) {
        console.log(10);
      }.bind(this)
    });
    console.log(this.refs);
  },
  render: function() {
    return (
      <form ref="form" className="post-form" action={ this.state.form.action } accept-charset="UTF-8" method="post" onSubmit={ this.handleSubmit }>
        <header className="post-form__header">New Post</header>
        <input type="hidden" name={ this.state.form.csrf_param } value={ this.state.form.csrf_token } />
        <div className="post-form__input">        
          <input ref="title" name="post[title]" placeholder="Post Title" /> 
        </div>
        <div className="post-form__textarea">
          <textarea ref="description" name="post[description]" placeholder="Post Description" max-length="255" /> 
        </div>
        <div className="post-form__textarea">
          <textarea ref="content" name="post[content]" placeholder="Post Content" /> 
        </div>
        <button className="post-form__submit" type="submit">Add Post</button>
      </form>
    );
  }
})