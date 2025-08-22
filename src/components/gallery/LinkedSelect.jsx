import { Select } from '@douyinfe/semi-ui'
import { useState } from 'react'

export function LinkedSelect() {
  const [province, setProvince] = useState('四川')

  return (<>
    <Select value={province} onChange={(p) => setProvince(p)}>
      {
        provinces.map(item => (
          <Select.Option key={item} value={item}>{item}</Select.Option>
        ))
      }
    </Select>
    <Select>
      {
        maps[province].map(item => (
          <Select.Option key={item} value={item}>{item}</Select.Option>
        ))
      }
    </Select>
  </>)
}

const maps = {
  四川: ['成都', '都江堰'], 广东: ['广州', '深圳', '东莞'],
}

const provinces = ['四川', '广东']