<template>
  <div ref="chart" style="width: 600px; height: 400px;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'ChartComponent', 
  mounted() {
    const chartDom = this.$refs.chart;
    const myChart = echarts.init(chartDom);
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'bar'
      }]
    });
  }
};
</script>

<style scoped>
/* Chart Component Styles */
</style>