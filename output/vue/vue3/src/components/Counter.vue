<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="count = count + 1">Increment</button>
    <button @click="count = count - 1">Decrement</button>
  </div>
</template>

<script>
export default {
  name: "counter",

  data: () => ({ count: 0 }),
};
</script>