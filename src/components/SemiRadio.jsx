import { Divider, Radio, RadioGroup } from '@douyinfe/semi-ui'
import { useState } from 'react'

export function SemiRadio() {
  const [value, setValue] = useState()
  return (
    <>
      <Radio
        name="name"
        extra="辅助文本辅助文本辅助文本辅助文本辅助文本辅助文本辅助文本辅助文本辅助文本辅助文本辅助文本辅助文本辅助文本辅助文本辅助文本辅助文本辅助文本辅助文本"
        // disabled
        mode="advanced"
      >单选</Radio>
      <Divider> </Divider>
      <RadioGroup value={value}
                  onChange={(e) => {
                    console.log(e.target.value)
                    setValue(e.target.value)
                  }}
                  direction="vertical"
                  type="purecard" buttonSize="large"
      >
        <Radio value="1" mode="advanced" extra="辅助文本">A</Radio>
        <Radio value="2">B</Radio>
        <Radio value="3">C</Radio>
        <Radio value="4">D</Radio>
      </RadioGroup>
    </>
  )
}