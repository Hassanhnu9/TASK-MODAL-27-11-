var get_child;
var get_edit;
var get_ARRAY;


var get_value = document.getElementById("search").value;
let arr = [];
function handleclick() {
  get_value = document.getElementById("search").value;
  arr.push(get_value)
  localStorage.setItem("list",JSON.stringify(arr));
  console.log(arr)
  get_ARR = JSON.parse(localStorage.getItem("list"))
  document.getElementById("search").value = "";
  document.getElementById("list").innerHTML += `
<div class="list_container">
            <li>${get_ARR[get_ARR.length-1]}</li>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" onclick=modal(this)>Edit</button>
            <button onclick=deleteData(this)>Delete</button>
        </div>
`
}

// modal function



function modal(abc) {
  get_child = abc.parenteElement.children[0]
  get_edit = abc.parenteElement.children[0].innerHTML;
  document.querySelector(".modal-body").innerHTML = `
    <div class="modal-content">
    <div class="modal-body">
      <input type="search" value=${get_edit} id="changeInput">
        <button onclick=addData(this)>Update</button>
    </div>
  </div>
    `
}

// add data
function addData(a) {
  let storeVal = document.getElementById("changeInput").value
  getChild.innerHTML = storeVal

  var listItems = document.getElementById("list").innerHTML;
            localStorage.setItem("list", listItems);

}

// delete data
function deleteData(getObject) {
  getObject.parentElement.remove()

  var listItems = document.getElementById("list").innerHTML;
            localStorage.setItem("list", listItems);

}

const onload=()=>{
  if(localStorage.getItem("list")==null){
    localStorage.setItem("list",JSON.stringify("[]"))
  }

  else{
    get_ARRAY = JSON.parse(localStorage.getItem("list"))
    for (let index = 0; index < get_ARRAY.length; index++){
         
      document.getElementById("list").innerHTML += `
      <div class="list_container">
                  <li>${get_ARRAY[index]}</li>
                  <button data-bs-toggle="modal" data-bs-target="#exampleModal" onclick=modal(this)>Edit</button>
                  <button onclick=deleteData(this)>Delete</button>
              </div>
              `
    }
  }
}
onload()