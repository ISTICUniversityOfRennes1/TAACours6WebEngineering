function runTest1(){
    var beforeTime = new Date().getTime();
    var afterTime= new Date().getTime();
    beforeTime = new Date().getTime();
    executeWithoutCached();
    afterTime= new Date().getTime();
    var temp1=afterTime-beforeTime;
    beforeTime=new Date().getTime();
    executeWithCached();
    afterTime= new Date().getTime();
    var temp2=afterTime-beforeTime;
    alert("Non Cached time="+temp1+" milliseconds \n Cached time="+temp2+" milliseconds");
}

function executeWithoutCached()
{
    var i;
    var newColor;
    for(i=0;i<10000;i++){
        newColor="#"+((1<<24)*Math.random()|0).toString(16);                    //code to select random color
        document.getElementById("div2").style.backgroundColor=newColor;
    }
}

function executeWithCached()
{
    var i;
    var newColor;
    var colorDiv=document.getElementById("div2");                               //cache the variable
    for(i=0;i<10000;i++){
        newColor="#"+((1<<24)*Math.random()|0).toString(16);                    //code to select random color
        colorDiv.style.backgroundColor=newColor;
    }
}