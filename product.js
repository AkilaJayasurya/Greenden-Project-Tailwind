//selecting side navbar and menu

var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})
closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})

//selecting products by names

var productcontainer=document.getElementById("productcontainer")
var searchh=document.getElementById("searchh")
var productlist=productcontainer.querySelectorAll(".pc")  // div which is inside product container

searchh.addEventListener("keyup",function(){
    console.log("search triggered")
    var enteredvalue=event.target.value.toUpperCase()

    for(var i=0;i<productlist.length;i=i+1)
    {
        var productname=productlist[i].querySelector("h3").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }
    }
})