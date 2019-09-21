<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>data binding</title>
    </head>
    <body>
        <h1>Data Binding</h1>


<div id="app">
    <input type="text" name="person" v-model="firstName"><input type="text" name="person" v-model="lastName">
    <br><br>
    <div>
        My name is @{{ firstName }} @{{ lastName }}
    </div>
</div>


        <script type="text/javascript" src="/js/vue.js"></script>
        <script type="text/javascript" src="/js/app.js"></script>
    </body>
</html>
