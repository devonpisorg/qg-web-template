<script>
import { parseHtml } from '../../../../utils.js';
import Template from '../../../../../../src/assets/_project/_blocks/layout/header/site-search.html';
import SiteSearchForm from '../../SiteSearchForm/SiteSearchForm.vue';

export default {
  name: 'qg-site-search',
  components: { 'qg-site-search-form': SiteSearchForm },
  template: parseHtml(Template),
};
</script>
