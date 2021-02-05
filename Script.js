

butt1.addEventListener("click", func1);
function func1()
{
   var colorDivs = document.getElementsByClassName("main");
            var r = Math.floor(Math.random() * (256)),
                r = Math.floor(Math.random() * (256)),
                g = Math.floor(Math.random() * (256)),
                b = Math.floor(Math.random() * (256)),
                color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
            colorDivs[0].style.backgroundColor = color;
}

butt2.addEventListener("click", func2);
function func2()
{
	window.location.href='NextPage.html';
}


function func3(){

  window.location.href='index.html';
}
