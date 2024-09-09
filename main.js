let search=document.getElementById("search");
let items=document.querySelectorAll(".item")
let list=document.querySelector(".list")
let clear=document.getElementById("Clear")
let newItems=[]

function filterItems() {
for (let i = 0; i < items.length; i++) {
  if (items[i].innerHTML.toLowerCase().includes(search.value.toLowerCase())) {
        items[i].style.display = "flex"
  }
    else {
        items[i].style.display = "none"
    }
}

}
search.addEventListener("input",()=>{
    if (search.value !== "") {
    filterItems()
    clear.classList.toggle("d-none")
    }
}
)
clear.addEventListener("click",()=> {
    search.value=""
    filterItems()
    clear.classList.toggle("d-none")
})