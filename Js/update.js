function update(){
    const typedText=document.querySelector('.js-input-update').value;

    localStorage.setItem('update', typedText);
    document.querySelector('.js-input-update').innerHTML=localStorage.getItem('update');
    

}

// function (){
//     console.log(localStorage.getItem('update'));
//     document.querySelector('.js-input-update').innerText=localStorage.getItem('update');
// }

function refresh(){
    let updateText=localStorage.getItem('update');
    document.querySelector('.link-text-update').innerText=updateText;
}



