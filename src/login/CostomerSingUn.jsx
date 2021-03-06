import { Form, Input, Button, Checkbox } from 'antd';
import s from './Login.module.css'

const CostomerSingUn = (props) => {
  const onFinish = (values) => {
    console.log(values)
    props.postToServer(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (<div className={s.style}>
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
        label="Fullname"
        name="Fullname"
        rules={[
          {
            required: true,
            message: 'Please input your fullname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="Phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone!',
          },
        ]}
      >
        <Input />
      </Form.Item>
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
        <Button type="primary" htmlType="submit">
        SingUp
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default CostomerSingUn;