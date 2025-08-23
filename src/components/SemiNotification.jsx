import { Button, Notification } from '@douyinfe/semi-ui'
import Text from '@douyinfe/semi-ui/lib/es/typography/text'
import { IconLikeHeart } from '@douyinfe/semi-icons'

export function SemiNotification() {
  return (
    <div style={{ padding: 30 }}>
      <Button
        onClick={() => {
          const id = Notification.success({
            title: 'hi, semi-ui',
            // content: 'this is content',
            duration: 0,
            position: 'topRight',
            theme: 'light',
            content: (
              <>
                <div>Hi, semi-ui</div>
                <div style={{ marginTop: 8 }}>
                  <Text link>详情</Text>
                  <Text link style={{ marginLeft: 10 }}>稍后再看</Text>
                </div>
              </>
            ),
            icon: (<IconLikeHeart/>)
          })
          setTimeout(() => {
            Notification.error({
              title: 'boom!',
              content: 'warning....',
              duration: 10,
              id
            })
          }, 1000)

        }}
      >
        Display Notification
      </Button>
    </div>
  )
}