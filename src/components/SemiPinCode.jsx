import { PinCode } from '@douyinfe/semi-ui'
import { useState } from 'react'

export function SemiPinCode() {
  const [value, setValue] = useState('')
  return (
    <>
      <PinCode
        size="large"
        // defaultValue={'abc123'}
        onComplete={(v) => {
          console.log(v)
        }}
        onChange={(v) => setValue(v)}
        value={value}
        count={10}
        format={/[a-zA-Z0-9]/}
      />
    </>
  )
}