<!--
 * @Author: your name
 * @Date: 2022-03-21 20:32:42
 * @LastEditTime: 2022-04-20 17:24:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-demo\managesystem\src\views\Home\index.vue
-->
<template>
    <div class="home">
        <div ref="myechart" style="width: 600px; height: 400px"></div>
    </div>
</template>
<script>
export default {
    mounted(){
        this.setChart()
    },
    methods:{
        setChart() {
        var myChart = this.$echarts.init(this.$refs.myechart)
        // 指定图表的配置项和数据
        var option = {
          title: {
            text: "ECharts",
          },
          tooltip: {},
          legend: {
            data: ["销量"],
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
      },
    }
}
</script>