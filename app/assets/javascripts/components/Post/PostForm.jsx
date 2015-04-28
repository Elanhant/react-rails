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

  componentDidMount: function () {
    tinyMCE.init({
      selector: '#post-form__content',
      theme: "modern",
      plugins: [
          "advlist autolink lists link image charmap print preview hr anchor pagebreak",
          "searchreplace wordcount visualblocks visualchars code fullscreen",
          "insertdatetime media nonbreaking save table contextmenu directionality",
          "emoticons template paste textcolor colorpicker textpattern uploadimage"
      ],
      toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",
      toolbar2: "preview | link uploadimage media | forecolor backcolor",
      image_advtab: true,
    });
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
    // Cannot just get DOMNode, need to use tinyMCE API
    var content = tinyMCE.EditorManager.get('post-form__content').getContent();
    this.refs.content.getDOMNode().value = content;

    if (!title || !description || !content) {
      return false;
    }

    var formData = $(this.refs.form.getDOMNode()).serializeArray();
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
          <textarea id="post-form__content" ref="content" name="post[content]" placeholder="Post Content" rows="7" defaultValue={ this.state.post.content } /> 
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