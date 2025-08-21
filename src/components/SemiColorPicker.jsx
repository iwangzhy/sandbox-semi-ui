import { Button, ColorPicker, Divider } from '@douyinfe/semi-ui'
import { IconCollapse } from '@douyinfe/semi-icons-lab'

export const SemiColorPicker = () => {
  return (
    <>
      <div>
        <ColorPicker
          alpha
          onChange={value => {console.log(value)}}
          usePopover
        />
        <Divider>自定义 trigger</Divider>
        <ColorPicker
          alpha
          usePopover
        >
          <Button>Trigger</Button>
        </ColorPicker>
        <Divider></Divider>
        <ColorPicker
          alpha
          defaultValue={ColorPicker.colorStringToValue("rgb(57,197,187)")}
          eyeDropper
          topSlot={<div>top slot</div>}
          bottomSlot={<div>bottom slot</div>}
        />
      </div>
    </>
  )
}