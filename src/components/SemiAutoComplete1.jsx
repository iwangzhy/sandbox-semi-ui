import { useState } from 'react'
import { AutoComplete, Divider } from '@douyinfe/semi-ui'
import { IconSearch } from '@douyinfe/semi-icons'
import Text from '@douyinfe/semi-ui/lib/es/typography/text'

export function SemiAutoComplete1() {
  const [stringData, setStringData] = useState([])
  const [value, setValue] = useState('')
  const handleStringSearch = (value) => {
    let result
    if (value) {
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`)
    } else {
      result = []
    }
    setStringData(result)
  }

  const handleChange = (value) => {
    console.log('onChange', value)
    setValue(value)
  }

  return (
    <>
      <Divider>基本用法</Divider>
      <Text>请输入邮箱：</Text>
      <AutoComplete
        data={stringData}
        value={value}
        // showClear
        prefix={<IconSearch/>}
        placeholder="搜索...."
        onSearch={handleStringSearch}
        onChange={handleChange}
        // size={{ width: 200 }}
      />
    </>
  )
}