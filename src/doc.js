'use strict';
import vue_components from './index.js';
let Vue = require('vue');
let VueRouter = require('vue-router');
Vue.use(vue_components());
Vue.use(VueRouter);

let router = new VueRouter();


let App = Vue.extend({
  events: {
    link (pathName, params, path) {
      if (path) {
        return router.go(path)
      }
      router.go({
        name: pathName,
        params: params || {}
      })
    }
  }
});

router.map({
  '/': {
    name: "root",
    component: require("./pages/root.vue"),
    subRoutes: {
      "home": {
        name: "home",
        component: require("./pages/home.vue")
      },
      "radio": {
        name: "radio",
        component: require("./pages/radio.vue")
      },
      "checkbox": {
        name: "checkbox",
        component: require("./pages/checkbox.vue")
      },
      "select-multi": {
        name: "select-multi",
        component: require("./pages/select-multi.vue")
      },
      "select-single": {
        name: "select-single",
        component: require("./pages/select-single.vue")
      },
      "switch-toggle": {
        name: "switch-toggle",
        component: require("./pages/switch-toggle.vue")
      },
      "table": {
        name: "table",
        component: require("./pages/table.vue")
      },
      "avatar": {
        name: "avatar",
        component: require("./pages/avatar.vue")
      },
      "dialog": {
        name: "dialog",
        component: require("./pages/dialog.vue")
      }
    }
  }
});

router.redirect({
  "/": "home"
});

router.start(App, 'body');
