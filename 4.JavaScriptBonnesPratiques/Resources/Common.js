var visible=false;
function SlideCodeUp(){
    if(visible==false){
        $(".codeDisplay").animate({'margin-top': '10px'});
        visible=true;
    }else{
        $(".codeDisplay").animate({'margin-top': '100%'});
        visible=false;
    }
}


