import { Checkbox, CheckboxGroup, Divider } from '@douyinfe/semi-ui'
import { useState } from 'react'

export function SemiCheckbox() {
  const options = [
    { label: '追求极致', value: '1', extra: '不断提高要求，延迟满足感，在更大范围里找最优解' },
    {
      label: '务实敢为',
      value: '2',
      extra: '直接体验，深入事实；不自嗨，注重效果；能突破有担当，打破定式；尝试多种可能，快速迭代'
    },
    {
      label: '开放谦逊',
      value: '3',
      extra: '内心阳光，信任伙伴；乐于助人和求助，合作成大事;格局大，上个台阶想问题；对外敏锐谦虚，ego小，听得进意见'
    },
    {
      label: '坦诚清晰',
      value: '4',
      extra: '敢当面表达真实想法；能承认错误，不装不爱面子；实事求是，暴露问题，反对“向上管理”；准确、简洁、直接，有条理有重点'
    }
  ]

  const options1 = [
    { label: '抖音', value: 'abc' },
    { label: '火山', value: 'hotsoon' },
    { label: '皮皮虾', value: 'pipixia' },
    { label: '今日头条', value: 'toutiao' }
  ]

  // function onChange(checkedValues) {
  //   console.log('checked = ', checkedValues)
  // }

  const plainOptions = ['Photography', 'Movies', 'Running']
  const [checkedList, setCheckedList] = useState(['Photography', 'Running'])
  const [indeterminate, setIndeterminate] = useState(true)
  const [checkAll, setCheckAll] = useState(false)
  const onChange = (checkedList) => {
    setCheckedList(checkedList)
    setIndeterminate(!!checkedList.length && checkedList.length < plainOptions.length)
    setCheckAll(checkedList.length === plainOptions.length)
  }
  const onCheckAllChange = (e) => {
    console.log(e)
    setCheckedList(e.target.checked ? plainOptions : [])
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }

  return (
    <>
      <Checkbox
        defaultChecked
        disabled
        onChange={e => console.log(e)}
        extra="我是辅助文本哦。。。"
      >
        Semi Design
      </Checkbox>

      <Divider>多选框组</Divider>
      <CheckboxGroup
        defaultValue={['A', 'C']}
      >
        <Checkbox value="A">A</Checkbox>
        <Checkbox value="B">B</Checkbox>
        <Checkbox disabled value="C">C</Checkbox>
        <Checkbox value="D">D</Checkbox>
      </CheckboxGroup>
      <Divider>通过 options 生成多选框组</Divider>
      <CheckboxGroup
        options={options}
        defaultValue={['1', '2', '3']}
        onChange={onChange}
        type="card"
      />
      <Divider/>
      <CheckboxGroup
        options={options1}
        onChange={onChange}
        direction="horizontal"
        type="pureCard"
      />
      <Divider>全选</Divider>
      <div>
        <div style={{ paddingBottom: 8, borderBottom: '1px solid var(--semi-color-border)' }}>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
            aria-label="Checkbox 示例"
          >
            Check all
          </Checkbox>
        </div>
        <CheckboxGroup
          style={{ marginTop: 6 }}
          options={plainOptions}
          value={checkedList}
          onChange={onChange}
          aria-label="CheckboxGroup 示例"
        />
      </div>
    </>
  )
}