import { useCallback, useMemo, useState } from 'react'
import * as dateFns from 'date-fns'
import { IconChevronDown, IconClose } from '@douyinfe/semi-icons'
import { Button, DatePicker } from '@douyinfe/semi-ui'

export const TimePickerButton = () => {
  const [date, setDate] = useState(new Date())
  const formatToken = 'yyyy-MM-dd'
  const onChange = useCallback(date => {
    setDate(date)
  }, [])
  const onClear = useCallback(e => {
    e && e.stopPropagation()
    setDate(null)
  }, [])

  const closeIcon = useMemo(() => {
    return date ? <IconClose onClick={onClear}/> : <IconChevronDown/>
  }, [date])

  return (
    <>
      <DatePicker
        onChange={onChange}
        value={date}
        format={formatToken}
        triggerRender={() => (
          <Button theme={'light'} icon={closeIcon} iconPosition={'right'}>
            {(date && dateFns.format(date, formatToken)) || '请选择日期'}
          </Button>
        )}

      />
    </>
  )
}