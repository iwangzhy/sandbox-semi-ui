import { Input, Tree } from '@douyinfe/semi-ui'
import { useRef } from 'react'
import { IconHome, IconLikeHeart } from '@douyinfe/semi-icons'

export function SemiTree() {
  const treeData = [
    {
      label: '亚洲',
      value: 'Asia',
      key: '0',
      children: [
        {
          label: (<>中国<IconLikeHeart style={{ color: 'red' }}/></>),
          value: 'China',
          key: '0-0',
          icon: (<IconHome/>),
          children: [
            {
              label: '北京',
              value: 'Beijing',
              key: '0-0-0',
            },
            {
              label: '上海',
              value: 'Shanghai',
              key: '0-0-1',
            },
          ],
        },
      ],
    },
    {
      label: '北美洲',
      value: 'North America',
      key: '1',
    }
  ]
  const style = {
    width: 260,
    height: 420,
    border: '1px solid var(--semi-color-border)'
  }
  const ref = useRef()
  return (
    <>
      <Input showClear onChange={(v) => ref.current.search(v)}/>
      <Tree
        ref={ref}
        treeData={treeData}
        style={style}
        defaultExpandAll
        multiple
        filterTreeNode
        blockNode
        directory
        showLine
      />
    </>
  )
}