import { Button, Form, Space, Toast } from '@douyinfe/semi-ui'
import { Component } from 'react'

export class PartValidAndResetDemo extends Component {
  constructor() {
    super()
    this.validate = this.validate.bind(this)
    this.getFormApi = this.getFormApi.bind(this)
    this.validatePartial = this.validatePartial.bind(this)
    this.resetPartial = this.resetPartial.bind(this)
  }

  getFormApi(formApi) {
    this.formApi = formApi
  }

  validate(val) {
    if (!val) {
      return 'can\'t be empty'
    } else if (val.length <= 5) {
      return (<span>我是传入的reactNode</span>)
    }
    return
  }

  validatePartial(type) {
    let scope = this.formApi.getValue('validateScope')

    if (!scope) {
      scope = []
    }
    if (type === 'all') {
      scope = ['a', 'b', 'c', 'd', 'b.name']
    }
    // !scope ? scope = [] : null
    // type === 'all' ? scope = ['a', 'b', 'c', 'd', 'b.name'] : null
    this.formApi.validate(scope)
      .then(values => {
        console.log(values)
        Toast.success('pass')
      }).catch(error => {
      Toast.error('error')
      console.log(error)
    })
  }

  resetPartial() {
    let scope = this.formApi.getValue('resetScope')
    this.formApi.reset(scope)
  }

  render() {
    let options = ['a', 'b', 'c', 'd', 'b.name'].map(item => ({ label: item, value: item }))
    return (
      <Form getFormApi={this.getFormApi}
            autoScrollToError
            layout="horizontal"
            onValueChange={values => {
              console.log(values)
            }}
      >
        {
          ({ formState, values, formApi }) => (
            <>
              <div>
                <Form.Input field="a[1]" validate={this.validate} trigger="blur"/>
                <Form.Input field="a[0]" validate={this.validate} trigger="blur"/>
                <Form.Input field="b.name[0]" validate={this.validate} trigger="blur"/>
                <Form.Input field="b.name[1]" validate={this.validate} trigger="blur"/>
                <Form.Input field="b.type" validate={this.validate} trigger="blur"/>
                <Form.Input field="c" validate={this.validate} trigger="blur"/>
                <Form.Input field="d" validate={this.validate} trigger="blur"/>
              </div>
              <div>
                <Form.CheckboxGroup options={options} field="validateScope" label="当前希望校验的Field"
                                    initValue={['a', 'b']} direction="horizontal"/>
                <Form.CheckboxGroup options={options} field="resetScope" label="当前需要Reset的Field"
                                    direction="horizontal"/>
                <Space>
                  <Button htmlType="reset">reset</Button>
                  <Button onClick={() => this.validatePartial('all')}>all validate</Button>
                  <Button onClick={() => this.validatePartial()}>partial
                    validate {JSON.stringify(values.validateScope)}</Button>
                  <Button onClick={this.resetPartial}>partial reset</Button>
                </Space>
              </div>
            </>
          )
        }
      </Form>
    )
  }
}