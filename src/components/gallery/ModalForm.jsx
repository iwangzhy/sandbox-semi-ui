import React from 'react'
import { Button, Col, Form, Modal, Row } from '@douyinfe/semi-ui'

export class ModalForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
    this.showDialog = this.showDialog.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.getFormApi = this.getFormApi.bind(this)
    this.hideDialog = this.hideDialog.bind(this)
  }

  showDialog() {
    this.setState({ visible: true })
  }

  hideDialog() {
    this.setState({ visible: false })
  }

  handleOk() {
    let self = this
    this.formApi.validate()
      .then((values) => {
        console.log(values)
        self.hideDialog()
      })
      .catch((errors) => {
        console.log(errors)
      })
  }

  handleCancel() {
    this.hideDialog()
  }

  getFormApi(formApi) {
    this.formApi = formApi
  }

  render() {
    const { visible } = this.state
    let message = '必填'
    return (
      <>
        <Button onClick={this.showDialog}>打开弹框</Button>
        <Modal
          title="新建"
          visible={visible}
          onOk={this.handleOk}
          style={{ width: 600 }}
          onCancel={this.handleCancel}
        >
          <Form getFormApi={this.getFormApi}>
            <Row>
              <Col span={5}>
                <Form.Select field="region" label="国家/地区" placeholder="请选择" style={{ width: '100%' }}
                             rules={[{ required: true, message }]}
                             showClear
                >
                  <Form.Select.Option value="CN">中国</Form.Select.Option>
                  <Form.Select.Option value="US">美国</Form.Select.Option>
                  <Form.Select.Option value="EU">欧洲</Form.Select.Option>
                  <Form.Select.Option value="JP">日本</Form.Select.Option>
                </Form.Select>

              </Col>
              <Col span={15} offset={2}>
                <Form.Input field="owner" label="业务执行人" trigger="blur" rules={[{ required: true, message }]}>
                </Form.Input>
              </Col>
            </Row>
            <Row>
              <Col span={5}>
                <Form.Select field="area" label="投放区域" placeholder="请选择" style={{ width: '100%' }}
                             rules={[{ required: true, message }]}
                >
                  <Form.Select.Option value="CN">中国</Form.Select.Option>
                  <Form.Select.Option value="US">美国</Form.Select.Option>
                  <Form.Select.Option value="EU">欧洲</Form.Select.Option>
                  <Form.Select.Option value="JP">日本</Form.Select.Option>
                </Form.Select>
              </Col>
              <Col span={15} offset={2}>
                <Form.Input
                  field="department"
                  label="业务执行部门"
                  trigger="blur"
                  rules={[
                    { required: true, message },
                  ]}
                />
              </Col>
            </Row>
          </Form>

        </Modal>
      </>
    )
  }

}