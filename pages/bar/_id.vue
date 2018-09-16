<template lang="pug">
nua-wrapper
  nua-title {{ $t(`title`, {id}) }}
  ul
    li(v-for="bar in bars" :key="bar.id") {{ bar.text }}
</template>

<script>
import { mapState, mapMutations } from 'vuex'

const i18n = {
  messages: {
    en: {
      title: `page bar: {id}`,
    },
  },
}
export default {
  i18n,
  fetch({ store }) {
    return store.dispatch(`bar/load`)
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    ...mapState({
      bars: state => state.bar.list,
    }),
  },
}
</script>
