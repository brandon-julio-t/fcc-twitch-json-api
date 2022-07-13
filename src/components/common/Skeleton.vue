<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    class: String,
    round: Boolean,
  },
});
</script>

<template>
  <div
    v-if="round"
    class="animate-pulse rounded-full bg-slate-200"
    :class="class"
  ></div>
  <div v-else class="animate-pulse rounded bg-slate-200" :class="class"></div>
</template>
