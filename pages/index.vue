<template lang="pug">
nua-wrapper
  nua-title {{ $t(`title`) }}
  p.text
    | {{$t(`subtitle`)}}
    |
    a.link(href="https://nuxtjs.org/") {{$t(`nuxtLink`)}}
  p.text
    | {{$t(`description`)}}
    |
    a.link(href="https://hiswe.github.io/2018/12-vue-with-nuxt/") {{$t(`blogPost`)}}
</template>

<style lang="scss" scoped>
.text {
  text-align: center;
}
.link {
  color: var(--color-vue);

  &:hover {
    text-decoration: none;
  }
}
</style>

<script>
const i18n = {
  messages: {
    en: {
      title: `homepage`,
      subtitle: `this is a`,
      nuxtLink: `Nuxt Universal Application`,
      description: `It's a demo for`,
      blogPost: `this blog post`,
    },
  },
}
export default {
  i18n,
}
</script>
