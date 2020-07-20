<template>
  <div>
    <h2>{{year}} count: {{count}}</h2>
  </div>
</template>

<script>
export default {
  name: 'YearSeparator',
  props: {
    year: Number,
    count: Number,
  },
};
</script>

<style>

</style>
