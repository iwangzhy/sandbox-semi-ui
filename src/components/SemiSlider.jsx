import { InputNumber, Slider } from '@douyinfe/semi-ui'
import { useState } from 'react'

export function SemiSlider() {
  const [value, setValue] = useState(30)

  return (
    <div style={{ padding: 50 }}>
      <Slider
        showBoundary
        value={value}
        // onChange={(value) => {
        //   setValue(value)
        // }}
        // defaultValue={[20, 60]} range
        // defaultValue={50} disabled
        // vertical
        tipFormatter={v => `${value}%`}

        step={10}
        marks={{ 0: '0', 10: '10', 20: '20', 30: '30', 40: '40', 50: '50', 100: '100' }}
        handleDot={{ size: 4, code: 'blue' }}
      />
      <InputNumber value={value}
                   onChange={(value) => {
                     setValue(value)
                   }}
      />
    </div>
  )
}