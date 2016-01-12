const preventDefault = (inner, e) => {
	e.preventDefault();
	inner();
}

var BuyButton = (props) => {
	let url = '/home/buy/' + props.item.itemId;
	let onClick = preventDefault.bind(undefined, actionCreators.buyItem.bind(undefined, props.item));

	let amount = cartStore.getAmountOf(props.item.itemId)
	if (amount === undefined)
		amount = props.alreadyInCartAmount;

	return (
		<div key={props.item.itemId}>
			<a href={url} onClick={onClick}>Buy</a>
			{amount ?
				<p>Amount of this item in cart: {amount}</p> : null
			}
		</div>
	)
}

BuyButton = storeListener(cartStore, BuyButton);