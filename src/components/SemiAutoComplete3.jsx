import React, { useState } from 'react'
import { AutoComplete, Empty } from '@douyinfe/semi-ui'
import { IconSearch } from '@douyinfe/semi-icons'
import { IconButton, IconForm, IconInput, IconSelect, IconTable } from '@douyinfe/semi-icons-lab'
import { IllustrationNoContent } from '@douyinfe/semi-illustrations'

export function SemiAutoComplete3() {
  let initList = [
    { value: 'select', label: '选择器', icon: <IconSelect/> },
    { value: 'input', label: '输入框', icon: <IconInput/> },
    { value: 'form', label: '表单', icon: <IconForm/> },
    { value: 'button', label: '按钮', icon: <IconButton/> },
    { value: 'table', label: '表格', icon: <IconTable/> },
  ]

  const [loading, setLoading] = useState(false)
  const [list, setList] = useState(initList)

  const [value, setValue] = useState('')

  const handleSearch = (inputValue) => {
    setLoading(true)
    setTimeout(() => {
      setList(initList.filter(item => item.value.includes(inputValue)))
      setLoading(false)
    }, 1000)
  }

  const handleSelect = (value) => {
    setValue(value)
  }

  const renderItem = (item) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ fontSize: 32 }}>{item.icon}</div>
        <div style={{ marginLeft: 12 }}>
          <p>{item.value}</p>
          <p>{item.label}</p>
        </div>
      </div>
    )
  }

  const renderSelectedItem = (item) => {
    // 注意：与其他组件如Select不同，此处只能返回String类型的值，不能返回ReactNode
    return item.value
  }

  return (
    <AutoComplete
      size="large"
      position='bottom'
      // disabled
      showClear
      validateStatus="warning"
      data={list}
      style={{ width: 250 }}
      prefix={<IconSearch/>}
      onSearch={handleSearch}
      loading={loading}
      renderItem={renderItem}
      renderSelectedItem={renderSelectedItem}
      onSelect={handleSelect}
      emptyContent={
        <Empty style={{ padding: 12, width: 300 }}
               image={<IllustrationNoContent style={{ width: 150, height: 150 }}/>}
               description={'暂无内容'}/>
      }
      autoFocus
      autoAdjustOverflow
    ></AutoComplete>
  )
}