'use strict';
let c_file = require("./components/file.vue");
let c_avatar = require("./components/avatar.vue");
let c_avatar_file = require("./components/avatar-file.vue");
let c_checkbox = require("./components/checkbox.vue");
let c_pagination = require("./components/pagination.vue");
let c_radio = require("./components/radio.vue");
let c_search = require("./components/search.vue");
let c_select_multi = require("./components/select-multi.vue");
let c_select_single = require("./components/select-single.vue");
let c_switch_toggle = require("./components/switch-toggle.vue");
let c_table = require("./components/table.vue");
let c_user_avatar = require("./components/user-avatar.vue");
let dialog = require('./plugins/dialog.js');
let scrollTop = require('./plugins/scrollTop.js');
let componentMap = {
  file: c_file,
  avatar: c_avatar,
  avatar_file: c_avatar_file,
  checkbox: c_checkbox,
  pagination: c_pagination,
  radio: c_radio,
  search: c_search,
  select_multi: c_select_multi,
  select_single: c_select_single,
  switch_toggle: c_switch_toggle,
  table: c_table,
  user_avatar: c_user_avatar
};
function install(option) {
  option = option || {prefix: "i_"};
  return function(Vue) {
    let keys = Object.keys(componentMap);
    for (let key of keys) {
      Vue.component(`${option.prefix}${key}`, componentMap[key]);
    }
    Object.defineProperties(Vue.prototype, {
      $dialog: {
        get: function() {
          return dialog;
        }
      },
      $scrollTop: {
        get: function() {
          return scrollTop.show();
        }
      }
    });
  }
}
if (window.Vue) {
  Vue.use(install());
}
module.exports = install;
