a=0;

function increment(){
	a=a+1;
	document.getElementById("text").setAttribute("value",a);
}

function decrement(){
	a=a-1;
	document.getElementById("text").setAttribute("value",a);
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37://left
            increment();
            break;
        case 38://up
            increment();
            break;
        case 39://right
            decrement();
            break;
        case 40://down
            decrement();
            break;
    }
};


