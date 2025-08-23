import { Progress } from '@douyinfe/semi-ui'

export function SemiProcess() {
  return (
    <div style={{ padding: 30, height: 100, width: 100, display: 'flex' }}>
      <Progress
        percent={77}
        // stroke="var(--semi-color-warning)"
        size="large"
        showInfo
        // direction="horizontal"
        // direction="vertical"
        style={{ width: '100px' }}
        type="circle"
        format={per => {
          return per + ' Days'
        }}
        stroke={[
          { percent: 20, color: 'red' },
          { percent: 40, color: 'orange-9' },
          { percent: 60, color: 'light-green-8' },
          { percent: 80, color: 'hsla(125, 50%, 46% / 1)' }
        ]}
      />
    </div>
  )
}