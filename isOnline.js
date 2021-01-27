https://mebee.info/2020/02/17/post-5983/

import Vue from 'vue';
import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';
Vue.component('jqx-chart', JqxChart)

import Vue from 'vue';
import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
Vue.component('jqx-grid', JqxChart)

import Vue from 'vue';
import JqxSplitter from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxsplitter.vue';
Vue.component('jqx-splitter', JqxChart)

import Vue from 'vue';
import jqxWindow from "jqwidgets-scripts/jqwidgets-vue/vue_jqxwindow.vue";
Vue.component('jqx-window', JqxChart)

export default {
  plugins: [
    { src: '~/plugins/jqx-chart.js', mode: 'client' },
    { src: '~/plugins/jqx-grid.js', mode: 'client' },
    { src: '~/plugins/jqx-splitter.js', mode: 'client' },
    { src: '~/plugins/jqx-window.js', mode: 'client' },
  ]
}

async function isOnline() {
  const date = new Date();
  const timestamp = date.getTime();
  try {
    await fetch(`/ysap/favicon.ico?${timestamp}`);
  } catch {
    return false;
  }

  return true;
};
