<template>
  <component :is="is" :class="classes" :disabled="is === `a` ? undefined : disabled">
    <slot>Button label</slot>
  </component>
</template>

<script>
import { reactive, computed } from 'vue';

export const buttonIs = ['a', 'button', 'input'];
export const buttonVariants = ['default', 'primary', 'secondary', 'link', 'success', 'info', 'warning', 'danger', 'outline-dark', 'outline-light'];
export const buttonSizes = ['xs', 'sm', 'md', 'lg'];

export default {
  name: 'qg-button',

  props: {
    is: {
      type: String,
      validator: function (value) {
        return buttonIs.indexOf(value) !== -1;
      },
      default: 'button',
    },
    variant: {
      type: String,
      validator: function (value) {
        return buttonVariants.indexOf(value) !== -1;
      },
      default: 'default',
    },
    size: {
      type: String,
      validator: function (value) {
        return buttonSizes.indexOf(value) !== -1;
      },
      default: 'md',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isFocus: {
      type: Boolean,
      default: false,
    },
    isBlock: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const { isFocus, disabled, isActive, isBlock, variant, size } = reactive(props);
    return {
      classes: computed(() => ({
        'btn': true,
        'active': isActive,
        'focus': isFocus,
        'btn-block': isBlock,
        'disabled': disabled,
        [`btn-${variant}`]: true,
        [`btn-${size}`]: true,
      })),
    };
  },
};
</script>
