<template>
  <div>
    <HelloWorld msg="Welcome to Vue.js App"></HelloWorld>
    <div v-if="isShowing">
      <div v-show="isShow" v-html="title"></div>
      <h3 v-show="isShow === null">Vuejs Tutorial</h3>
      <h4 v-show="isShow" v-once>{{ count }}</h4>
    </div>
    <div v-else-if="isShowing === null" v-text="mobile"></div>
    <div v-else v-text="name"></div>
    <div>
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ index }} : {{ item.color }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      title: '<h1>Hello Vuejs</h1>',
      isShowing: true,
      isShow: true,
      count: 0,
      name: 'Md. Shariful Islam',
      mobile: '01712074151',
      items: [
        {color : 'red'},
        {color : 'green'},
        {color : 'blue'},
      ],
    }
  },
  mounted(){
    setInterval(() => {
      this.count++;
    }, 1000);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
