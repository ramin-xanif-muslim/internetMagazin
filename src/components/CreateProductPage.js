import { Form, Input, Button, Col, Row } from 'antd';
import { useState } from 'react';
import s from './Product.module.css';
import React from 'react'
import * as axios from "axios";

export default function CreateProductPage(props) {

  const [images,setImage] = useState([])

  const onMainPhotoSelected = (e) => {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    let Token = localStorage.getItem("Token")
    const instance = axios.create({ headers: { "Token": `${Token}` } });
    instance.post(`http://ovz2.mucuna.me2jm.vps.myjino.ru/put.php`, data)
                .then(result => result.data)
                .then(res => 
                  setImage([...images,{ImageId: res.Guid,Path: res.Path}]))
  }

  const onFinish = (values) => {
    console.log(values)
    let file = values
    if(!values.Description){
      values.Description = ""
    }
    let im
    if(images.length === 0){
      im=""
    }else im = "http://ovz2.mucuna.me2jm.vps.myjino.ru/images/" + images[0].Path + "/" + images[0].ImageId + "_m.webp"
    file.Images = images
    file.DefaultImage = im
    props.createProduct(file)
    alert('Product elave edildi!')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  let img = images.length ?  "http://ovz2.mucuna.me2jm.vps.myjino.ru/images/" + images[0].Path + "/" + images[0].ImageId + "_m.webp" : ''

  return (
    <div className={s.style}>
      <div>
        <div >
          <Row>
            <Col span={12}>
              {images.length ? <img className={s.img} src={img} alt="" /> : null}
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
                    Yarad
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div >
                <input className="fileInput"
                  type="file" 
                  onChange={(e) => onMainPhotoSelected(e)} />
                <div >
                  {images ? images.map(i=><img key={i.ImageId}
                  style={{margin: "10px", width: "140px", height: "140px", border: '5px solid' }}
                   src={"http://ovz2.mucuna.me2jm.vps.myjino.ru/images/" + i.Path + '/' + i.ImageId + "_m.webp"}/>) : null}                
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}