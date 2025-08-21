import { InputNumber } from '@douyinfe/semi-ui'

export function SemiInputNumber() {
  return (
    <>
      <label>数字输入框</label>
      <InputNumber
        step={10}
        shiftStep={100}
        defaultValue={0}
        max={1000}
        min={-100}
        // disabled
      />
      <br/>
      <br/>
      <br/>
      <InputNumber
        defaultValue={1}
        precision={1}
        // innerButtons={true}
        hideButtons={true}
        suffix="小时"
        size="large"
      />
      <br/>
      <br/>
      <br/>
      <InputNumber
        defaultValue={100}
        min={0}
        formatter={value => {
          return `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }}
        parser={value => value.replace(/\￥\s?|(,*)/g, '')}
        hideButtons
        suffix="元"
      />

    </>
  )
}