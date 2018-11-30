import Vue from 'vue';
import Router from 'vue-router';
import Intro from '@/components/Intro';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Social';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro,
    },
    {
      path: '/Intro',
      name: 'Intro',
      component: Intro,
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio,
    },
    {
      path: '/Social',
      name: 'Social',
      component: Social,
    },
  ],
});
