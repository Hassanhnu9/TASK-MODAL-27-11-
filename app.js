var get_value = document.getElementById("search").value;

function handleclick() {
   get_value = document.getElementById("search").value;
    document.getElementById("search").value="";
    document.getElementById("list").innerHTML += `
<div class="list_container">
            <li>${get_value}</li>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" onclick=modal(this)>Edit</button>
            <button>Delete</button>
        </div>
`
}

// modal function
  
function modal(abc) {
get_child=abc.parenteElement.children[0]
get_edit=abc.parenteElement.children[0].innerHTML;
     document.querySelector(".modal-dialog").innerHTML= `
    <div class="modal-content">
    <div class="modal-body">
      <input type="search" value=${get_value}>
        <button>Update</button>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
    `
}