<template>
  <div>
    <p>
      {{ message || "Hello" }} {{ name }}! I can run in React, Vue, Solid or
      Svelte!
    </p>
    <button @click="name = 'Ali'">Click me</button>
    <p>Count: {{ count }}</p>
    <button @click="count = count + 1">Increment</button>
  </div>
</template>

<script>
export default {
  name: "my-basic-component",

  props: ["message"],

  data: () => ({ name: "Hasan", count: 0 }),
};
</script>