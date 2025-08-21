import { Button, DatePicker, Divider } from '@douyinfe/semi-ui'
import * as dateFns from 'date-fns'
import { IconClock } from '@douyinfe/semi-icons'

export function SemiDatePicker() {
  const presets = [
    {
      text: 'Today',
      start: new Date(),
      end: new Date(),
    },
    {
      text: 'Tomorrow',
      start: new Date(new Date().valueOf() + 1000 * 3600 * 24),
      end: new Date(new Date().valueOf() + 1000 * 3600 * 24),
    },
  ]

  return (
    <>
      <Divider>05.带快捷方式的日期选择</Divider>
      <DatePicker
        type="dateTime"
        presets={presets}
        format="yyyy年MM月dd日 HH:mm:ss"
        triggerRender={() => (
          <Button theme={'light'} icon={<IconClock/>} iconPosition={'right'}>
            yyyy-MM-dd
          </Button>
        )}
      />

      <Divider>04.周选择</Divider>
      <DatePicker
        type="dateRange"
        weekStartsOn={0}
        startDateOffset={date => dateFns.startOfWeek(date)}
        endDateOffset={date => dateFns.endOfWeek(date)}
        onChange={(date, dateStr) => {
          console.log(date)
          console.log(dateStr)
        }}
      />
      <Divider>03.内嵌输入框</Divider>
      <DatePicker
        type="dateTimeRange"
        syncSwitchMonth={false}
        insetInput
        onPanelChange={(date, dateStr) => {
          console.log(date)
          console.log(dateStr)
        }}
      />

      <Divider>02.范围</Divider>
      <DatePicker
        type="dateTimeRange"
        onChange={(date, dateStr) => {
          console.log(date)
          console.log(dateStr)
        }}
        defaultPickerValue={[new Date('2022-08-08 00:00'), new Date('2022-08-09 12:00')]}
        // value={[new Date('2022-08-08 00:00'), new Date('2022-08-09 12:00')]}
      />
      <Divider>01.基本使用</Divider>
      <DatePicker
        onChange={(date, dateStr) => {console.log(dateStr)}}
        // 控制日期面板的尺寸
        density="compact"
        multiple
        type="dateTime"
        timePickerOpts={{
          scrollItemProps: {
            mode: 'wheel',
            cycled: true
          }
        }}
      />


    </>
  )
}