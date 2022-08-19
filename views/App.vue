<template>
  <div>
    <h3>—— 列表组件1 ——</h3>
    <list></list>
    <com1></com1>
  </div>
</template>

<script>
import com1 from './com1.vue'
import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    list: defineAsyncComponent(() => import('lib_remote/list')),
    // list: () => import('lib_remote/list'),
    com1,
  },
}
</script>
