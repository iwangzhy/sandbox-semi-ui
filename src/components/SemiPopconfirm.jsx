import { Button, Popconfirm, Toast } from '@douyinfe/semi-ui'

export function SemiPopconfirm() {
  return (
    <div style={{ padding: 30 }}>
      <Popconfirm
        title="确认保存？"
        content="不可逆"
        // onConfirm={() => {
        //   Toast.success('success')
        // }}
        onCancel={() => {
          Toast.warning('cancel')
        }}

        onConfirm={() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log('resolve, close popconfirm')
              resolve()
            }, 2000)
          })

        }}
      >
        <Button>保存</Button>
      </Popconfirm>
    </div>
  )
}