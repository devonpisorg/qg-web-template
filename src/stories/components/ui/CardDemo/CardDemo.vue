<template>
  <article :class="classes">
    <div class="content">
      <slot></slot>
    </div>
  </article>
</template>

<script>
import { reactive, computed } from 'vue';

export const cardDemoTheme = ['light', 'dark', 'pink'];

export default {
  name: 'qg-card-demo',

  props: {
    theme: {
      type: String,
      validator: function (value) {
        return cardDemoTheme.indexOf(value) !== -1;
      },
      default: 'light',
    },
  },

  setup(props) {
    const { theme } = reactive(props);
    return {
      classes: computed(() => ({
        'qg-card col-12 col-sm-6 col-lg-4 qg-card-demo': true,
        [`qg-card__${theme}-theme`]: true,
      })),
    };
  },
};
</script>
