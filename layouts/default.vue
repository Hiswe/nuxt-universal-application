<template lang="pug">
  main(role="main")
    nav.navigation
      nuxt-link.navigation__link(to="/") {{ $t(`home`) }}
      nuxt-link.navigation__link(to="/foo") {{ $t(`foo`) }}
      nuxt-link.navigation__link(to="/bar/baz") {{ $t(`bar`) }}
    nuxt
</template>

<style lang="scss" scoped>
.navigation {
  height: 50px;
  border-bottom: 1px solid grey;
  display: flex;

  &__link {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: currentColor;
    text-decoration: none;

    &.nuxt-link-exact-active {
      color: var(--color-vue);
      pointer-events: none;
    }
  }
}
</style>
