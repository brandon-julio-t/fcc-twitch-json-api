<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    class: String,
  },
});
</script>

<template>
  <div
    class="rounded-xl border border-slate-200 p-6 shadow transition hover:border-slate-300 hover:shadow-md"
    :class="class"
  >
    <slot></slot>
  </div>
</template>
