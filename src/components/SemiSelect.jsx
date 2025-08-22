import { Avatar, Divider, Select } from '@douyinfe/semi-ui'
import { IconCamera, IconGift } from '@douyinfe/semi-icons'

export function SemiSelect() {
  const list = [
    { value: 'douyin', label: '抖音', otherKey: 0 },
    { value: 'ulikecam', label: '轻颜相机', disabled: true, otherKey: 1 },
    { value: 'jianying', label: '剪映', otherKey: 2 },
    { value: 'toutiao', label: '今日头条', otherKey: 3 },
  ]
  return (
    <div style={{ padding: 20 }}>
      <Select
        defaultValue=""
        style={{ width: 120 }}
        // disabled
      >
        <Select.Option value="1" disabled>A</Select.Option>
        <Select.Option value="2">B</Select.Option>
        <Select.Option value="3">C</Select.Option>
        <Select.Option value="4">D</Select.Option>
      </Select>

      <Divider/>
      <Select optionList={list}
              multiple
              maxTagCount={2}
      />
      <Divider/>
      <Select
        placeholder="选择"
        validateStatus="error"
        prefix={<IconCamera/>}
        suffix={<IconGift/>}
        outerBottomSlot={
          <div>
            <span style={{ color: 'var(--semi-color-link)' }}>未找到应用?</span>
          </div>
        }
        innerBottomSlot={
          <div>
            <span style={{ color: 'var(--semi-color-link)' }}>未找到应用?</span>
          </div>
        }
      >
        <Select.OptGroup label="phase1">
          <Select.Option value="1">1</Select.Option>
          <Select.Option value="2">2</Select.Option>
          <Select.Option value="3">3</Select.Option>
        </Select.OptGroup>
        <Select.OptGroup label="phase2">
          <Select.Option value="4">4</Select.Option>
          <Select.Option value="5">5</Select.Option>
          <Select.Option value="6">6</Select.Option>
        </Select.OptGroup>
      </Select>
      <Divider/>

      <Select
        placeholder="选择"
        filter
        multiple
        // autoClearSearchValue={false}
        style={{ width: 140 }}
        searchPosition={'trigger'}
      >
        <Select.OptGroup label="phase1">
          <Select.Option value="1">1</Select.Option>
          <Select.Option value="2">2</Select.Option>
          <Select.Option value="3">3</Select.Option>
          <Select.Option value="4">4</Select.Option>
          <Select.Option value="5">5</Select.Option>
          <Select.Option value="6">6</Select.Option>
        </Select.OptGroup>
      </Select>
      <Divider/>

      <Select
        placeholder="选择"
        filter={(input, option) => {
          let label = option.label.toUpperCase()
          let sug = input.toUpperCase()
          return label.includes(sug)
        }}
        style={{ width: 140 }}
        searchPosition="dropdown"
        multiple={true}
        renderSelectedItem={(option) => {
          return { isRenderInTag: false, content: (<Avatar size="small">{option.label}</Avatar>) }
        }}
      >
        <Select.Option value="1">abc</Select.Option>
        <Select.Option value="2">bcd</Select.Option>
        <Select.Option value="3">cde</Select.Option>
        <Select.Option value="4">def</Select.Option>
        <Select.Option value="5">dfg</Select.Option>
        <Select.Option value="6">fgh</Select.Option>
      </Select>
      <Divider/>
      
    </div>
  )
}