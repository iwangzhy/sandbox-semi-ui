import { Component } from 'react'
import { Button, Form } from '@douyinfe/semi-ui'

export class FieldLevelValidate extends Component {
  constructor(props) {
    super(props)
    this.validateName = this.validateName.bind(this)
    this.asyncValidate = this.asyncValidate.bind(this)
  }

  validateName(val) {
    if (!val) {
      return '【sync】can\'t be empty'
    } else if (val.length <= 5) {
      return '【sync】must more than 5'
    }
    return ''
  }

  asyncValidate(val, values) {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    return sleep(2000).then(() => {
      if (!val) {
        return '【async】can\'t be empty'
      } else if (val.length <= 5) {
        return '【async】must more than 5'
      } else {
        return ''
      }
    })
  }

  render() {
    return (
      <>
        <Form>
          <Form.Input field="name" label="sync validate" validate={this.validateName} trigger="blur"/>
          <Form.Input field="familyName" label="async validate" validate={this.asyncValidate} trigger="blur"/>
          <Button htmlType="reset">reset</Button>
        </Form>
      </>
    )
  }
}