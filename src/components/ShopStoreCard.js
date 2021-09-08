
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE } from '../config/env';
import { NavLink } from 'react-router-dom';

let img = '/images/x.jpg'

export default function ShopCard(props) {

    let data = {
        "ProductId":props.id,
        }
    let editData = {
        "f__ProductId__e":props.id
    }



    let deleteProduct = (data) => {
        let Token = localStorage.getItem("Token")
        const instance = axios.create({ headers:     { "Token": `${Token}`}});
                
        instance.post(`${API_BASE}/product/delete.php`, data)
                .then(result => result.data)
                .then(res => props.getProduct())
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
                <Link to='/product'>
                <button className="btn-small" onClick={() => props.showMore(editData)}>
                    Deyish
                </button>
                </Link>
                <button className="btn-small right" onClick={()=>deleteProduct(data)} >
                    Sil
                </button>
            </div>
        </div>
    );
}

