const CartList = (props) => (
	<ul>
		{props.items.map(product => {
			let removeUrl = '/home/remove/' + product.itemId;
			let removeClick = preventDefault.bind(undefined, actionCreators.removeItem.bind(undefined, product.itemId));
			return (
				<li key={product.itemId}>
					{product.title}:{product.amount} <a href={removeUrl} onClick={removeClick}>Remove</a>
				</li>
			)
		})}
	</ul>
)