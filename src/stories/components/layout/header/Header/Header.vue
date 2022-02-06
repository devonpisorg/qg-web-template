<script>
import { parseHtml } from '../../../../utils.js';
import Template from '../../../../../../src/assets/_project/_blocks/layout/header/header.html';
import MobileMenuButton from '../MobileMenuButton/MobileMenuButton.vue';
import CoatOfArms from '../CoatOfArms/CoatOfArms.vue';
import SiteSearch from '../SiteSearch/SiteSearch.vue';
import PortalLinks from '../PortalLinks/PortalLinks.vue';
import SiteNav from '../SiteNav/SiteNav.vue';
import HeaderLocation from '../HeaderLocation/HeaderLocation.vue';

export default {
  name: 'qg-header',
  components: {
    'qg-mobile-menu-button': MobileMenuButton,
    'qg-coat-of-arms': CoatOfArms,
    'qg-site-search': SiteSearch,
    'qg-portal-links': PortalLinks,
    'qg-site-nav': SiteNav,
    'qg-header-location': HeaderLocation,
  },
  template: parseHtml(Template),
};
</script>
