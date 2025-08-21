import {
  AutoComplete,
  Cascader,
  DatePicker,
  Divider,
  HotKeys,
  Input,
  InputGroup,
  InputNumber,
  Select,
  TextArea,
  TreeSelect
} from '@douyinfe/semi-ui'
import { useState } from 'react'

export function SemiInput() {
  const [value, setValue] = useState('123')
  const treeData = [
    {
      label: 'Asia',
      value: 'Asia',
      key: '0',
      children: [
        {
          label: 'China',
          value: 'China',
          key: '0-0',
          children: [
            { label: 'Beijing', value: 'Beijing', key: '0-0-0' },
            { label: 'Shanghai', value: 'Shanghai', key: '0-0-1' },
          ],
        },
      ],
    },
    { label: 'North America', value: 'North America', key: '1' }
  ]
  return (
    <>
      <Input defaultValue="hi"
             size="large"
        // disabled
        //      onChange={(value) => {
        //        console.log(value)
        //      }}
        // prefix={<IconMail/>}
        // suffix="@qq.com"
             style={{ width: 250 }}
             addonBefore="https://"
             addonAfter=".com"
             showClear
             onEnterPress={(e) => {
               console.log(e.target.value)
             }}
      />
      <Divider/>
      <Input mode="password"/>
      <Divider/>
      <br/>
      <br/>
      <br/>
      <Input
        defaultValue="javascript"
        validateStatus="error"
        value={value}
        showClear
        onChange={(v) => {
          console.log(v)
          setValue(v)
        }}
      />
      <Divider>输入框组合 InputGroup</Divider>
      <InputGroup size="small">
        <Input placeholder="name" style={{ width: 80 }}/>
        <InputNumber placeholder="score"/>
      </InputGroup>
      <br/>
      <br/>
      <br/>
      <InputGroup>
        <Select defaultValue="work">
          <Select.Option value="home">Home</Select.Option>
          <Select.Option value="work">Work</Select.Option>
        </Select>
        <AutoComplete
          data={['zhuhai']}
          placeholder="Work: "
          style={{ width: 180 }}
        ></AutoComplete>
        <DatePicker/>
      </InputGroup>
      <br/>
      <br/>
      <br/>
      <InputGroup label="树形输入框">
        <TreeSelect treeData={treeData}/>
        <Cascader treeData={treeData} showNext="hover"/>
      </InputGroup>
      <br/>
      <br/>
      <br/>
      <p style={{ display: 'flex' }}>
        使用
        <HotKeys
          hotKeys={['shift', 'enter']}
          style={{ marginBottom: 12, marginLeft: 4, marginRight: 4 }}
        />
        换行的 TextArea
      </p>
      <TextArea
        value={value}
        onChange={(v, e) => {
          setValue(v)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            // e.preventDefault()
          }
        }}
        maxCount={1000}
        showClear
        autosize
        rows={1}
      />


    </>
  )
}