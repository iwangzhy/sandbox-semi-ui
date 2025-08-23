import { Spin } from '@douyinfe/semi-ui'
import { IconLoading } from '@douyinfe/semi-icons'

export function SemiSpin() {
  return (
    <>
      <Spin
        style={{ padding: 30 }}
        size={'large'}
        tip="loading..."
        indicator={<IconLoading/>}
        delay={1000}
      />
    </>
  )
}