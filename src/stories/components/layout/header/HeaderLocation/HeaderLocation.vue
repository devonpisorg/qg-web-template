<script>
import { parseHtml } from '../../../../utils.js';
import Template from '../../../../../../src/assets/_project/_blocks/layout/header/header-location.html';
import Location from '../../location/Location/Location.vue';

export default {
  name: 'qg-header-location',
  components: { 'qg-location': Location },
  template: parseHtml(Template),
};
</script>
