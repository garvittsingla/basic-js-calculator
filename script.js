const input = document.querySelector("input")
const body = document.querySelector("body")
var str = ""
var operators = "=-/*"
// var num
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || operators.includes(key)) {
        appendinstr(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        str = str.slice(0, -1);
        input.value = str;
    } else if (key === 'Escape') {
        clears();
    }
});
function appendinstr(num){
    let last=str.slice(-1)
    if (operators.includes(num) && (operators.includes(last) || str === "")){
        return
    }
    else{
        str = str + num
        input.value=str   }
    
    
}
function calculate(){
    // alert("done")
    try{
        result = eval(str)
        input.value=result   
        console.log(result)
    } catch(err){
        input.value=err  
        
    }
}
function clears(){
    str=""
    input.value=str 

}