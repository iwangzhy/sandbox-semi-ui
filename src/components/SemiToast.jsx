import { Button, Toast } from '@douyinfe/semi-ui'

export function SemiToast() {
  return (
    <div style={{ padding: 30 }}>

      <Button
        onClick={() => {
          Toast.info('info')
        }}
      >
        Toast
      </Button>
    </div>
  )
}