import { Button, TimePicker } from '@douyinfe/semi-ui'
import { useEffect, useState } from 'react'
import * as dateFns from 'date-fns'

export function SemiTimePicker() {
  const [value, setValue] = useState(new Date())

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(new Date())
    }, 1000)
    return () => clearTimeout(timeout)
  }, [value])

  return (
    <>
      <TimePicker
        scrollItemProps={{
          mode: 'wheel',
          cycled: true
        }}
        // format="a HH时mm分"
        panelHeader={<Button type="danger">Close</Button>}
        panelFooter={<Button type="primary">Enter</Button>}
        // open
        // disabled
        // hourStep={2}
        // minuteStep={10}
        // secondStep={20}
        // use12Hours
        // type="timeRange"
        value={value}
        onChange={(value) => setValue(value)}
        triggerRender={() => {
          return (
            <Button>{value ? dateFns.format(value, 'HH:mm:ss') : '选择时间'}</Button>
          )
        }}
      />
    </>
  )
}