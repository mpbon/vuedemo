<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Vfor</title>
    </head>
    <body>

        <h1>My Playlist</h1>

        <div id="vfor-app">

            Song: <input type="text" name="aSong" v-model="song">
            Artist: <input type="text" name="anArtist" v-model="album">

            <button type="button" @click="buttonClicked();" name="button">Add Song</button>

            <button type="button" @click="buttonClicked1();" name="button">Remove Song</button>

            <button type="button" @click="buttonClicked2();" name="button">Remove All Songs</button>

            <br>
            <ul>
                <li v-for="record in albumAndSinger"> @{{ record.album }} <p>by</p> @{{ record.song }}</li>
            </ul>






        </div>



        <script type="text/javascript" src="/js/vue.js"></script>
        <script type="text/javascript" src="/js/app.js"></script>
    </body>
</html>
