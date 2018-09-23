<template lang="pug">
nua-wrapper
  nua-title {{ $t(`title`, {id}) }}
  nua-list(:items="bars")
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import List from '~/components/list'

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
  components: {
    'nua-list': List,
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
