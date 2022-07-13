<script lang="ts">
import { defineComponent, PropType } from "vue";
import Channel from "../../models/Channel";
import Stream from "../../models/Stream";
import User from "../../models/User";
import TwitchService from "../../services/TwitchService";
import Card from "../common/Card.vue";
import Skeleton from "../common/Skeleton.vue";

const twitchService = new TwitchService();

export default defineComponent({
  components: {
    Card,
    Skeleton,
  },
  props: {
    user: Object as PropType<User>,
  },
  async mounted() {
    if (!this.user?.name) throw new Error("No username.");

    this.isLoading = true;
    [this.stream, this.channel] = await Promise.all([
      twitchService.getStream(this.user?.username),
      twitchService.getChannel(this.user?.username),
    ]);
    this.isLoading = false;
  },
  data() {
    return {
      isLoading: false,
      userClone: { ...this.user },
      stream: null as Stream | null,
      channel: null as Channel | null,
    };
  },
  methods: {
    clickHandler() {
      window.open(this.channel?.url);
    },
  },
});
</script>

<template>
  <Card class="cursor-pointer" @click="clickHandler()">
    <section class="flex flex-wrap items-center">
      <Skeleton v-if="isLoading" class="mr-2 h-8 w-8" round />
      <img
        v-else
        :src="userClone.logo"
        alt="profile picture"
        class="mr-2 w-8 rounded-full"
        @error="
          userClone.logo = `https://avatars.dicebear.com/api/initials/${user?.username}.svg`
        "
      />

      <Skeleton v-if="isLoading" class="h-6 w-full max-w-[8rem]" />
      <p class="flex flex-1 items-center justify-between" v-else>
        <span class="flex-grow">{{ user?.username }}</span>

        <span
          class="rounded-lg px-2 py-1 text-white"
          :class="{ 'bg-slate-600': !stream, 'bg-red-600': stream }"
        >
          {{ stream ? "LIVE" : "Offline" }}
        </span>
      </p>
    </section>
    <section v-if="stream" class="mt-4">
      <p>
        📺: <span class="font-bold">{{ stream.game }}</span>
      </p>
      <p>👀: {{ stream.viewers }}</p>
    </section>
  </Card>
</template>
