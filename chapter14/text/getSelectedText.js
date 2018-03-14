function getSelectedText(textBox){
    if(typeof textBox.selectionStart=="number"){
        return textBox.value.substring(textBox.selectionStart,textBox.selectionEnd);
    }
    else if(document.selection){
        return document.selection.createRange().text; 
    }
}