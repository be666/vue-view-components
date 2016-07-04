<template>
  <div></div>
</template>
<style>

</style>
<script>
  let navList = [
    {
      name: 'pagination',
      action: '/pagination'
    },
    {
      name: 'radio',
      action: '/radio'
    },
    {
      name: 'checkbox',
      action: '/checkbox'
    },
    {
      name: 'select-multi',
      action: '/select-multi'
    },
    {
      name: 'select-single',
      action: '/select-single'
    },
    {
      name: 'switch-toggle',
      action: '/switch-toggle'
    },
    {
      name: 'table',
      action: '/table'
    },
    {
      name: 'avatar',
      action: '/avatar'
    },
    {
      name: 'dialog',
      action: '/dialog'
    }
  ];
  export default{
    data(){
      return {
        navList: navList
      }
    }
  }
</script>
