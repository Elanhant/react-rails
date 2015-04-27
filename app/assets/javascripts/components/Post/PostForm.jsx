var PostForm = React.createClass({
  getInitialState: function () {
    return React.addons.update(
      {
        post: {
          title: '',
          description: '',
          content: '',
          published: false,
        }
      }, 
      {$merge: JSON.parse(this.props.presenter)}
    );
  },
  

  _handleChange: function(attr, event) {
    newValue = {};
    newValue[attr] = {
      $set: event.target.type == 'checkbox' ? event.target.checked : event.target.value,
    };
    var newState = React.addons.update(
      this.state,
      {post: newValue}
    );
    this.setState(newState);
  },
  _handleSubmit: function(event) {
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
      type: this.props.isNew ? "POST" : "PUT",
      dataType: "json",
      success: function ( data ) {

      }.bind(this)
    });
  },

  render: function() {
    return (
      <form ref="form" className="post-form" action={ this.state.form.action } acceptCharset="UTF-8" method="post" onSubmit={ this._handleSubmit }>
        <header className="post-form__header">{ this.props.isNew ? 'New Post' : 'Edit Post'}</header>
        <input type="hidden" name={ this.state.form.csrf_param } value={ this.state.form.csrf_token } />
        <div className="post-form__input">        
          <input ref="title" name="post[title]" placeholder="Post Title" defaultValue={ this.state.post.title } /> 
        </div>
        <div className="post-form__textarea">
          <textarea ref="description" name="post[description]" placeholder="Post Description" rows="3" defaultValue={ this.state.post.description } max-length="255" /> 
        </div>
        <div className="post-form__textarea">
          <textarea ref="content" name="post[content]" placeholder="Post Content" rows="7" defaultValue={ this.state.post.content } /> 
        </div>
        <footer className="post-form__footer">
          <div className="post-form__checkbox">
            <label>
              <input ref="published" name="post[published]" type="hidden" value="" />
              <input ref="published" name="post[published]" type="checkbox" checked={ this.state.post.published } onChange={ this._handleChange.bind(null, 'published') }/> Publish?
            </label> 
          </div>
          <button className="post-form__submit" type="submit">{ this.props.isNew ? 'Add Post' : 'Update Post'}</button>
        </footer>
      </form>
    );
  }
})