<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="i-radio {{radioClass}}" v-for="item in itemList" >
    <input type="radio" v-model="selected" value="{{item[id]}}">
    {{item[text]}}
  </div>
</template>
<script>
  export default {
    name: 'i_radio',
    props: ['itemList', 'selected', 'id', 'text', 'radioClass']
  }
</script>
