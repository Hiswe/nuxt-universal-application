<template lang="pug">
nua-wrapper
  nua-title {{ $t(`title`, {id}) }}
</template>

<script>
const i18n = {
  messages: {
    en: {
      title: `page bar: {id}`,
    },
  },
}
export default {
  i18n,
  computed: {
    id() {
      return this.$route.params.id
    },
  },
}
</script>
