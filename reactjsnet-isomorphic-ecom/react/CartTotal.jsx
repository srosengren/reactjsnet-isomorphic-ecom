const CartTotal = (props) => {
	let total = props.items.reduce((agg, current) => {
		return agg + current.amount * current.price;
	},0);
	return <div>Cart value: {total}</div>
}