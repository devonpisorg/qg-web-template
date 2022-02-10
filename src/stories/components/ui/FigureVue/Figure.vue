<template>
<div class="clearfix">
  <figure :class="figureClasses">
    <a v-if="enlargeSrc" :href="enlargeSrc" :data-fancybox="fancyboxId">
      <span>View larger image</span>
      <img :src="src" :alt="alt" :class="imgClasses"/>
      <img class="figure__expand-icon" src="assets/v4/latest/images/Expand.svg" alt="Enlarge image">
    </a>
    <img v-if="!enlargeSrc" :src="src" :alt="alt" :class="imgClasses"/>
    <figcaption v-if="caption || credits">
      {{caption}}
      <div class="figure-credits" v-if="credits">{{credits}}</div>
    </figcaption>
  </figure>
  {{description}}
</div>
</template>

<script>
import { reactive, computed } from 'vue';

export const figureImgAlign = ['left', 'center', 'right'];

export default {
  name: 'qg-figure',

  props: {
    isThumbnail: {
      type: Boolean,
    },
    description: {
      type: String,
    },
    caption: {
      type: String,
    },
    credits: {
      type: String,
    },
    alt: {
      type: String,
    },
    enlargeSrc: {
      type: String,
    },
    src: {
      type: String,
    },
    fancyboxId: {
      type: String,
    },
    imgAlign: {
      type: String,
      validator: function (value) {
        return figureImgAlign.indexOf(value) !== -1;
      },
      default: 'center',
    },
  },

  setup(props) {
    const { imgAlign, isThumbnail } = reactive(props);
    return {
      figureClasses: computed(() => ({
        'qg-fig': true,
        'pull-right': imgAlign === 'right',
        'pull-left': imgAlign === 'left',
      })),
      imgClasses: computed(() => ({
        'img-thumbnail': isThumbnail,
      })),
    };
  },
};
</script>
