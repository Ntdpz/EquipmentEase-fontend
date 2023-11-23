import colors from 'vuetify/es5/util/colors';
const axios = require('axios');

export default {
  generate: {
    routes: async function () {
      const response = await axios.get('https://peach-bat-tutu.cyclic.app/products');
      const products = response.data;
      return products.map(product => `/product/${product._id}`);
    },
  },
  ssr: false,  // Server-Side Rendering is disabled
  head: {
    // Metadata for the head of the HTML document
    title: 'Equipment Ease',
    htmlAttrs: {
      lang: 'en',
    },
    // ... other meta tags and link tags
  },
  css: [],  // No additional stylesheets are specified
  
  components: true,  // Automatic import of components is enabled
  buildModules: [
    '@nuxtjs/vuetify',  // Vuetify is used as a build module
  ],
  modules: [
    '@nuxtjs/axios',  // Axios module is added for HTTP requests
  ],
  axios: {
    baseURL: 'https://peach-bat-tutu.cyclic.app/',  // Base URL for Axios requests
  },
  vuetify: {
    // Vuetify configuration, including custom variables and theme settings
  },
  build: {},  // Empty build configuration
  router: {
    routes: [
      {
        path: '/create-customer',
        component: '~/pages/createCustomer.vue',  // A custom page component is specified
      },
      // Add other routes as needed
    ],
  },
};
