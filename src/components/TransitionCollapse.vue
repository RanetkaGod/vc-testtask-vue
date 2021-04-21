<template>
  <transition
      enter-active-class="enter-active"
      leave-active-class="leave-active"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
  >
    <slot/>
  </transition>
</template>

<script>
export default {
  name: "TransitionCollapse",
  methods: {
    beforeEnter(element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.maxHeight = '0px';
        }
        element.style.display = null;
      });
    },
    enter(element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.maxHeight = `${element.scrollHeight}px`;
        });
      });
    },
    afterEnter(element) {
      element.style.maxHeight = null;
    },
    beforeLeave(element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.maxHeight = `${element.offsetHeight}px`;
        }
      });
    },
    leave(element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.maxHeight = '0px';
        });
      });
    },
    afterLeave(element) {
      element.style.maxHeight = null;
    },
  }
}

</script>

<style scoped>
.enter-active,
.leave-active {
  overflow: hidden;
  transition: max-height .6s ease;
}
</style>