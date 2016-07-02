<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div style="overflow-x: auto; ">
    <table class="am-table am-table-bordered">
      <thead>
      <tr>
        <th>
          <input v-on:change="toggleAll" type="checkbox"/>
        </th>
        <template v-for="title in titleList">
          <th v-bind:width="title.width" v-bind:class="title.className" >
            {{title.text}}
          </th>
        </template>
        <th v-if="optionList.length | gt0">
          操作
        </th>
      </tr>
      </thead>
      <tbody v-if="dataList && dataList.length | gt0 ">
      <template v-for="data in dataList">
        <tr v-on:click="rowClick($event,data)">
          <td>
            <input type="checkbox" v-model="checkbox" value="{{$index}}">
          </td>
          <template v-for="title in titleList">
            <td>
              <template v-if="title.render">
                {{{ (title.render)(data,data[title.id],$index) }}}
              </template>
              <template v-else>
                {{data[title.id]}}
              </template>
            </td>
          </template>
          <td v-if="optionList.length  | gt0">
            <div v-for="option in optionList"
                 class="am-btn am-btn-default {{option.className||''}}"
                 v-on:click.stop="optionEvent(option.id,data)">
              <template v-if="option.render">
                {{{ (option.render)(data,$index) }}}
              </template>
              <template v-if="option.text">
                {{{option.text}}}
              </template>
            </div>
          </td>
        </tr>
      </template>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="{{pageColSpan()}}">
          <i_pagination
            v-on:page-click="pageClick"
            :page-maker.sync="pageMaker"
          >
          </i_pagination>
        </td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'i_table',
    beforeCompile() {
      this.optionList = this.optionList || [];
    },
    props: {
      titleList: 'Array',
      dataList: 'Array',
      pageMaker: {
        default(){
          return {
            pageIndex: 0,
            pageSize: 10,
            totalPage: 0,
            pages: [],
            rowCount: 0,
            sizes: 0
          };
        }
      },
      checkbox: {
        type: 'Array',
        default(){
          return [];
        }
      },
      optionList: {
        type: 'Array',
        default(){
          return [];
        }
      },
      pid: {
        type: 'String',
        default() {
          return this.$tools.getUUid();
        }
      }
    },
    methods: {
      pageColSpan(){
        let optionList = this.optionList || [];
        let titleList = this.titleList || [];
        return (optionList.length > 0) ? (titleList.length + 2) : (titleList.length + 1);
      },
      toggleAll(event) {
        this.checkbox.splice(0, this.checkbox.length);
        if (event.target.checked) {
          let dLength = this.dataList.length;
          for (var i = 0; i < dLength; i++) {
            this.checkbox.push(String(i));
          }
        }
      },
      optionEvent(optionId, data) {
        this.$dispatch('table-click', this.pid, optionId, data);
      },
      rowClick(event,data){
        let target=event.target;
        let option=target.getAttribute('data-option');
        this.$dispatch('table-click', this.pid,option, data);
      },
      pageClick (index, size) {
        this.$dispatch('table-page-click', index, size)
      }
    }
  }
</script>
