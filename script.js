
const chave = 'storage';

const text_box = document.getElementById("input-text");

function newTask(){
let input = document.getElementById('input-text');

//Validação
    if(!input.value)
{
    input.style= "border: 1px solid red"
    alert("insira uma task");
    
} 

else if(validacao()){
   
alert('Essa task ja existe')

}


else{
input.style= "border: none";
let values = JSON.parse(localStorage.getItem(chave) || "[]" )
values.push({
    name:input.value
})

localStorage.setItem(chave,JSON.stringify(values))

input.value = ''
 show()

}

}

function show(){
    let values = JSON.parse(localStorage.getItem(chave) || "[]");
    let list = document.getElementById("listBody");
list.innerHTML = '';

for(let i = 0;i<values.length;i++){
let list = document.getElementById("listBody") ;



  list.innerHTML  =  list.innerHTML +  ` <li>${values[i]['name']} <button id = "bnt" onclick="remove('${values[i]['name']}')" title="Feito" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg></button> </li> `


}

}


function remove(data){
 let values = JSON.parse(localStorage.getItem(chave) || "[]");
let index = values.findIndex( (x) => x.name == data)

values.splice(index,1)
localStorage.setItem(chave,JSON.stringify(values))
show()
}

function validacao(){
    let values = JSON.parse(localStorage.getItem(chave) || "[]");
    let inputvalue = document.getElementById('input-text').value;
let find = values.find( (x) => x.name == inputvalue)

return find ? true : false

}





show()