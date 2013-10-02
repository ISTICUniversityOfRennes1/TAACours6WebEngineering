var arr=new Array();
/*
 * Sets up and runs the third test.
 */
function runTest3(){
    for (var i = 0; i < 15000000; i++) {                                        //prepare array
        arr[i]=Math.random();
    }
    var beforeTime = new Date().getTime();                                      //Prepare and get time variables
    var afterTime= new Date().getTime();
    beforeTime = new Date().getTime();
    executeWithArrEqualsEmpty();                                                //run first part of the test, "using arr=[ ]"
    afterTime= new Date().getTime();
    var temp1=afterTime-beforeTime;                                             //get execution time of first part of test
    beforeTime=new Date().getTime();                                            //reinitialize timers
    executeWithArrLength();                                                     //run second part of the test, "using arr.length"
    afterTime= new Date().getTime();
    var temp2=afterTime-beforeTime;                                             //get execution time of second part of test
    alert("arr=[] time="+temp1+" milliseconds \n arr.length time="+temp2+" milliseconds");
}
/*
 * Sets up and runs the first part of this test.
 */
function executeWithArrEqualsEmpty()
{
    arr=[];                                                                     //Empty the array
    for (var i = 0; i < 15000000; i++) {                                        //repopulate the array
        arr[i]=Math.random();
    }
}
/*
 * Sets up and runs the second part of this test.
 */
function executeWithArrLength()
{
    arr.length=0;                                                               //Empty the array
    for (var i = 0; i < 15000000; i++) {                                        //repopulate the array
        arr[i]=Math.random();
    }
}


