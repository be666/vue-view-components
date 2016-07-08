<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="i-radio" v-for="item in itemList" v-bind:class="className">
    <input type="radio" v-model="selected" value="{{item[id]}}">
    {{item[text]}}
  </div>
</template>
<script>
  export default {
    name: 'i_radio',
    props: ['itemList', 'selected', 'id', 'text', 'className']
  }
</script>
