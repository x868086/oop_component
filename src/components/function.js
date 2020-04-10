import ExtendsNotice from './extendsNotice'

const noticeArr = []
let verticalOffset = 0
class Notice {
  // 创建Notice类实例时传入的参数，用来创建notice实例
  constructor (opts) {
    this.opts = opts
  }

  createDom () {
    const { ...rest } = this.opts
    const noticeInstance = new ExtendsNotice({
      // 组件的子类实例化以后只用使用propsData
      propsData: rest
    })

    const operateDomArr = () => {
      noticeArr.forEach(item => {
        // 数组中的元素已经都插入到页面上了，所以能获取到offsetHeight
        // noticeInstance.$el.offsetHeight 无法获取，因为虚拟DOM noticeInstance还没插入到页面上
        verticalOffset += item.$el.offsetHeight + 16
      })
      noticeInstance.$data.verticalOffset = verticalOffset
      domBindEvent()
      noticeArr.push(noticeInstance)
      verticalOffset = 0
    }

    const domBindEvent = () => {
      noticeInstance.$on('closed', (instance) => {
        const removeHeight = instance.$el.offsetHeight
        noticeArr.forEach(item => {
          item.$data.verticalOffset = parseInt(item.$data.verticalOffset) - removeHeight - 16
        })

        document.body.removeChild(instance.$el)
        const idx = noticeArr.indexOf(instance)
        noticeArr.splice(idx, 1)
        instance.$destroy()
      })

      noticeInstance.$on('closedNow', (instance) => {
        const removeHeight = instance.$el.offsetHeight
        const idx = noticeArr.indexOf(instance)
        noticeArr.forEach((item, index, arr) => {
          if (index >= idx) {
            item.$data.verticalOffset = parseInt(item.$data.verticalOffset) - removeHeight - 16
          }
        })

        document.body.removeChild(instance.$el)
        noticeArr.splice(idx, 1)
        instance.$destroy()
      })
    }

    operateDomArr()
    const vmNotcie = noticeInstance.$mount()
    document.body.appendChild(vmNotcie.$el)
    // 虚拟Dom 在插入到页面上以后才能通过$el.offsetHeight获取到真实高度
  }
}

export default Notice
