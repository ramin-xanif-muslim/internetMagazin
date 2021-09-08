import { API_BASE } from '../config/env';
import axios from "axios";
import s from './CartItem.module.css';


export default function CartItem(props) {

    let removeFromCart = (data) => {
        let Token = localStorage.getItem("Token")
        const instance = axios.create({ headers:     { "Token": `${Token}`}});
        instance.post(`${API_BASE}/cart/delete.php`, data)
                .then(result => result.data)
                .then(data => props.getCart(props.Token))
    }
    let data = {
        "ProductId":props.ProductId,
    }
    
    return (
        <tr>
            <td>
                <div className={s.style}>
                    <div>
                        <img src={props.Icon} style={{ margin: "0px", width: "50px", height: "50px" }} />
                    </div>
                    <div>
                        {props.ProductName}
                    </div>
                </div>
            </td>
            <td>{props.Quantity}</td>
            <td>{props.Price}</td>
            <td>{props.Price * props.Quantity}</td>
            <td>
                    <i
                        className="material-icons cart-item-delete"
                        onClick={() => removeFromCart(data)}
                    >
                        close
                    </i>
            </td>
        </tr>
    );
}