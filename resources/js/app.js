
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

window.Vue = require('vue');


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
//     data: {
//         firstName: 'Matt',
//         lastName: 'Paley'
//     }
//
// });



const app = new Vue({
    el: '#vfor-app',
    data: {
        songs: [
            {"song": "", "artist": ""},
            "Cottoneye Joe",
            "Itsy Bitsy",
            "Twinkle Twinkle",
        ],
    },

    methods:{
        buttonClicked(){
            var songs = 
            this.songs.push(this.aSong);
            this.artist.push(this.anArtist);
        },
        buttonClicked1(){
            this.songs.pop(this.aSong);
        },
        buttonClicked2(){
            this.songs = [];
        },
    }

});
