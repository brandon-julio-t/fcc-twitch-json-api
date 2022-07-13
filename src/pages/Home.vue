<script lang="ts">
import { defineComponent } from "vue";
import User from "../models/User";
import TwitchService from "../services/TwitchService";
import StreamerCard from "../components/home/StreamerCard.vue";
import Skeleton from "../components/common/Skeleton.vue";

const twitchService = new TwitchService();

export default defineComponent({
  async mounted() {
    this.isLoading = true;
    this.users = await Promise.all(
      this.usernames.map((username) => twitchService.getUser(username))
    );
    this.isLoading = false;
  },
  data() {
    return {
      isLoading: false,
      users: <User[]>[],
      usernames: [
        "ESL_SC2",
        "OgamingSC2",
        "cretetion",
        "freecodecamp",
        "storbeck",
        "habathcx",
        "RobotCaleb",
        "noobs2ninjas",
      ],
      text: "Hello, World!",
    };
  },
  components: { StreamerCard, Skeleton },
});
</script>

<template>
  <main class="mx-auto grid h-screen max-w-xs place-items-center p-2">
    <section class="grid w-full grid-cols-1 gap-4">
      <template v-if="isLoading">
        <div v-for="_ in usernames">
          <Skeleton class="h-16" />
        </div>
      </template>
      <template v-else>
        <div v-for="user in users">
          <StreamerCard :user="user" />
        </div>
      </template>
    </section>
  </main>
</template>
