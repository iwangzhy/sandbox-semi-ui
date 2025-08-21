import React from 'react'
import { Button, Form } from '@douyinfe/semi-ui'

export class FormLevelValidateAsync extends React.Component {
  constructor(props) {
    super(props)
    this.asyncValidate = this.asyncValidate.bind(this)
  }

  asyncValidate(values) {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    return sleep(2000).then(() => {
      const errors = {}
      if (values.name !== 'mike') {
        errors.name = 'you must name mike'
      }
      if (values.sex !== 'female') {
        errors.sex = 'must be woman'
      }
      errors.familyName = [
        { before: 'before error balabala', after: 'after error balabal' },
        'familyName[1] error balabala'
      ]
      return errors
    })
  }

  render() {
    return (
      <>
        <Form validateFields={this.asyncValidate} layout="horizontal">
          <Form.Input field="name" trigger="blur"/>
          <Form.Input field="sex" trigger="blur"/>
          <Form.Input field="familyName[0].before" trigger="blur"/>
          <Form.Input field="familyName[0].after" trigger="blur"/>
          <Form.Input field="familyName[1]" trigger="blur"/>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            {/* htmlType='submit' 表示提交表单 */}
            <Button type="primary" htmlType="submit" className="btn-margin-right">
              Submit
            </Button>
            <Button htmlType="reset">reset</Button>
          </div>
        </Form>
      </>
    )
  }
}