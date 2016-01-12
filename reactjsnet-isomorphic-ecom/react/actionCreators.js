var actionCreators = {
	buyItem: function (item) {
		appDispatcher.dispatch({
			type: 'BUY_ITEM',
			item: item
		});
	},
	removeItem: function (itemId) {
		appDispatcher.dispatch({
			type: 'REMOVE_ITEM',
			itemId: itemId
		});
	},
	setInitialItems: function (items) {
		appDispatcher.dispatch({
			type: 'SET_INITIAL_ITEMS',
			items: items
		});
	}
}