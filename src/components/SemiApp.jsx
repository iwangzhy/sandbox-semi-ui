import { Button, Toast } from '@douyinfe/semi-ui'

import 'reset-css'

export default function SemiApp() {
  return (
    <Button onClick={() => Toast.warning({
      content: 'welcome'
    })}>
      Hello Semi
    </Button>
  )
}