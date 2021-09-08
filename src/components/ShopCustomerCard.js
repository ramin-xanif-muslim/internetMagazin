

import { NavLink } from 'react-router-dom';


let img = '/images/x.jpg'

export default function ShopCard(props) {

    let data = {
        "ProductId":props.id,
        "ProductName":props.name,
        "Quantity":"1",
        "Price":props.price
    }
    let editData = {
        "f__ProductId__e":props.id
    }



    return (
        <div id={"product-" + props.id} className="card">
            
            <NavLink to="/user_photos">
            <div className="card-image waves-effect waves-block waves-light" onClick={() => props.showMore(editData)}>
                <img className="activator" src={props.image ? props.image : img} alt="" />
            </div>
          </NavLink>
           
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {props.name}
                </span>
                <p>Giymet: {props.price} manat.</p>
            </div>
            <div className="card-action">
                <div onClick={() => props.setShowAlert(props.name)}>
                    <button className="btn-small" onClick={() => props.addToCart(data)} >
                        Almag
                    </button>
                </div>
            </div>
        </div>
    );
}

