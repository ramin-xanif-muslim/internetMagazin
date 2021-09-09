import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Content from './layout/Content';
import { connect } from 'react-redux';
import { getProduct } from "./redux/product";
import { searchProduct } from "./redux/product";
import { createProduct } from "./redux/product";
import { getToken } from "./redux/product";
import { getType } from "./redux/product";
import { savePhoto } from "./redux/product";
import { showMore } from "./redux/product";
import { updateProduct } from "./redux/product";
import { addToCart } from "./redux/cart";
import { closeModal } from "./redux/cart";
import { getCart } from "./redux/cart";
import { setShowAlert } from "./redux/cart";
import 'antd/dist/antd.css';
import './App.css';

class App extends React.Component {

       componentDidMount() {
              this.props.getToken()
       }

       render() {
              return (
                     <React.Fragment>
                            <Header 
                            getToken={this.props.getToken}
                            state={this.props.state} 
                            />
                            <Content 
                               state={this.props.state}
                               getProduct={this.props.getProduct}
                               setShowAlert={this.props.setShowAlert}
                               showMore={this.props.showMore}
                               addToCart={this.props.addToCart}
                               getCart={this.props.getCart}
                               closeModal={this.props.closeModal}
                               cart={this.props.state.cart}
                               getToken={this.props.getToken}
                               getType={this.props.getType}
                               updateProduct={this.props.updateProduct}
                               savePhoto={this.props.savePhoto}
                               createProduct={this.props.createProduct}
                               searchProduct={this.props.searchProduct}
                            />
                            <Footer />
                     </React.Fragment>
              );
       }
}

const mapStateToProps = (state) => ({
       state
});
const mapDispatchToProps = {
       getProduct, addToCart, getCart, closeModal,searchProduct,
       showMore, getToken, getType, updateProduct, savePhoto, setShowAlert, createProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
