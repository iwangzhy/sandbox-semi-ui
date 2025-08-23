import { Steps } from '@douyinfe/semi-ui'
import { useState } from 'react'

export function SemiStep() {
  const Step = Steps.Step
  const [current, setCurrent] = useState(0)
  return (
    <>
      <Steps
        style={{ padding: 20 }}
        current={current}
        onChange={(i) => {
          console.log(i)
          setCurrent(i)
        }}
        type="basic"
        hasLine={false}
        size={'small'}
        // direction={'vertical'}
        status="error"
      >
        <Step title="Finished" description="Finished" status={'finish'}/>
        <Step title="In Progress" description="In Progress" status={'process'}/>
        <Step title="Waiting" description="Waiting" status={'wait'}/>
      </Steps>
    </>
  )
}