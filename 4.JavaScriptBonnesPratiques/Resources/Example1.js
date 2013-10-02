/*
 * Sets up and runs the first test.
 */
function runTest1(){
    var beforeTime = new Date().getTime();                                      //Prepare and get time variables
    var afterTime= new Date().getTime();
    beforeTime = new Date().getTime();
    executeWithoutCached();                                                     //run first part of the test, "without cached variables" 
    afterTime= new Date().getTime();
    var temp1=afterTime-beforeTime;                                             //get execution time of first part of test
    beforeTime=new Date().getTime();                                            //reinitialize timers
    executeWithCached();                                                        //run second part of the test, "with cached variables"
    afterTime= new Date().getTime();
    var temp2=afterTime-beforeTime;                                             //get execution time of second part of test
    alert("Non Cached time="+temp1+" milliseconds \n Cached time="+temp2+" milliseconds");
}
/*
 * Sets up and runs the first part of this test.
 */
function executeWithoutCached()
{
    var i;
    var newColor;
    for(i=0;i<10000;i++){
        newColor="#"+((1<<24)*Math.random()|0).toString(16);                    //code to select random color
        document.getElementById("div2").style.backgroundColor=newColor;         //change background color of div2 div
    }
}
/*
 * Sets up and runs the second part of this test.
 */
function executeWithCached()
{
    var i;
    var newColor;
    var colorDiv=document.getElementById("div2");                               //cache the variable
    for(i=0;i<10000;i++){
        newColor="#"+((1<<24)*Math.random()|0).toString(16);                    //code to select random color
        colorDiv.style.backgroundColor=newColor;                                //change background color of div2 div
    }
}