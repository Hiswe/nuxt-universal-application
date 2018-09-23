// this can break your application if running on the server
requestAnimationFrame(() => {
  document.body.classList.add(`client-side-only`)
})
