var InstaWidget = React.createClass({
  getInitialState: function () {
    return {
        data: this.props.data || []
    };
  },

  componentWillMount: function () {  
    /*$.ajax({
      url: this.props.url,
      type: "GET",
      dataType: "json",
      success: function ( data ) {
        this.setState({data: data});
      }.bind(this)
    });*/
  },

  render: function () {
    var useThumb = this.props.useThumb;
    var instaPosts = this.state.data.map(function(post) {
      return (
        <InstaPost key={ post.id } data={ post } useThumb={ useThumb } />
      );
    });
    return (
      <div className="insta-widget">
        { instaPosts }
      </div>
    );
  }
});