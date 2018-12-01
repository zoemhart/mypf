import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
import Portfolio from '@/components/Portfolio';
import Social from '@/components/Social';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'Welcome' },
    },

    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome,
    },

    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
    },

    {
      path: '/social',
      name: 'Social',
      component: Social,
    },
  ],
});
