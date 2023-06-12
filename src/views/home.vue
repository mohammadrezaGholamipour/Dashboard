<script setup>
import { useDashboardStore } from '@/store/pinia'
import { Chart, registerables } from "chart.js";
import { BarChart } from 'vue-chart-3';
import { onMounted } from 'vue'

/////////////////////////////////
const pinia = useDashboardStore()
Chart.register(...registerables);
////////////////////////////////
onMounted(() => {
  const breadCrumb = [
    { name: 'صفحه اصلی', link: '/' },
  ]
  pinia.handleBreadCrumb(breadCrumb)
})
////////////////////////////////
const data = {
  datasets: [
    {
      data: [
        { x: 'فروردین', y: 500000 },
        { x: 'اردیبهشت', y: 700000 },
        { x: 'خرداد', y: 400000 },
        { x: 'تیر', y: 800000 },
        { x: 'مرداد', y: 900000 },
        { x: 'شهریور', y: 450000 },
        { x: 'مهر', y: 670000 },
        { x: 'آبان', y: 837000 },
        { x: 'آذر', y: 153000 },
        { x: 'دی', y: 689000 },
        { x: 'بهمن', y: 1000000 },
        { x: 'اسفند', y: 800000 }
      ],
      backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
      barThickness: 30,
      borderRadius: 10,
      indexAxis: 'x',
    },
  ],
};
/////////////////////////
const options = {
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: '#1e1e2d',
      titleFont: {
        family: 'IRANYekanWebLight',
        size: 15
      },
      bodyFont: {
        family: 'IRANYekanWebLight',
        size: 13
      },
      bodyAlign: 'center',
      titleAlign: 'center',
      padding: 10,
      titleMarginBottom: 10,
      displayColors: false,
      callbacks: {
        label: (tooltipItem, data, dataset) => {
          const value = tooltipItem.formattedValue || '';
          return value.toLocaleString() + ' تومان';
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        font: {
          family: 'IRANYekanWebLight',
          size: 18
        }
      }
    },
    y: {
      ticks: {
        font: {
          family: 'IRANYekanWebLight',
          weight: 'bold',
          size: 12
        },
        callback: (value) => {
          return ` ${value.toLocaleString()} تومان `;
        }
      }
    }
  }
};
</script>
<template>
  <BarChart :chartData="data" :options="options" />
</template>