function toggle() {
    let button =document.getElementsByClassName('button')[0];
    let change = document.querySelector('#extra')

    if(button.textContent=== 'More'){
        button.textContent = 'Less';

        change.style.display='block';

    }else{
        button.textContent = 'More';

        change.style.display='none';
    }
}