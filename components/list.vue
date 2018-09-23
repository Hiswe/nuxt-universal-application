<template lang="pug">
ul.nua-list
  li.nua-list__item(v-for="item in items" :key="item.id") {{ item.text }}
</template>

<style lang="scss" scoped>
.nua-list {
  max-width: 500px;
  margin: 0 auto;
}
</style>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>


