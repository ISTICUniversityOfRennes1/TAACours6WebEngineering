var String1="Voiture";
var String2=['V','o','i','t','u','r','e'];

function runTest2(){
    var beforeTime = new Date().getTime();
    var afterTime= new Date().getTime();
    beforeTime = new Date().getTime();
    executeWithoutJoin();
    afterTime= new Date().getTime();
    var temp1=afterTime-beforeTime;
    beforeTime=new Date().getTime();
    executeWithJoin();
    afterTime= new Date().getTime();
    var temp2=afterTime-beforeTime;
    alert("+= time="+temp1+" milliseconds \n push&join time="+temp2+" milliseconds");
}

function executeWithoutJoin()
{
    var i;
    for(i=0;i<1000000;i++){
        String1+="Voiture"+"Voiture";
    }
    return String1;
}

function executeWithJoin()
{
    var i,j=0;
    for(i=0;i<1000000;i++){
        String2.push(String[j]);
        j++;
        if(j == 7) { j=0 }
    }
    String2.join('');
    return String2;
}


