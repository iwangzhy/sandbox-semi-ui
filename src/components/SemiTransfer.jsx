import { Transfer } from '@douyinfe/semi-ui'

export function SemiTransfer() {
  const data = Array.from({ length: 100 }, (v, i) => {
    return {
      label: `选项名称 ${i}`,
      value: i,
      disabled: false,
      key: `key-${i}`,
    }
  })
  const groupdata = [
    {
      title: '类别A',
      children: [
        { label: 'A-1', value: 1, disabled: false, key: 1 },
        { label: 'A-2', value: 2, disabled: false, key: 2 },
        { label: 'A-3', value: 3, disabled: false, key: 3 },
      ],
    },
    {
      title: '类别B',
      children: [
        { label: 'B-1', value: 4, disabled: false, key: 4 },
        { label: 'B-2', value: 5, disabled: false, key: 5 },
        { label: 'B-3（disabled）', value: 6, disabled: true, key: 6 },
      ],
    },
    {
      title: '类别C',
      children: [
        { label: 'C-1', value: 7, disabled: false, key: 7 },
        { label: 'C-2', value: 8, disabled: false, key: 8 },
        { label: 'C-3', value: 9, disabled: false, key: 9 },
        { label: 'C-4', value: 10, disabled: false, key: 10 },
        { label: 'C-5', value: 11, disabled: false, key: 11 },
        { label: 'C-6', value: 12, disabled: false, key: 12 },
        { label: 'C-7', value: 13, disabled: false, key: 13 },
      ],
    },
  ]

  const treeData = [
    {
      label: 'Asia',
      value: 'Asia',
      key: '0',
      children: [
        {
          label: 'China',
          value: 'China',
          key: '0-0',
          children: [
            {
              label: 'Beijing',
              value: 'Beijing',
              key: '0-0-0',
            },
            {
              label: 'Shanghai',
              value: 'Shanghai',
              key: '0-0-1',
            },
            {
              label: 'Chengdu',
              value: 'Chengdu',
              key: '0-0-2',
            },
          ],
        },
        {
          label: 'Japan',
          value: 'Japan',
          key: '0-1',
          children: [
            {
              label: 'Osaka',
              value: 'Osaka',
              key: '0-1-0',
            },
          ],
        },
      ],
    },
    {
      label: 'North America',
      value: 'North America',
      key: '1',
      children: [
        {
          label: 'United States',
          value: 'United States',
          key: '1-0',
        },
        {
          label: 'Canada',
          value: 'Canada',
          key: '1-1',
        },
        {
          label: 'Mexico',
          value: 'Mexico',
          disabled: true,
          key: '1-2',
        },
        {
          label: 'Cuba',
          value: 'Cuba',
          key: '1-3',
        },
      ],
    },
  ]
  return (
    <>
      <Transfer
        style={{ display: 'none' }}
        dataSource={data}
        onChange={(values, items) => {
          console.log(items)
        }}
        type="list"
        filter={(val, item) => {
          return item.label.includes(`${val}${val}`)
        }}
        // renderSelectedItem={(item) => (
        //   <Avatar size="small">
        //     {item.label}
        //   </Avatar>
        // )}
        draggable
      ></Transfer>
      <Transfer
        style={{ display: 'none' }}
        dataSource={groupdata}
        onChange={(values, items) => {
          console.log(values, items)
        }}
        type="groupList"
        disabled
      ></Transfer>
      <Transfer
        dataSource={treeData}
        onChange={(values, items) => {
          console.log(items)
        }}
        type="treeList"
        draggable
      ></Transfer>
    </>
  )
}