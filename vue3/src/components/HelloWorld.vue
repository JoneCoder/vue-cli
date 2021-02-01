<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <ul>
      <li v-for="(fruit, index) in fruits" :key="index">{{ fruit }}</li>
      <li><input v-model.trim="newFruit" /> <button v-bind:[attribute]="isDisable">Add Fruit</button></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      attribute: 'disabled',
      isDisable: false,
      newFruit: 'Watermelon',
      fruits: ['Apple', 'Banana', 'Mango', 'Orange'],
    }
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
