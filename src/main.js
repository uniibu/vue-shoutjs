import Shouter from './Shouter.vue';
import Shouted from './js/shouted';
import defaults from './js/default';

const ShoutJs = {
  install(Vue, options) {
    if (typeof options.velocity === 'undefined') {
      throw new Error('Missing velocity-animate module. please add to options');
    }
    this.defaults = Object.assign({}, defaults, options);
    const shout = new Shouted(this.defaults);
    Vue.component('vue-shout', Shouter);
    // eslint-disable-next-line no-param-reassign, no-multi-assign
    Vue.shout = Vue.prototype.$shout = shout;
  },
};
// register plugin if it is used via cdn or directly as a script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.ShoutJs = ShoutJs;
}

export default ShoutJs;
