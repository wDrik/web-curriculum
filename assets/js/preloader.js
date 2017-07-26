document.onreadystatechange = function () {
  if (document.readyState == "loading") {
    //Mantem o #preloader visivel
  }else if(document.readyState == "complete") {
    $("#preloader").fadeOut("slow");
  }
}
