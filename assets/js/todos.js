// check off specific todos by clicking
$("ul").on("click", "li", function() {
       $(this).toggleClass("completed");
   });

$("ul").on("click", "span", function(event) {
   $(this).parent().fadeOut(500, function() {
      $(this).remove(); 
   });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
       if ( event.which === 13 ) {
           var newTodoText = $(this).val();
           $(this).val("");
           $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i> </span>" + newTodoText + "</li>");
       }
});


$(".new").click(function() {
    $("body").append("<div class='container'><h1>To-Do List<i class='fa fa-plus' aria-hidden='true'></i></h1><input type='text' placeholder='Add New Todo'><ul></ul></div>");
});


$(".fa-plus").click(function() {
   $("input[type='text']").fadeToggle();
});


$( function() {
    $( ".container" ).draggable();
});