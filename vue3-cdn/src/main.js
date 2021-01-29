const template = '<h1>Hello {{ name }} Vue3 tutorial.</h1>';
const data     = function (){
        return {
            title: 'Vue3 Tutorial',
            name: 'Jone'
        }
    }
const App     = { data, template };

Vue.createApp(App).mount('#vue-app');