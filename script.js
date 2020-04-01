function createElement(){
    document.body.innerHTML += "<div class='menu'></div>";
}
createElement();

document.getElementById('open-bar-unifesp').onclick = function() {
    this.__toggle = !this.__toggle;
    var target = document.getElementById('bar-unifesp-content');
    if( this.__toggle) {
        target.style.height = target.scrollHeight+"px";
        this.firstChild.nodeValue = "Unifesp";
    }
    else {
        target.style.height = 0;
        this.firstChild.nodeValue = "Unifesp";
    }
}


