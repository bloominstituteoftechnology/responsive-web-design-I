$("h1").on("mouseover",function(){
    $(this).css("color","red")
})

$("h1").on("mouseout",function(){
    $(this).css("color","blue")
})

$("h3").click(function(){
    alert("DANGER AHEAD !!!!")
})