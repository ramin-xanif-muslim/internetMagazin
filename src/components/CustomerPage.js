import {useEffect, useState} from 'react';
import CartIcon from './CartIcon';
import ShowAlert from './ShowAlert';
import CartList from './CartList';
import ShopList from './ShopList';

export default function Content(props) {

    useEffect(()=>{
        props.getToken()
    },[])
    
    const [cartItems, setCartItems] = useState([]);
    const [cartShow, setCartShow] = useState(false); // модальное окно
    // для показа сообщения после добавления в корзинxz
    const [showAlert, setShowAlert] = useState(null);


    const appendToCart = (item, quantity = 1) => {
        // нужно проверить, нет ли уже такого товара в корзине
        const itemIndex = cartItems.findIndex(value => value.id === item.id);
        if (itemIndex < 0) { // такого товара еще нет
            const newItem = {
                ...item,
                quantity: quantity
            };
            setCartItems([...cartItems, newItem]);
        } else { // такой товар уже есть
            const newItem = {
                ...cartItems[itemIndex],
                quantity: cartItems[itemIndex].quantity + quantity
            };
            const newCart = cartItems.slice(); // копия массива cartItems
            newCart.splice(itemIndex, 1, newItem);
            setCartItems(newCart);
        }
        setShowAlert(item.name + ' sebete eleve olundu ');
    };

    const toggleShow = () => setCartShow(!cartShow);

    const hideAlert = () => setShowAlert(null);

    let token = localStorage.getItem("token")

    let Token = {
        "Token": token
    }





    return (
        <main className="container">
            <CartIcon length={cartItems.length} Token={Token} getCart={props.getCart}
             toggleShow={toggleShow} closeModal={props.closeModal} />
            {showAlert && <ShowAlert text={showAlert} hideAlert={hideAlert} />}
            { props.state.products.error ? <h3>error</h3> : 
            <ShopList addToCart={props.addToCart} appendToCart={appendToCart} fetching={props.fetching}
             Token={Token} getProduct={props.getProduct} List={props.List} showMore={props.showMore}/>}
            {props.cart.cartShow ? (
                <CartList cart={props.cart} items={cartItems} toggleShow={toggleShow} Token={Token}
                getCart={props.getCart} closeModal={props.closeModal} 
                removeFromCart={props.removeFromCart} removeFromCart={props.removeFromCart} />
            ) : (
                null
            )}
        </main>
    );
}