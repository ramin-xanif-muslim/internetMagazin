import { Form, Input, Button, Col, Row } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import s from './Product.module.css';


let img = '/images/x.jpg'

export default function Product(props) { 
  
  const [selectDefaultImage,setSelectDefaultImage] = useState('')
  
  // useEffect(()=>setSelectDefaultImage(props.data ? props.data[0].DefaultImage : ''),[props.data])


  const [images,setImage] = useState([])

  const onMainPhotoSelected = (e) => {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    let Token = localStorage.getItem("Token")
    const instance = axios.create({ headers: { "Token": `${Token}` } });
    instance.post(`http://ovz2.mucuna.me2jm.vps.myjino.ru/put.php`, data)
                .then(result => result.data)
                .then(res => setImage([...images,{ImageId: res.Guid,Path: res.Path}]))
    setImage([...images,...props.data[1]])
  }

  const onFinish = (values) => {
    console.log(values)
    let file = values
    file.Images = images
    file.DefaultImage = selectDefaultImage
    file.ProductId = props.data[0].ProductId
    props.updateProduct(file)
    alert('Deyishiklik edildi!')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  let productDiscription = props.data ? <div className={s.style}>
  <Row>
<Col span={12}>
  <img className={s.img} src={props.data ? selectDefaultImage : img} alt="" />
  <div><input type={"file"} name="file" onChange={onMainPhotoSelected} /></div>
</Col>
    <Col span={12}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          Category: props.data[0].Category,
          Description: props.data[0].Description,
          Name: props.data[0].Name,
          Price: props.data[0].Price,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Description"
          name="Description"
          rules={[
            {
              required: false,
              message: 'Please input your description!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Name"
          name="Name"
          rules={[
            {
              required: true,
              message: 'Please input your  product name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="Price"
          rules={[
            {
              required: true,
              message: 'Please input your price!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </Col>
  </Row>
  <Row>
    <Col span={24}>
      <div >
          <div >
            {props.data ? props.data[1].map(i => <img key={i.ImageId}
              onClick={() => setSelectDefaultImage("http://ovz2.mucuna.me2jm.vps.myjino.ru/images/" + i.Path + '/' + i.ImageId + "_m.webp")}
              style={{ margin: "10px", width: "140px", height: "140px" }}
              src={"http://ovz2.mucuna.me2jm.vps.myjino.ru/images/" + i.Path + "/" + i.ImageId + "_m.webp"} />) : null}
            {images ? images.map(i =>
              <img key={i.ImageId}
                onClick={() => setSelectDefaultImage("http://ovz2.mucuna.me2jm.vps.myjino.ru/images/" + i.Path + '/' + i.ImageId + "_m.webp")}
                style={{ margin: "10px", width: "140px", height: "140px" }}
                src={"http://ovz2.mucuna.me2jm.vps.myjino.ru/images/" + i.Path + '/' + i.ImageId + "_m.webp"} />
            ) : null}
          </div>
      </div>
    </Col>
  </Row>
</div> : <Redirect to="/products" />


  return (
  <div>
    { props.state.products.fetching ? <div>Loading...</div> :
    productDiscription 
    }
  </div>
  );
}