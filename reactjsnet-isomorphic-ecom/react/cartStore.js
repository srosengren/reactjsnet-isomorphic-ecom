const cartStore = (function (store) {

	var items = undefined;

	store.subscriptions = [];

	store.subscribe = function (subscription) {
		store.subscriptions.push(subscription);
	}

	var trigger = function () {
		store.subscriptions.forEach(function (subscription) { subscription(); });
	}

	function setInitialItems(initialItems) {
		items = initialItems.reduce(function (agg, current) {
			agg[current.itemId] = current;
			return agg;
		}, {});
	}

	function buyItem(item) {
		var cachedItem = items[item.itemId];
		if (cachedItem)
			cachedItem.amount++;
		else
			items[item.itemId] = {
				itemId: item.itemId,
				title: item.title,
				price: item.price,
				amount: 1
			}
		$.ajax({
			url: '/home/buy/' + item.itemId,
			headers: { ajax: true },
			error: function () {
				appDispatcher.dispatch({
					type: 'BUY_ITEM_FAILED'
				})
			}
		});
	}

	function removeItem(itemId) {
		delete items[itemId];
		$.ajax({ url: '/home/remove/' + itemId, headers: { ajax: true } });
	}

	store.waitForToken = appDispatcher.register(function (payLoad) {
		switch(payLoad.type)
		{
			case 'SET_INITIAL_ITEMS':
				setInitialItems(payLoad.items);
				break;
			case 'BUY_ITEM':
				buyItem(payLoad.item);
				break;
			case 'BUY_ITEM_FAILED':
				break;
			case 'REMOVE_ITEM':
				removeItem(payLoad.itemId);
				break;
		}
		trigger();
	});

	store.getAmountOf = function (itemId) {
		if (!items)
			return undefined;
		return items[itemId] ? items[itemId].amount : 0;
	}

	store.getAllItems = function () {
		return !items ? undefined : Object.keys(items).map(function (key) {
			return items[key];
		});
	}

	return store;
})({});