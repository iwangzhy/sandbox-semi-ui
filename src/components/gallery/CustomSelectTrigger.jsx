import { useState } from 'react'
import { Select, TagInput } from '@douyinfe/semi-ui'
import { IconAppCenter } from '@douyinfe/semi-icons'

export function CustomSelectTrigger() {
  const [valList, setValList] = useState(['douyin', 'ulikecam'])
  const list = [
    { value: 'douyin', label: '抖音' },
    { value: 'ulikecam', label: '轻颜相机' },
    { value: 'jianying', label: '剪映' }
  ]

  const triggerRender = ({ value }) => {
    return (
      <div
        style={{
          minWidth: '112',
          backgroundColor: 'var(--semi-color-primary-light-default)',
          height: 32,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 12,
          borderRadius: 3,
          color: 'var(--semi-color-primary)',
        }}
      >
        <div style={{
          fontWeight: 600,
          flexShrink: 0,
          fontSize: 14,
        }}>
          业务线
        </div>
        <div
          style={{
            margin: 4,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            flexGrow: 1,
            overflow: 'hidden',
          }}
        >
          {value.map(item => item.label).join(' , ')}
          <IconAppCenter style={{ marginRight: 8, flexShrink: 0 }}/>
          {/*<Tag>*/}
          {/*  <Tag size="large" color="cyan" shape="circle" suffixIcon={<IconChevronDown/>}>*/}
          {/*    {value.map(item => item.label).join(' / ')}*/}
          {/*  </Tag>*/}
          {/*</Tag>*/}
        </div>
      </div>
    )
  }
  const [inputVal, setInputVal] = useState('')
  const handleSort = (currentLabels) => {
    const newValue = currentLabels.map(item => list.find((i) => i.label === item).value)
    setValList(newValue)
  }
  const triggerRender1 = ({ value, onSearch, onClear }) => {
    return (
      <div onKeyDown={e => e.stopPropagation()}>
        <TagInput
          draggable
          allowDuplicates={false}
          value={value.map(item => item.label)}
          inputValue={inputVal}
          onInputChange={(word) => {
            onSearch(word)
            setInputVal(word)
          }}
          onChange={handleSort}
          onClear={() => onClear()}
          showClear
        />
      </div>
    )
  }

  return (
    <>
      <Select
        value={valList}
        triggerRender={triggerRender1}
        optionList={list}
        onChange={value => setValList(value)}
        multiple
        filter
        searchPosition="dropdown"
        style={{ width: 240 }}
      ></Select>
    </>
  )
}