const storeListener = function (store, Component) {
	return React.createClass({
		componentWillMount: function () {
			store.subscribe(function () {
				this.forceUpdate();
			}.bind(this));
		},
		render: function () {
			return React.createElement(Component, this.props);
		}
	});
}