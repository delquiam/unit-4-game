<html>
<head>
    <title>Jiggle Into JavaScript</title>
    <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script> -->
</head>
<body>

    <p>Press the buttons to change the box!</p>

    <div id="box" style="height:150px; width:150px; background-color:orange; margin:25px"></div>

    <button id="button1">Grow</button>
    <button id="button2">Blue</button>
    <button id="button3">Fade</button>
    <button id="button4">Reset</button>

    <script type="text/javascript" src="javascript.js"></script>

        document.getElementById("button1").addEventListener("click", function(){
            
            document.getElementById("box").style.height = "150px";

        });

        document.getElementById("button2").addEventListener("click", function(){

            document.getElementById("box").style.background-color = "orange";

        });

        document.getElembentById("Button3").addEventListener("click", function(){

            document.getElembentById("box").style.height = "25px";

        });

        document.getElementById("button4").addEventListener("click", function(){

            document.getElementById("box").style.height = "150px";

        });

    </script>

</body>
</html>