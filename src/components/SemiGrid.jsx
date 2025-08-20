import { Col, Divider, Row } from '@douyinfe/semi-ui'

export const SemiGrid = () => {
  return (
    <div className="grid">
      <Row>
        <Col span={24}>
          <div className="col-content">row1-col-24</div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div className="col-content">col-12</div>
        </Col>
        <Col span={12}>
          <div className="col-content">col-12</div>
        </Col>
      </Row>
      <Divider> 间隔： Row.gutter 属性进行控制 (16 + 8n px),数组格式，[横向间隔,垂直间隔]</Divider>
      <Row gutter={16}>
        <Col span={12}>
          <div className="col-content">col-12</div>
        </Col>
        <Col span={12}>
          <div className="col-content">col-12</div>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <div className="col-content">col-12</div>
        </Col>
        <Col span={12}>
          <div className="col-content">col-12</div>
        </Col>
      </Row>
      <Divider> 偏移 offset </Divider>
      <Row>
        <Col span={12} offset={2}>
          <div className="col-content">col-12</div>
        </Col>
        <Col span={10}>
          <div className="col-content">col-10</div>
        </Col>
      </Row>
      <Divider>Flex 布局,</Divider>
      <Row type="flex" justify="start">
        <Col span={2}>
          <div className="col-content">col-2</div>
        </Col>
        <Col span={4}>
          <div className="col-content">col-4</div>
        </Col>
        <Col span={4}>
          <div className="col-content">col-4</div>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col span={6}>
          <div className="col-content">col-6</div>
        </Col>
        <Col span={6}>
          <div className="col-content">col-6</div>
        </Col>
        <Col span={11}>
          <div className="col-content">col-11</div>
        </Col>
      </Row>
      <Row type="flex" justify="end">
        <Col span={6}>
          <div className="col-content">col-6</div>
        </Col>
        <Col span={6}>
          <div className="col-content">col-6</div>
        </Col>
        <Col span={11}>
          <div className="col-content">col-11</div>
        </Col>
      </Row>
      <Divider>space-around</Divider>
      <Row type="flex" justify="space-around">
        <Col span={6}>
          <div className="col-content">col-6</div>
        </Col>
        <Col span={6}>
          <div className="col-content">col-6</div>
        </Col>
        <Col span={11}>
          <div className="col-content">col-11</div>
        </Col>
      </Row>
      <Divider>space-between</Divider>
      <Row type="flex" justify="space-between" align="bottom">
        <Col span={6}>
          <div className="col-content">col-6</div>
        </Col>
        <Col span={6}>
          <div className="col-content">col-6</div>
        </Col>
        <Col span={11}>
          <div className="col-content">col-11</div>
        </Col>
      </Row>
      <Divider>根据 order 排序,需要在 Row 定义 type='flex', Col 定义 order 的值</Divider>
      <Row type="flex">
        <Col span={6} order={4}>
          <div className="col-content">col-4</div>
        </Col>
        <Col span={6} order={3}>
          <div className="col-content">col-3</div>
        </Col>
        <Col span={6} order={2}>
          <div className="col-content">col-2</div>
        </Col>
        <Col span={6} order={1}>
          <div className="col-content">col-1</div>
        </Col>
      </Row>
      <Divider>响应式</Divider>
    </div>
  )
}