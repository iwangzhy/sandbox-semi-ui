import { LocaleConsumer, LocaleProvider, Pagination } from '@douyinfe/semi-ui'

import en_GB from '@douyinfe/semi-ui/lib/es/locale/source/en_GB'

export function SemiLocale() {
  return (
    <>
      <Pagination total={1000} showTotal showSizeChanger pageSize={100}/>
      <LocaleProvider locale={en_GB}>
        <LocaleConsumer componentName="TimePicker">
          {
            (localeData, localeCode, dateFnsLocale) => (
              <div>{JSON.stringify(localeData)}</div>
            )
          }
        </LocaleConsumer>
      </LocaleProvider>

    </>
  )
}