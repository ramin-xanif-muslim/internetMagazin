import CartItem from './CartItem';

export default function CartList(props) {
    // общая стоимость товаров в корзине
    const cost = props.cart.list.TotalAmount
    let list = props.cart.list.Positions

    
    return (
        <div className="cart-modal">
            <i className="material-icons cart-modal-close" onClick={props.closeModal}>
                close
            </i>
            <h5 className="red-text text-lighten-1">Sizin sebetiniz</h5>
            {props.cart.list.Positions.length ? (
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Ad</th>
                            <th>Say</th>
                            <th>Giymet</th>
                            <th>Mebleg</th>
                            <th>Sil</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.cart.list.Positions.map(item =>
                            <CartItem key={item.ProductId} list={list} {...item} Token={props.Token} getCart={props.getCart} />
                        )}
                        <tr>
                            <th colSpan="1">Umimi say</th>
                            <th>{props.cart.list.TotalQuantity}</th>
                        </tr>
                        <tr>
                            <th colSpan="1">Umimi giymet</th>
                            <th>{cost}</th>
                            <th>manat.</th>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>Sizin sebetiniz boshdir.</p>
            )}
        </div>
    );
}