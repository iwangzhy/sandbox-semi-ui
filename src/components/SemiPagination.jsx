import { Pagination } from '@douyinfe/semi-ui'

export function SemiPagination() {
  return (
    <>
      <Pagination
        total={1000}
        pageSize={123}
        showTotal
        defaultCurrentPage={2}
        showSizeChanger
        showQuickJumper
        pageSizeOpts={[1, 3, 19, 100, 123]}
        // size="small"
        // hoverShowPageSelect
        prevText="上"
        nextText="下"
      />
    </>
  )
}