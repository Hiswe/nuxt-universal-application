<template lang="pug">
nua-wrapper
  nua-title {{ $t(`title`) }}
</template>

<script>
const i18n = {
  messages: {
    en: {
      title: `homepage`,
    },
  },
}
export default {
  i18n,
}
</script>
