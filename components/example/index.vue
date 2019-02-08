<template>
  <div
    class="example"
    :class="{
      [`example--${status}`] : status
    }"
    @click="$emit('egClick', $event)"
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
