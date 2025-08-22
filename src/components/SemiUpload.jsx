import { Button, Tooltip, Upload } from '@douyinfe/semi-ui'
import { IconDelete, IconDownload, IconEyeOpened, IconUpload } from '@douyinfe/semi-icons'

export function SemiUpload() {
  return (
    <div style={{
      padding: 10
    }}>
      <Upload
        style={{ display: 'none' }}
        action="https://api.semi.design/upload"
        // showTooltip={true}
        showTooltip={{
          renderTooltip: (content, children) => {
            return <Tooltip content={content} position="bottom">{children}</Tooltip>
          }
        }}
        prompt={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'grey',
              height: '100%',
              marginLeft: 10
            }}
          >
            上传照片
          </div>
        }
        // listType="picture"
        data={{
          role: 'ies',
          time: new Date().getTime()
        }}
        headers={{
          'x-tt-semi': 'semi-upload'
        }}
        // accept="image/*"
        // directory={false}
      >
        <Button icon={<IconUpload/>}>点击上传</Button>
      </Upload>
      <Upload
        // prompt={
        //   <div
        //     style={{
        //       display: 'flex',
        //       alignItems: 'center',
        //       color: 'grey',
        //       height: '100%',
        //       marginLeft: 10
        //     }}
        //   >
        //     上传照片
        //   </div>
        // }
        data={{
          role: 'ies',
          time: new Date().getTime()
        }}
        headers={{
          'x-tt-semi': 'semi-upload'
        }}
        multiple
        minSize={1}
        maxSize={100}
        limit={2}
        renderFileOperation={(fileItem) => (
          <div style={{ display: 'flex', columnGap: 8, padding: '0 8px' }}>
            <Button icon={<IconEyeOpened/>} type="tertiary" theme="borderless" size="small"></Button>
            <Button icon={<IconDownload/>} type="tertiary" theme="borderless" size="small"></Button>
            <Button onClick={e => fileItem.onRemove()} icon={<IconDelete></IconDelete>} type="tertiary"
                    theme="borderless" size="small"></Button>
          </div>
        )}
        draggable
        dragMainText={'点击上传文件或拖拽文件到这里'}
        dragSubText="支持任意类型文件"
      >
        {/*<Button icon={<IconUpload/>}>点击上传</Button>*/}
      </Upload>
    </div>
  )
}