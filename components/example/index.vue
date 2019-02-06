<template>
  <div
    class="example"
    :class="{
      [`example--${status}`] : status
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Example",
  props: {
    status: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
