
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
//     el: '#vfor-app',
//     data: {
//         songs: [],
//         albumAndSinger: []
//     },
//
//     methods:{
//         buttonClicked(){
//             var singleAlbumAndSinger = [];
//             singleAlbumAndSinger["album"] = this.album
//             singleAlbumAndSinger["song"] = this.song
//             this.albumAndSinger.push(singleAlbumAndSinger);
//         },
//         buttonClicked1(){
//             this.songs.pop(this.aSong);
//         },
//         buttonClicked2(){
//             this.songs = [];
//         },
//     }
//
// });

// Vue.component('record', {
//     template: `<div class='record'>
//     <h2>This is a tweet</h2>
//     <p><slot></slot></p>
//     <p>Nov 10 2019</p>
//     </div>`
// });

// new Vue({
//     el: "#image-binding",
//     data: {
//         designpic: "images/coolio.jpg",
//         newpic: "",
//         hasBorder: false
//     },
//
//     methods:{
//         showImage(){
//             this.designpic = this.newpic
        // },
        // borderizer(){
        //     this.hasBorder = true;
        // }
//         borderizer(){
//             this.hasBorder = !this.hasBorder
// }
//     }
// }
// );

Vue.component('record', {
    template: `
    <div>
        Song: <input type="text" name="aSong" v-model="addedSong.title">
        Artist: <input type="text" name="anArtist" v-model="addedSong.artist">
        <button type="button" @click="addSong();" name="button">Add Song</button>
        <ul>
            <li v-for="(song, index) in songs" :key="index">
                {{ song.title }} by {{ song.artist }}
                <button type="button" @click="buttonClicked2(index);" name="button">Remove Song</button>
                <button type="button" @click="likerizer(index)" name="button">Like!</button>
                <img :class="{'liked' : song.hasLike}" :src="addedSong.thumb" alt="" style="width: 20px;">
            </li>

        </ul>
    </div>
    `,

    methods: {
        addSong(){
            this.songs.push({
                title: this.addedSong.title,
                artist: this.addedSong.artist
        });
    },
        likerizer(index){
            this.songs[index].hasLike = !this.songs[index].hasLike
    },
        buttonClicked2(index){
            this.songs.splice(index, 1);
}
    },



    data(){
        return {

            addedSong: {
                    title: "",
                    arist: "",
                    thumb: "images/thumbs-up.png",
                    hasLike: false,
            },

            songs: [
                {
                    title: "Heavy Metal",
                    artist: "Scary Dude",
                    thumb: "images/thumbs-up.png",
                    hasLike: false,
                },
                {
                    title: "Smooth Jazz",
                    artist: "Soulpatch Guy",
                    thumb: "images/thumbs-up.png",
                    hasLike: false,
                },
                {
                    title: "Country Music",
                    artist: "Boots and Hat",
                    thumb: "images/thumbs-up.png",
                    hasLike: false,
                },
            ],
        }
    }
});

new Vue({
    el: "#tweet-components",
    data: {
        hasLike: false,
        songs: [],
        albumAndSinger: [],
        thumb: "images/thumbs-up.png",
    },
    methods: {
        buttonClicked(){
            var singleAlbumAndSinger = [];
            singleAlbumAndSinger["album"] = this.album
            singleAlbumAndSinger["song"] = this.song
            this.albumAndSinger.push(singleAlbumAndSinger);
        },
        buttonClicked1(){
            this.songs.pop(this.aSong);
        },
        buttonClicked2(){
            this.songs = [];
        },
        likerizer(){
            this.hasLike = !this.hasLike

    }
}
});
