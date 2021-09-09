import { Form, Input, Button, Checkbox } from 'antd';
import s from './Login.module.css'
import { Redirect } from 'react-router';

const Login = (props) => {
  
  const onFinish = (values) => {
    props.postToServer(values)
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (<div>
    {props.Token ? <Redirect to="products" /> :
    <div className={s.style}>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Login"
        name="Login"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <div >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
        
      </Form.Item>
    </Form></div>
  }
  </div>)
};

export default Login;