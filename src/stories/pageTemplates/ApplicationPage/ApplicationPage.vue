<script>
import { parseHtml } from '../../utils';
import Template from './application-page.html';
import Header from '../../components/layout/header/Header/Header.vue';
import Access from '../../components/layout/header/Access/Access.vue';
import BreadcrumbGlobal from '../../components/layout/Breadcrumb/BreadcrumbGlobal.vue';
import Options from '../../components/layout/content/Options/Options.vue'

export default {
  components: {
    'qg-header': Header,
    'qg-access': Access,
    'qg-breadcrumb-global': BreadcrumbGlobal,
    'qg-options': Options,
  },
  name: 'qg-application-page',
  template: parseHtml(Template),
};
</script>
