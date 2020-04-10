<template>
  <div class="notice" :style="propsStyle"
        @mouseenter="clearTimer"
        @mouseleave="createTimer">
    <p>{{ content }}</p>
    <div @click="closeNotice">{{ closed }} ×</div>
  </div>
</template>

<script>
export default {
  name: 'notice',
  props: {
    content: {
      type: String,
      default: 'content default'
    },
    closed: {
      type: String,
      default: 'closed!'
    }
  },
  computed: {
    propsStyle () {
      return {}
    }
  },
  methods: {
    clearTimer () {},
    closeNotice () {},
    createTimer () {}
  }
}
</script>

<style lang="scss">
.notice {
  padding: 5px;
  width: 200px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(102, 11, 57, 0.945);
  color: #fff;
  margin-top: 10px;
  div:hover {
    cursor: pointer;
  }
}
</style>
