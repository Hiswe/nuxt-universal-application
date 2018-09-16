<template lang="pug">
nua-wrapper
  nua-title {{ $t(`title`) }}
</template>

<script>
const i18n = {
  messages: {
    en: {
      title: `foo page`,
    },
  },
}
export default {
  i18n,
}
</script>
