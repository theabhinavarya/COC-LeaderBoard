var navlist = document.getElementById("navlist");

navlist.style.maxHeight = "0px";

function togglemenu(){
  if(navlist.style.maxHeight == "0px")
  {
    navlist.style.maxHeight = "130px";
  }
  else{
    navlist.style.maxHeight = "0px";
  }
}
