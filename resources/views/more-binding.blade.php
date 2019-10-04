<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Vfor</title>

        <style media="screen">
            .bordered{
                border: 5px solid red;
            }
            .box{
                min-height:30px;
                width: 300px;

                border: 1px solid #ccc;
                margin-bottom: 5px;
            }
        </style>

    </head>
    <body>

        <h1>More Binding</h1>

        <div id="image-binding">

            <tweet>hey</tweet>
            <tweet>hi</tweet>
            <tweet>yo</tweet>
            <tweet>sup</tweet>

            Enter Image URL: <input type="text" name="" v-model="newpic">
            <button type="button" name="button" @click="showImage();">Show Image</button>
            <br><br>
            <img :class="{'bordered' : hasBorder}" :src="designpic" alt="" style="width: 200px;">
            <button type="button" @click="borderizer()" name="button">Borderize it!</button>



        </div>





        <script type="text/javascript" src="/js/vue.js"></script>
        <script type="text/javascript" src="/js/app.js"></script>
    </body>
</html>
