export const state = () => ({
  loading: false,
  list: [],
})

export const mutations = {
  LOADING(state) {
    state.loading = true
  },
  LOADING_DONE(state) {
    state.loading = false
  },
  UPDATE_FOO(state, payload) {
    state.list = payload
  },
}

export const actions = {
  load(context) {
    const { commit } = context
    commit(`LOADING`)
    return this.$axios
      .get(`foo`)
      .then(({ data }) => {
        commit(`UPDATE_FOO`, data)
        commit(`LOADING_DONE`)
      })
      .catch(error => console.log(error))
  },
}
