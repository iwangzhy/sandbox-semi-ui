import { TreeSelect } from '@douyinfe/semi-ui'
import { IconSelect } from '@douyinfe/semi-icons-lab'

export function SemiTreeSelect() {
  const treeData = [
    {
      label: '亚洲',
      value: 'Asia',
      key: '0',
      children: [
        {
          label: '中国',
          value: 'China',
          key: '0-0',
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
  return (
    <div style={{ padding: 30 }}>
      <TreeSelect
        arrowIcon={(<IconSelect/>)}
        style={{ width: 250 }}
        treeData={treeData}
        multiple
        maxTagCount={2}
        filterTreeNode
        showFilteredOnly
        searchPosition="dropdown"
        showClear
        size="default"
        expandAll
        showLine
      />
    </div>
  )
}