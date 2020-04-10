import Vue from 'vue'
import baseNoticeOpts from './notice.vue'

const extendsNoticeOpts = {
  extends: baseNoticeOpts,
  data () {
    return {
      verticalOffset: 0,
      timer: ''
    }
  },
  computed: {
    propsStyle () {
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.$data.verticalOffset}px`
      }
    }
  },
  mounted () {
    this.createTimer()
  },
  methods: {
    createTimer () {
      this.timer = setTimeout(() => {
        this.$emit('closed', this)
      }, 3000)
    },

    clearTimer () {
      clearTimeout(this.timer)
    },

    closeNotice () {
      this.$emit('closedNow', this)
    }
  }
}

const ExtendsNotice = Vue.extend(extendsNoticeOpts)
export default ExtendsNotice
