import {useState, useEffect} from 'react';
import ShopStoreCard from './ShopStoreCard';
import ShopCustomerCard from './ShopCustomerCard';
import Preloader from './Preloader';

export default function ShopList(props) {

    const [loading, setLoading] = useState(true); // идет загрузка?

    

    useEffect(() => { props.getProduct()
        setTimeout(setLoading(false), 2000 )
        setLoading(false);
    }, []);
    
    return (
        <div className="items">
            {loading ? (
                <Preloader />
            ) : !props.fetching && props.List && props.List.length && props.Token && props.state.products.Type === "store"  ? (
                props.List.map(item => (
                    <ShopStoreCard key={item.ProductId}  appendToCart={props.appendToCart}
                    state={props.state} showMore={props.showMore} image={item.DefaultImage}
                     List={props.List} id={item.ProductId} name={item.Name} price={item.Price}
                     addToCart={props.addToCart} Token={props.Token} getProduct={props.getProduct}  />
                ))
                ) : !props.fetching && props.List && props.Token && props.state.products.Type === "customer"  ? (
                    props.List.map(item => (
                        <ShopCustomerCard key={item.ProductId}  appendToCart={props.appendToCart} 
                         List={props.List} id={item.ProductId} name={item.Name} price={item.Price}
                         image={item.DefaultImage} showMore={props.showMore}
                         addToCart={props.addToCart} Token={props.Token} setShowAlert={props.setShowAlert}/>
                    ))
                ) :
                (
                    <p>Mehsul yoxdur...</p>
                )
            }
        </div>
    )
}