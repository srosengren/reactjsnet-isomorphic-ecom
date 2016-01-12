function getCartState(){
	return {
		items: cartStore.getAllItems()
	}
}

class Cart extends React.Component {

	constructor(props){
		super(props);
		this.state = getCartState();
		this._onChange = this._onChange.bind(this);
	}

	componentDidMount() {
		cartStore.subscribe(this._onChange);
	}

	componentWillUnmount() {
		//cartStore.unSubscribe
	}

	_onChange(){
		this.setState(getCartState());
	}

	render() {
		let items = this.state.items || this.props.products || [];

		return (
			<div>
			<h2>My cart</h2>
				<CartList items={items} />
				<CartTotal items={items} />
			
		</div>
		)
	}
}