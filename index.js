/*function addingEventListener() {
    const input=document.getElementById('input');
    input.addEventListener('click',function(){
        alert('I was clicked!');
    });
    return input
}
addingEventListener()*/

const input=document.getElementById('input');

function clickAlert(){
    alert('I was clicked!');
}
function addingEventListener(){
    input.addEventListener('click',clickAlert);
    
}
addingEventListener()


