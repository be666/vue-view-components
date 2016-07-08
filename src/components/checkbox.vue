<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="i-checkbox" v-for="item in itemList" v-bind:class="className">
    <input type="checkbox" v-model="selected" value="{{item[id]}}" v-on:change="_change">
    {{item[text]}}
  </div>
</template>
<script>
  export default {
    name: 'i_checkbox',
    props: ['itemList', 'selected', 'id', 'text', 'className'],
    methods: {
      _change(){
        this.$dispatch('change');
      }
    }
  }
</script>
