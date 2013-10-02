var String1="Voiture";
var String2=['V','o','i','t','u','r','e'];

/*
 * Sets up and runs the first test.
 */
function runTest2(){
    var beforeTime = new Date().getTime();                                      //Prepare and get time variables
    var afterTime= new Date().getTime();
    beforeTime = new Date().getTime();
    executeWithoutJoin();                                                       //run first part of the test, "using +="
    afterTime= new Date().getTime();
    var temp1=afterTime-beforeTime;                                             //get execution time of first part of test
    beforeTime=new Date().getTime();                                            //reinitialize timers
    executeWithJoin();                                                          //run second part of the test,"using push() & join()"
    afterTime= new Date().getTime();
    var temp2=afterTime-beforeTime;                                             //get execution time of second part of test
    alert("+= time="+temp1+" milliseconds \n push() & join() time="+temp2+" milliseconds");
}
/*
 * Runs the first part of this test.
 */
function executeWithoutJoin()
{
    for(var i=0;i<500000;i++){
        String1+="Voiture";                                                     //append "Voiture" using +=
    }
    return String1;
}
/*
 * Sets up and runs the second part of this test.
 */
function executeWithJoin()
{
    for(var i=0;i<500000;i++){
        for (var j = 0; j < 7; j++) {                                           //j is a character index for the word "Voiture" 
            String2.push(String2[j]);                                           //push the next character into the String array
        }
    }
    String2.join('');                                                           
    return String2;
}