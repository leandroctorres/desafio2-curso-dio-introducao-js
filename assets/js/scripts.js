let input = document.getElementById("tarefa");
let btn_adicionar = document.getElementById("btn_adicionar");
let ul = document.getElementById("items");
let items = document.getElementsByTagName("li");

function criarElemento(){
  let li = document.createElement("li");
	let itemCheckBox = document.createElement("input");
	itemCheckBox.setAttribute("type", "checkbox");
  itemCheckBox.className = "itemCheckBox";

  let text = document.createTextNode(input.value)

	li.appendChild(itemCheckBox);
  li.appendChild(text);

  ul.appendChild(li);
  input.value = "";

}

btn_adicionar.addEventListener("click", criarElemento);
