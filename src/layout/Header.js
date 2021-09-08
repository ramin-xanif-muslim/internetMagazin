
import {NavLink} from "react-router-dom";
import s from '../login/Login.module.css'

export default function Header(props) {

    return (
        <div className={s.current}>
            <header>
            <nav className="teal lighten-1">
                <div className="nav-wrapper container">
                <NavLink to="/products" className="brand-logo" activeClassName={s.current} >Mehsullar</NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {props.state.products.Type === "store" && <li><NavLink to="/product_yarad" activeClassName={s.current} >Mehsul yarad</NavLink></li>}
                        <li><NavLink to="/costomersingup" activeClassName={s.current} >Costomer sing up</NavLink></li>
                        <li><NavLink to="/storesingup" activeClassName={s.current}>Store sing up</NavLink></li>
                        <li><NavLink to="/login" activeClassName={s.current}>Login</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
        </div>
    );
}