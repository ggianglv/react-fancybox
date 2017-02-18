var React = require('react');
var ReactDOM = require('react-dom');
var Fancybox = require('react-fancybox');

var App = React.createClass({
	render () {
		return (
			<div>
				<Fancybox />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
