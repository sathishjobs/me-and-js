// put your javascript code here
$(document).ready(function(){
//Append  header data
$(".jumbotron").append("<h1>Data Driven website.</h1><br><p>Using javascript template concepts.</p>");
//This below variable to store the html generated animals data to append the html template
var container_data="";
//iterate animals_data

jQuery.each(animals_data, function(name, value) {
	//name pointing to the catagery
	$.each(value,function(key,value2)
	{
		$.each(value2,function(key2,value3)
		{
			
			//alert(key2);
			if($.type(value3)=='string')
			{
				container_data+="<h2>Category:&nbsp "+value3+"</h2>";

			}
			else if($.type(value3)=='array')    
			{
				container_data+="<div class='row'>";
				$.each(value3,function(data2,data3){
					container_data+="<div class='col-sm-3 column_style style-9'><h3><u>"+data3.name+"</u></h3>";//row close;
					//alert(data3.name);
					container_data+="<img src='"+data3.image1+"' image2='"+data3.image2+"' class='img_style image-thumbnail'>";
					container_data+='<span class="glyphicon hover_icon glyphicon-eye-open"></span>';
					container_data+="<p>"+data3.description+"</p>";
					container_data+="</div>";//column close;
				});
				container_data+="</div>";//row close;
			}
			//alert($.type(value3));
		});
	});
});
//append all the animals data to the html template 
$(".content_box").html(container_data);
//This animal image hover functionality
$('.img_style').mouseover(function(){
	var original_src=$(this).attr('src');
	var hover_img=$(this).attr('image2');
	$(this).attr('src',hover_img);
	$(this).attr('image2',original_src)
	//alert($(this).attr('src'));
});
//This is animal image mouseout functionlaty
$(".img_style").mouseout(function(){
	var original_src=$(this).attr('src');
	var hover_img=$(this).attr('image2');
	$(this).attr('src',hover_img);
	$(this).attr('image2',original_src)
});
});