<script>
import { parseHtml } from '../../../../utils.js';
import Template from '../../../../../assets/_project/_blocks/layout/location/location.html';
import LocationSharedControls from '../LocationSharedControls/LocationSharedControls.vue';

export default {
  components: { 'qg-location-shared-controls': LocationSharedControls },
  name: 'qg-location',
  template: parseHtml(Template),
};
</script>
