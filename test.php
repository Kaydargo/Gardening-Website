<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js"></script>

    <script type="text/javascript">
    $(document).ready(function(){
        var count = 0;
      $(".shirts").draggable({helper: 'clone'});
      $(".drop").droppable({
        accept: ".shirts",
        activeClass: 'droppable-active',
        hoverClass: 'droppable-hover',
                drop: function(ev, ui) {
        if ($(this).html() == ""){
                  $(this).append($(ui.draggable).clone());         
        }else{
           $(this).empty().append($(ui.draggable).clone());
        }
                }
      });
    });
                </script>
        <style type="text/css">
        .drop{width:100px;min-height:109px;float:left;}
        .allshirts{width:100%;border:1px solid #eee;min-height:140px;}
        .shirts{float:left;width:100px;}
        .blanket{width:510px;min-height:140px;margin:0px;padding:0px;}
        .droppable-hover{background:#000;}
        .clear{clear:both;}
        </style>

</head>
<body>
    <div class="allshirts drop">
        <img class="shirts" src="images/tshirt_thumb1_thumb.png" />
        <img class="shirts" src="images/tshirt_thumb2_thumb.png" />
        <img class="shirts" src="images/tshirt_thumb3_thumb.png" />
        <img class="shirts" src="images/tshirt_thumb4_thumb.png" />
        <img class="shirts" src="images/tshirt_thumb1_thumb.png" />
        <img class="shirts" src="images/tshirt_thumb2_thumb.png" />
        <img class="shirts" src="images/tshirt_thumb3_thumb.png" />
        <img class="shirts" src="images/tshirt_thumb4_thumb.png" />
        <img class="shirts" src="images/tshirt_thumb1_thumb.png" />
        <img class="shirts" src="images/tshirt_thumb2_thumb.png" />
        <img class="shirts" src="images/tshirt_thumb3_thumb.png" />
        <img class="shirts" src="images/tshirt_thumb4_thumb.png" />
    </div>
    <div class="clear"></div>
    <div class="blanket">
        <table cellpadding="0" cellspacing="0" border="1">
                        <td><div id="photo1" class="drop"></div></td>
                        <td><div id="photo2" class="drop"></div></td>
                        <td><div id="photo3" class="drop"></div></td>
                        <td><div id="photo4" class="drop"></div></td>
                        <td><div id="photo5" class="drop"></div></td>
                </tr>
                <tr>
                        <td><div id="photo6" class="drop"></div></td>
                        <td><div id="photo7" class="drop"></div></td>
                        <td><div id="photo8" class="drop"></div></td>
                        <td><div id="photo9" class="drop"></div></td>
                        <td><div id="photo10" class="drop"></div></td>
                </tr>

        </table>
    </div>

</body>
</html>