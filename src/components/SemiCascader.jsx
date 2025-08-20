import { Cascader, Typography } from '@douyinfe/semi-ui'

export const SemiCascader = () => {
  const { Text } = Typography
  const treeData = [
    {
      label: '浙江省',
      value: 'zhejiang',
      children: [
        {
          label: '杭州市',
          value: 'hangzhou',
          children: [
            {
              label: '西湖区',
              value: 'xihu',
            },
            {
              label: '萧山区',
              value: 'xiaoshan',
            },
            {
              label: '临安区',
              value: 'linan',
            },
          ],
        },
        {
          label: '宁波市',
          value: 'ningbo',
          children: [
            {
              label: '海曙区',
              value: 'haishu',
            },
            {
              label: '江北区',
              value: 'jiangbei',
            }
          ]
        },
      ],
    }
  ]

  const slotStyle = {
    height: '36px',
    display: 'flex',
    padding: '0 32px',
    alignItems: 'center',
    cursor: 'pointer',
    borderTop: '1px solid var(--semi-color-border)'
  }

  return (
    <Cascader
      style={{ width: 300 }}
      treeData={treeData}
      placeholder="请选择所在地区"
      filterTreeNode
      treeNodeFilterProp="label"
      filterLeafOnly={false}
      filterSorter={(first, second, inputValue) => {
        const firstData = first[first.length - 1]
        const lastData = second[second.length - 1]
        if (firstData.label === inputValue) {
          return -1
        } else if (lastData.label === inputValue) {
          return 1
        } else {
          return firstData.label < lastData.label ? -1 : 1
        }
      }}
      // maxTagCount={1}
      // max={1}
      changeOnSelect
      displayProp="label"
      // multiple
      // displayRender={list => '已选择：' + list.join(' -> ')}
      // displayRender={(item, idx) => (
      //   <Tag
      //     style={{ marginRight: 4 }}
      //     color='white'
      //     key={`${idx}-${item.data.label}`}
      //   >
      //     {item.data.label}
      //   </Tag>
      // )}
      separator=" -x-"
      // disabled
      showNext="hover"
      bottomSlot={
        <div style={slotStyle}>
          <Text>找不到相关选项？</Text>
          <Text link>去新建</Text>
        </div>
      }
      topSlot={
        <div style={slotStyle}>
          <Text>找不到相关选项？</Text>
          <Text link>去新建</Text>
        </div>
      }
      multiple
      autoMergeValue={false}
      leafOnly
      // checkRelation='unRelated'
    />
  )
}