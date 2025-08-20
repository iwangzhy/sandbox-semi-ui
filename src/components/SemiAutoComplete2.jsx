import { useState } from 'react'
import { AutoComplete, Avatar, Divider } from '@douyinfe/semi-ui'
import { IconSearch } from '@douyinfe/semi-icons'

export function SemiAutoComplete2() {
  const color = ['amber', 'indigo', 'cyan']
  const [data, setData] = useState([
    { name: '夏可漫', email: 'xiakeman@example.com', abbr: 'XK', color: 'amber' },
    { name: '申悦', email: 'shenyue@example.com', abbr: 'SY', color: 'indigo' },
    { name: '曲晨一', email: 'quchenyi@example.com', abbr: 'CY', color: 'blue' },
    { name: '文嘉茂', email: 'wenjiamao@example.com', abbr: 'JM', color: 'cyan' },
  ])

  const [value, setValue] = useState('')

  const handleStringSearch = (value) => {
    let result
    if (value) {
      result = data.map(item => {
        return { ...item, value: item.name, label: item.email }
      })
    } else {
      result = []
    }
    setData(result)
  }
  const handleChange = (value) => {
    console.log('onChange', value)
    setValue(value)
  }

  const renderOption = (item) => {
    let optionStyle = {
      display: 'flex',
    }
    return (
      <>
        <Avatar color={item.color} size="small">
          {item.abbr}
        </Avatar>
        <div style={{ marginLeft: 4 }}>
          <div style={{ fontSize: 14, marginLeft: 4 }}>{item.name}</div>
          <div style={{ marginLeft: 4 }}>{item.email}</div>
        </div>
      </>
    )
  }

  return (
    <>
      <Divider>自定义候选项</Divider>
      <AutoComplete
        data={data}
        value={value}
        showClear
        prefix={<IconSearch/>}
        placeholder="搜索...."
        onSearch={handleStringSearch}
        onChange={handleChange}
        renderItem={renderOption}
        renderSelectedItem={option => option.email}
        size={{ width: 280 }}
      />
    </>
  )
}