let input = document.querySelector("#inp");
let text = document.querySelector(".text");

function Add(){
    if(input.value == ''){
        alert("Enter A Task First!")
    }

    else{
        let newEle = document.createElement('ul');
        newEle.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i> `;
        text.appendChild(newEle);
        input.value = '';

        newEle.querySelector("i").addEventListener("click", function(){ //selecting the icon
            newEle.remove();
        })
        
    }
    
}