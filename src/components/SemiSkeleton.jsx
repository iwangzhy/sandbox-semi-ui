import { Skeleton, Table } from '@douyinfe/semi-ui'

export function SemiSkeleton() {
  return (
    <>
      <Skeleton
        placeholder={
          (<div>
            <Skeleton.Image style={{ width: 200, height: 150 }}/>
            <Skeleton.Title style={{ width: 120, marginTop: 10 }}/>
            <Skeleton.Paragraph rows={1} style={{ width: 80, marginBottom: 10 }}/>
            <Skeleton.Title style={{ width: 120 }}/>
            <Skeleton.Avatar style={{ marginRight: 12 }}/>
            <Skeleton.Title style={{ width: 120 }}/>
            <Skeleton.Paragraph rows={3}/>
            <Skeleton.Button/>
            <Skeleton.Title style={{ width: 120, marginBottom: 12, marginTop: 12 }}/>
            <Skeleton.Paragraph style={{ width: 240 }} rows={3}/>

            <div style={{ position: 'relative' }}>
              <Table
                style={{ backgroundColor: 'var(--semi-color-bg-1)' }}
                // columns={skData.columns}
                // dataSource={skData.dataSource}
                pagination={false}
              />
              <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}></div>
            </div>
            <div>
              <Skeleton.Avatar style={{ marginRight: 12 }}/>
              <div>
                <Skeleton.Title style={{ width: 120, marginBottom: 12, marginTop: 12 }}/>
                <Skeleton.Paragraph style={{ width: 240 }} rows={3}/>
              </div>
            </div>
          </div>)
        }
      >
        <img
          src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/dy.png"
          height="150"
          alt="avatar"
        />
        <h4>Semi UI</h4>

      </Skeleton>
    </>
  )
}