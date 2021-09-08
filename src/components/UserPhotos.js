import { Col, Image, Row } from 'antd';

const UserPhotos = (props) => {

  let data = props.state.products.data

    return(
      <div  >
        {data ? <Image.PreviewGroup>
          <Row>
            <Col span={12}>
            <Image width={400} src={data[0].DefaultImage}/>
            </Col>
            <Col span={12}>
             { data[1].map(i=><Image width={200} src={"http://ovz2.mucuna.me2jm.vps.myjino.ru/images/" + i.Path + "/"  + i.ImageId + "_m.webp"}/>)}
            </Col>
          </Row>
        </Image.PreviewGroup> : "Loadin"}
      </div>
    )
}

export default UserPhotos