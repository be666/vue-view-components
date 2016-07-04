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
  return function (Vue) {
    let keys = Object.keys(componentMap);
    for (let key of keys) {
      Vue.component(`${option.prefix}${key}`, componentMap[key]);
    }
    Object.defineProperties(Vue.prototype, {
      $dialog: {
        get: function () {
          return dialog;
        }
      },
      $scrollTop: {
        get: function () {
          return scrollTop.show();
        }
      },
      $getUUID: {
        get: function (radix, len) {
          var chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
          var uuid = [], i;
          radix = radix || chars.length;
          if (len) {
            // Compact form
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
          } else {
            // rfc4122, version 4 form
            var r;
            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            // Fill in random data.  At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0; i < 36; i++) {
              if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
              }
            }
          }
          return uuid.join('');
        }
      }
    });
  }
}
if (window.Vue) {
  Vue.use(install());
}
module.exports = install;
