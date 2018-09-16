<template lang="pug">
nua-wrapper
  nua-title {{ $t(`title`) }}
  ul
    li(v-for="foo in foos" :key="foo.id") {{ foo.text }}
</template>

<script>
import { mapState, mapMutations } from 'vuex'

const i18n = {
  messages: {
    en: {
      title: `foo page`,
    },
  },
}
export default {
  i18n,
  fetch({ store }) {
    return store.dispatch(`foo/load`)
  },
  computed: {
    ...mapState({
      foos: state => state.foo.list,
    }),
  },
}
</script>
