import style from './Cart.module.css'

function Cart() {
	return (
	<div className={style.cart}>
	    <table>
			<thead>
				<tr>
					<td>product name</td>
					<td>product image</td>
					<td>product price</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td>
						<button>+</button>
						<button>-</button>
					</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td>Total Price:0</td>
				</tr>
			</tfoot>
		</table>
	</div>
	);
}

export default Cart;