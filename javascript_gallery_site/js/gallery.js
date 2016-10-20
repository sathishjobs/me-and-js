/*Name this external file gallery.js*/

//Get the default text
 var default_text = document.getElementById("image").innerHTML;

function upDate(previewPic){
 /* In this function you should
    1) change the url for the background image of the div with the id = "image"
    to the source file of the preview image

    2) Change the text  of the div with the id = "image"
    to the alt text of the preview image
    */
   var main_div=document.getElementById("image");
    main_div.style.backgroundImage ="url("+previewPic.src+")";
    main_div.innerHTML=previewPic.alt;

   /* image=document.createElement("img");
    image.src=previewPic.src;
    image.alt=previewPic.alt;
    //main_div.innerHTML=image;

    main_div.replaceChild(image, main_div.childNodes[0]);


   /* document.getElementById("header");
element.innerHTML = "New Header";

   // alert(previewPic.src);
   // alert(previewPic.alt);*/

	}

	function unDo(){
     /* In this function you should
    1) Update the url for the background image of the div with the id = "image"
    back to the orginal-image.  You can use the css code to see what that original URL was

    2) Change the text  of the div with the id = "image"
    back to the original text.  You can use the html code to see what that original text was
    */
    //alert("Mouse out");

    var main_div=document.getElementById("image");
    main_div.style.backgroundImage ="url()";
    main_div.innerHTML=default_text;

    //main_div.replaceChild(default_text, main_div.childNodes[0]);
    //alert(default_text);
   
	}
