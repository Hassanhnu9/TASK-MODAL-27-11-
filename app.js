var get_value = document.getElementById("search").value;
let arr = [];
function handleclick() {
  get_value = document.getElementById("search").value;
  arr.push(get_value)
  localStorage.setItem("list", arr);
  console.log(arr)

  document.getElementById("search").value = "";
  document.getElementById("list").innerHTML += `
<div class="list_container">
            <li>${get_value}</li>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" onclick=modal(this)>Edit</button>
            <button onclick=deleteData(this)>Delete</button>
        </div>
`
}

// modal function

var get_child;
var get_edit;

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

}

// delete data
function deleteData(getObject) {
  getObject.parentElement.remove()

}