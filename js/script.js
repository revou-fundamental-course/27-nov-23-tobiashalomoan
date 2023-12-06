//Function that changes the tabs from Area to Perimeter and vice versa.
function openState(state)
{
    reset();
    var tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(state).style.display = "block";
}

//Function that automatically switches to the Area tab when the webpage is first loaded.
function setUp()
{
    document.getElementById("default").click();
    reset();
}


//Function that checks the user input for errors. Two for Area and Perimeter, respectively.
function areaCheck()
{
    var a = document.getElementById("a-input-area").value;
    var h = document.getElementById("h-input").value;
    try
    {
        if(a<0 || h<0) throw "is negative";
        if(a==0 || h==0) throw "cannot be zero";
        if(isNaN(a) || isNaN(h)) throw "is not a number";
        //Once there are no more errors, proceed to computation.
        computeArea(a,h);
    }
    catch(err)
    {
        alert("One or more of the input "  + err + ". Please try again!");
        reset();
    }
    
}
function perimeterCheck()
{
    var a = document.getElementById("a-input-perimeter").value;
    var b = document.getElementById("b-input").value;
    var c = document.getElementById("c-input").value;
    try
    {
        if(a < 0 || b < 0 || c < 0 ) throw "is negative";
        if(a==0 || b==0 || c==0) throw "cannot be zero";
        if(isNaN(a) || isNaN(b) || isNaN(c)) throw "is not a number";
        computePerimeter(a,b,c);
    }
    catch(err)
    {
        alert("One or more of the input " + err + ". Please try again!");
        reset();
    }
}

// Functions that computes the requested operation. Results are floats that end in 2 decimal digits.

function computePerimeter(a,b,c)
{
    var perimeter = (parseFloat(a) + parseFloat(b) + parseFloat(c)).toFixed(2);
    var result_div_perimeter = document.getElementById("result-perimeter");
    var result_out = "Your result is : " + a + " + " + b + " + " + c + "= " + perimeter;
    result_div_perimeter.innerHTML =  result_out;
}

function computeArea(a,h)
{
    var area = parseFloat(0.5*a*h).toFixed(2);
    var result_div_area = document.getElementById("result-area");
    var result_out = "Your result is : 1/2 x "+ a + " x " + h + " = "  + area;
    result_div_area.innerHTML = result_out;
}

//Function that resets the input and output field.
function reset()
{
    document.getElementById("a-input-area").value = 0;
    document.getElementById("h-input").value = 0;
    document.getElementById("a-input-perimeter").value = 0;
    document.getElementById("b-input").value = 0;
    document.getElementById("c-input").value=0;
    document.getElementById("result-area").innerHTML = "";
    document.getElementById("result-perimeter").innerHTML ="";
}

