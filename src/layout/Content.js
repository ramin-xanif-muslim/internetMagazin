import React from 'react';
import { Route } from 'react-router-dom';
import Content from '../components/Content';
import Login from '../login/LoginContainer';
import Product from '../components/Product';
import CostomerSingUn from '../login/CostomerSingUnContainer';
import StoreSingUp from '../login/StoreSingUpContainer';
import UserPhotos from '../components/UserPhotos';
import MenuDD from '../components/MenuDD';
import CreateProductPage from '../components/CreateProductPage';
import s from './Content.module.css';
import 'antd/dist/antd.css';
import Images from '../components/Images';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const Contents = (props) => {
       const onSearch = value => props.searchProduct({Search: value})
    return(
        <div className={s.style}>
        <div>
              <Space direction="vertical">
                     <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
              </Space>
          <MenuDD />
        </div>
        <div>
               <Route path='/images gallery'
                      render={() => <Images />} />
               <Route path='/login'
                      render={() => <Login Token={props.state.login.Token}/>} />
               <Route path='/costomersingup'
                      render={() => <CostomerSingUn />} />
               <Route path='/storesingup'
                      render={() => <StoreSingUp />} />
               <Route path='/products'
                      render={() => <Content state={props.state}
                             getProduct={props.getProduct}
                             setShowAlert={props.setShowAlert}
                             showMore={props.showMore}
                             addToCart={props.addToCart}
                             getCart={props.getCart}
                             closeModal={props.closeModal}
                             cart={props.state.cart}
                             fetching={props.state.products.fetching}
                             List={props.state.products.List}
                             getToken={props.getToken}
                             getType={props.getType}
                             Token={props.state.products.Token} />} />
               <Route path='/product'
                      render={() => <Product data={props.state.products.data}
                             updateProduct={props.updateProduct}
                             showMore={props.showMore}
                             state={props.state}
                             Token={props.state.products.Token}
                             savePhoto={props.savePhoto} />} />
               <Route path='/product_yarad'
                      render={() => <CreateProductPage createProduct={props.createProduct}
                             Token={props.state.products.Token}
                             state={props.state}
                             savePhoto={props.savePhoto} />} />
               <Route path='/user_photos'
                      render={() => <UserPhotos state={props.state}
                      showMore={props.showMore}
                       />} />
        </div>
 </div>
    )
}

export default Contents