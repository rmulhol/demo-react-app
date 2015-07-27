var React = require('react');
var Col = require('react-bootstrap/lib/Col');
var Thumbnail = require('react-bootstrap/lib/Thumbnail');
var Button = require('react-bootstrap/lib/Button');
var DemoAppActions = require('../actions/demo_app_actions');
var DemoAppStore = require('../stores/demo_app_store');

var Body = React.createClass({
  getDefaultProps: function() {
    return {
      reactLogo: "http://tinyurl.com/pd5ttp3",
      jsLogo: "http://tinyurl.com/olm5u5m"
    }
  },

  getInitialState: function() {
    return {
      showReactLogo: true
    }
  },

  componentDidMount: function() {
    var self = this;
    var demoAppStore = new DemoAppStore();

    demoAppStore.addLogoListener(function(dispatchedState) {
      self.setState({ showReactLogo: dispatchedState.showReactLogo });
    });
  },

  toggleImage: function() {
    DemoAppActions.toggleLogo(this.state.showReactLogo);
  },

  render: function() {
    var imageToShow;

    if (this.state.showReactLogo) {
      imageToShow = this.props.reactLogo;
    } else {
      imageToShow = this.props.jsLogo;
    }

    return (
      <div style={{ "textAlign": "center", "paddingTop": "70px" }}>
        <h1>Welcome to the Demo React App!</h1>
        <Col md={4} mdOffset={4}>
          <Thumbnail src={imageToShow} alt='shown-logo'>
            <p>
              <Button bsStyle='primary' onClick={this.toggleImage}>Toggle Logo</Button>
            </p>
          </Thumbnail>
        </Col>
      </div>
    );
  }
});

module.exports = Body;
