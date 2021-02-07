<template>
    <div>
        <h2>Todo List ( {{ itemCount }} )</h2>
        <h4>{{ fullName }}</h4>
        <h3>{{ fname}} {{ lname }}</h3>
        <ol>
            <li v-for="(item, index) in items" :key="item.name">{{ item.name }} <input type="text" placeholder="Todo name"> <button @click="remove(index)">Done</button></li>
        </ol>
        <form @submit.prevent="submit">
            <input type="text" v-model.trim="item" placeholder="Type todo">
            <button type="submit">Add Todo</button>
        </form>

        <button @click="setFullName">Set Full Name</button>
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    computed:{
        itemCount(){
            return this.items.length;
        },
        fullName:{
            get(){
                return `Full Name is: ${this.fname} ${this.lname}`;
            },
            set(fullName){
                const values = fullName.split(' ');
                this.fname   = values[0];
                this.lname   = values[1];
            }
        }
    },
    data(){
        return {
            items: [
                {name: 'Pay'},
                {name: 'Bath'},
                {name: 'Breakfast'}
            ],
            item: '',
            fname: 'Md. Shariful',
            lname: 'Islam',
        }
    },
    methods: {
        submit(){
            if(this.item !== ''){
                this.items.push({ name: this.item});
                this.item = '';
            }
        },
        setFullName(){
            this.fullName = 'JoneCoder Tutorial';
        },
        remove(index){
            this.items = this.items.filter((item, i) => i != index);
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