import { Divider, Switch, Typography } from '@douyinfe/semi-ui'
import { useState } from 'react'

export function SemiSwitch() {
  const { Title } = Typography
  const [open, setOpen] = useState(false)
  return (
    <div style={{ padding: 30, display: 'flex' }}>
      <Switch
        // style={{ width: 100 }}
        onChange={(v) => {
          console.log(v)
          setOpen(v)
        }}
        // defaultChecked
        checked={open}
        // size="small"
        // loading
        // disabled
        checkedText="开" uncheckedText="关"
      />
      <Divider/>
      <Title
        heading={6} style={{ margin: 8 }}
      >
        {open ? '开' : '关'}
      </Title>
      <Switch checked={open}
              onChange={(o) => setOpen(o)}
      />
    </div>
  )
}