var InstaPost = React.createClass({
  render: function() {
    imgSrc = this.props.useThumb ? this.props.data.thumbnail.url : this.props.data.image.url;
    postClass = "insta-widget__post";
    if (this.props.useThumb) { postClass += "_thumb"; }
    return (
      <figure className={ postClass }>
        <img src={ imgSrc } alt={ imgSrc } />
      </figure>
    );
  }
});