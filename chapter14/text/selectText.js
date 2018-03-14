function selectText(textBox,startIndex,endIndex){
    if(textBox.setSelectionRange){
        textBox.setSelectionRange(startIndex,endIndex);
    }
    else if(textBox.createTextRange){
        var range=textBox.createTextRange();
        range.collapse(true);
        range.moveStart("character",startIndex);
        range.moveEnd("character",endIndex-startIndex);
        range.select();
    }
    textBox.focus();
}