<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>events</title>
    </head>
    <body>

        <h1>Events</h1>

        <div id="events-app">
            <button type="button" v-on:click="buttonClicked();" name="button">CLICK ME</button>
            <br>

            <div @mouseover="hovered();">
                <p>Hover on this</p>
            </div>



        </div>


        <script type="text/javascript" src="/js/vue.js"></script>
        <script type="text/javascript" src="/js/app.js"></script>
    </body>
</html>
