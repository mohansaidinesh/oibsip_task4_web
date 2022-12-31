const input = document.querySelector('input');
const btn = document.querySelector('.add > button');

btn.addEventListener('click', addlist);
input.addEventListener('keyup', (e) => {
    (e.keyCode == 13 ? addlist(e) : null)
})

function addlist(e){
    const pending = document.querySelector('.pending');
    const completed = document.querySelector('.completed');

    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    const editBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';
    editBtn.innerHTML = '<i class="fa fa-edit"></i>';


    if(input.value !== ''){
        newLi.textContent = input.value;
        input.value = '';
        pending.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
        newLi.appendChild(editBtn);
    }

    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkBtn.style.display = 'none';
        if(editBtn.innerHTML == '<i class="fa fa-edit"></i>'){
            editBtn.innerHTML = '<i class="fa fa-edit"></i>';
            input = document.querySelector('input');
            editBtn = document.querySelector('.add > button');
        } else{
            editBtn.innerText = "Save";
        } 
    });

    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove(); 
    });

    editBtn.addEventListener('click', function(){
        const parent = this.parentNode;

        if(editBtn.innerHTML == '<i class="fa fa-edit"></i>'){
            editBtn.innerText = "Save";
            input = document.querySelector('input');
            editBtn = document.querySelector('.add > button');
        } else{
            editBtn.innerHTML = '<i class="fa fa-edit"></i>';

    }});
}