<template>
    <div>
        <h2>Todo List</h2>
        <ol>
            <li v-for="(item, index) in items" :key="index">{{ item.name }}</li>
        </ol>
        <form @submit.prevent="submit">
            <input type="text" v-model.trim="item" placeholder="Type todo">
            <button type="submit">Add Todo</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    data(){
        return {
            items: [
                {name: 'Pay'},
                {name: 'Bath'},
                {name: 'Breakfast'}
            ],
            item: '',
        }
    },
    methods: {
        submit(){
            if(this.item !== ''){
                this.items.push({ name: this.item});
                this.item = '';
            }
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>

<style scoped>

</style>