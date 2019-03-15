
$(document).ready(function() {

	$(".menu").on("click", function() {

	$("#welcome").fadeIn(2000, function() { 
		$("#welcome").fadeOut(2000, function(){
			$("#welcome").toggle()
			});
		});
	});
   
$(".rightside").on("click",function() {
	alert("Task Completed")
});

$('#taskadded').html(localStorage.getItem('listItems'));
$('#items').submit(function(event){

	event.preventDefault();
var item = $('#task').val();
if(item)
{
$('#taskadded').append("<li>" + item + "<hr></li>");
localStorage.setItem('listItems', $('#taskadded').html());
$('#task').val("");
}
});


// $(document).ready(function () {
// $('#list-items').html(localStorage.getItem('listItems'));
// $('.add-items').submit(function(event)
// {
// event.preventDefault();
// var item = $('#todo-list-item').val();
// if(item)
// {
// $('#list-items').append("<li>" + item + "<hr></li>");
// localStorage.setItem('listItems', $('#list-items').html());
// $('#todo-list-item').val("");
// }
// });

// $(document).on('change', '#mark', function()
// {
// if($(this).attr('checked'))
// {
// $(this).removeAttr('checked');
// }
// else
// {
// $(this).attr('checked', 'checked');
// }
// $(this).parent().toggleClass('completed');
// localStorage.setItem('listItems', $('#taskadded').html());
// });

$("#mark").on("click", function() {

$(".control").appendTo("#taskadded");

});


$("#edit").on("click", function() {

$(".control").clear();

});


$(".add-task").on('click', function(){

	$("#task").appendTo('#taskadded');

});



   var search = $("#search");
   var items  = $(".textarea");

   $("#get").on("click", function(){
        
        var v = search.val().toLowerCase();
       if(v == "") { 
           items.show();
           return;
       }
        $.each(items, function(){
            var it = $(this);
            var lb = it.find("#task").text().toLowerCase();
            if(lb.indexOf(v) == -1) 
                 it.hide();
        });
    });        
});