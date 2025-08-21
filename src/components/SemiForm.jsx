import { Button, Form, Row, Tooltip } from '@douyinfe/semi-ui'
import { IconHelpCircle } from '@douyinfe/semi-icons'
import React, { useRef } from 'react'

export function SemiForm() {
  return (
    <Form style={{ width: 450 }}>
      {({ formState }) => {
        return <React.Fragment>
          <Form.Input field="name" label="用户名称"/>
          <Form.RadioGroup field="isAnchor" label="是否已注册主播">
            <Form.Radio value="yes">yes</Form.Radio>
            <Form.Radio value="no">no</Form.Radio>
          </Form.RadioGroup>
          {
            formState.values.isAnchor === 'yes'
              ? (<Form.Input field="liveRoom" label="直播"/>)
              : null
          }
          <Button htmlType="submit">提交</Button>
        </React.Fragment>
      }}
    </Form>
  )
}

export function SemiForm6() {
  const formRef = useRef()
  const handleSelectChange = (value) => {
    let text = value === 'male' ? 'Hi male' : 'Hi female'
    formRef.current.formApi.setValue('note', text)
  }
  return (
    <>
      <Form ref={formRef}
            onValueChange={values => console.log(values)}
            style={{ width: 250 }}
      >
        <span>Note will change after Sex select</span>
        <Form.Input field="note" style={{ width: 250 }}/>
        <Form.Select field="sex" onChange={handleSelectChange} style={{ width: 250 }}>
          <Form.Select.Option value="female">female</Form.Select.Option>
          <Form.Select.Option value="male">male</Form.Select.Option>
        </Form.Select>
        <Row>
          <Button type="primary" htmlType="submit" className="btn-margin-right">submit</Button>
          <Button htmlType="reset">reset</Button>
        </Row>
      </Form>
    </>
  )
}

export function SemiForm5() {
  return (
    <>
      <Form
        onValueChange={values => console.log(values)}
        labelPosition="top"
        style={{ width: 400 }}
      >
        <Form.InputGroup label={{ text: (<span>手机号码</span>), required: true }} labelPosition="top">
          <Form.Select style={{ width: 100 }}
                       field="phonePrefix"
                       initValue="+86"
                       rules={[{ required: true }]}
                       showClear>
            <Form.Select.Option value="+1">美国</Form.Select.Option>
            <Form.Select.Option value="+852">香港</Form.Select.Option>
            <Form.Select.Option value="+86">中国</Form.Select.Option>
            <Form.Select.Option value="+81">日本</Form.Select.Option>
          </Form.Select>
          <Form.Input field="phoneNumber" initValue="13412341234" style={{ width: 250 }}
                      rules={[{ required: true }]}
                      showClear
          />
        </Form.InputGroup>
        <Form.Input field="姓名" trigger="blur" initValue="Semi"></Form.Input>
        <Button htmlType="submit">提交</Button>
      </Form>
    </>
  )
}

export function SemiForm4() {
  return (
    <>
      <Form
        // layout="horizontal"
        labelPosition="left"
        onValueChange={values => console.log(values)}
        onSubmit={values => console.log(values)}

      >
        <Form.Input field="特效名称" style={{ width: 250 }}
                    helpText={
                      <span style={{ color: 'var(--semi-color-warning)' }}>输入特效名称</span>
                    }
                    extraText={
                      <div
                        style={{
                          color: 'var(--semi-color-link)',
                          fontSize: 14,
                          userSelect: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        没有想到合适的密码？点击随机生成一个
                      </div>
                    }
                    extraTextPosition="bottom"
        />
        <Form.Slot label={{ text: 'SlotA' }} error="我是SlotA的ErrorMessage">
          <div style={{ display: 'flex', alignItems: 'center', height: 32, marginTop: 8 }}>
            我是Semi Form SlotA, 我是自定义的ReactNode
          </div>
        </Form.Slot>
        <Form.Slot label={{ text: 'SlotB', width: 160, align: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%', border: '1px solid red' }}>
            我是Semi Form SlotB, 我的Label Align、Width与众不同
          </div>
        </Form.Slot>
      </Form>
    </>
  )
}

export function SemiForm3() {
  return (
    <>
      <Form
        // layout="horizontal"
        onValueChange={values => console.log(values)}
        wrapperCol={{ span: 20 }}
        labelCol={{ span: 2 }}
        labelPosition="inset"
        labelAlign="right"
      >
        <Form.Input field="name" style={{ width: 250 }} label="姓名" trigger="blur"
                    placeholder="请输入姓名"></Form.Input>
        <Form.Select field="role" label={'角色'} placeholder={'请选择角色'} style={{ width: 250 }} noLabel>
          <Form.Select.Option value="operate">运营</Form.Select.Option>
          <Form.Select.Option value="rd">开发</Form.Select.Option>
          <Form.Select.Option value="pm">产品</Form.Select.Option>
          <Form.Select.Option value="ued">设计</Form.Select.Option>
        </Form.Select>
      </Form>
    </>
  )
}

export function SemiForm2() {
  return (
    <>
      <Form
        layout="horizontal"
        onValueChange={values => console.log(values)}
        render={(formState, formApi, values) => {
          return (
            <>
              <Form.Input field="username" label="用户名" style={{ width: 180 }}/>
              <Form.Input field="pwd" label={{
                text: '密码',
                extra: <Tooltip content="详情"><IconHelpCircle
                  style={{ color: 'var(--semi-color-text-2)' }}/></Tooltip>
              }} style={{ width: 176 }}/>
              <Form.Select field="role" label="role" style={{ width: 176 }}>
                <Form.Select.Option value="admin">admin</Form.Select.Option>
                <Form.Select.Option value="user">user</Form.Select.Option>
                <Form.Select.Option value="guest">guest</Form.Select.Option>
              </Form.Select>
              <code style={{ marginTop: 30 }}>{JSON.stringify(formState)}</code>
            </>
          )
        }}
      >
      </Form>
    </>
  )
}

export function SemiForm1() {
  return (
    <>
      <Form layout="vertical" onValueChange={values => {console.log(values)}}>
        <Form.Input field="username" label="用户名" style={{ width: 180 }}/>
        <Form.Input field="pwd" label={{
          text: '密码',
          extra: <Tooltip content="详情"><IconHelpCircle style={{ color: 'var(--semi-color-text-2)' }}/></Tooltip>
        }} style={{ width: 176 }}/>
        <Form.Select field="role" label="role" style={{ width: 176 }}>
          <Form.Select.Option value="admin">admin</Form.Select.Option>
          <Form.Select.Option value="user">user</Form.Select.Option>
          <Form.Select.Option value="guest">guest</Form.Select.Option>
        </Form.Select>
      </Form>
    </>
  )
}