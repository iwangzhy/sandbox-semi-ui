import { useState } from 'react'
import { Select } from '@douyinfe/semi-ui'

export function RemoteSearch() {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState(optionList)
  const [value, setValue] = useState('')
  const handleSearch = inputValue => {
    setLoading(true)
    let result = []
    if (inputValue) {
      let length = Math.ceil(Math.random() * 100)
      result = Array.from({ length }, (v, i) => {
        return { value: inputValue + i, label: `相近业务 ${inputValue}${i}`, type: i + 1 }
      })
      setTimeout(() => {
        setLoading(false)
        setList(result)
      }, 1000)
    } else {
      setLoading(false)
      setList(optionList)
    }
  }
  return (
    <>
      <Select
        style={{ width: 300 }}
        filter
        remote
        onChangeWithObject
        multiple
        value={value}
        onSearch={(v) => {
          handleSearch(v)
        }}
        optionList={list}
        emptyContent={null}
        loading={loading}
      >

      </Select>
    </>
  )
}

const optionList = [
  { value: 'douyin', label: '抖音', type: 1 },
  { value: 'xingtu', label: '醒图', type: 2 },
  { value: 'jianying', label: '剪映', type: 3 },
  { value: 'toutiao', label: '今日头条', type: 4 },
]