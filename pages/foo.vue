<template lang="pug">
nua-wrapper
  nua-title {{ $t(`title`) }}
  nua-list(:items="foos")
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import List from '~/components/list'

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
  components: {
    'nua-list': List,
  },
  computed: {
    ...mapState({
      foos: state => state.foo.list,
    }),
  },
}
</script>
