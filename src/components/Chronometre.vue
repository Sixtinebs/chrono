<template>
  <div>
    <p>
      <span class="minute">{{minutes}}</span>
      :
      <span class="seconde">{{seconds}}</span>
    </p>
  </div>
  <input
    type="button"
    value="start"
    v-on:click="changeEtat('start')"
  />
  <input
    type="button"
    value="pause"
    v-on:click="changeEtat('pause')"
  />
  <input
    v-on:click="changeEtat('stop')"
    type="button"
    value="reset"
  />
</template>

<script>
export default {
  data() {
    return {
      seconds: 0,
      minutes: 0,
      etat: "pause",
      timmer: undefined
    };
  },
  methods: {
    chronos: function (state) {
      const self = this;
      if (state == "start") {
        self.timmer = setInterval(function () {
          self.seconds += 1;
        }, 1000);
      } else if ((state == "pause")) {
          clearInterval(self.timmer);
      }else if (state == "stop"){
          clearInterval(self.timmer);
          this.seconds = 0;
      }
    },
    changeEtat: function (state) {
      this.etat = state;
      this.chronos(this.etat);
    },
  },
};
</script>

<style>
</style>