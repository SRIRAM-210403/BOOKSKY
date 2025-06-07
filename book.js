// selecting popup-box and overlay button
var popupButton = document.getElementById("add-popup")
var popupOverlay = document.querySelector(".overlay")
var popupbox = document.querySelector(".popup-box")

popupButton.addEventListener("click",function(){
    popupOverlay.style.display = "block"
    popupbox.style.display = "block"
})

//select cancel button
var cancelPopup = document.getElementById("cancel-overlay")
cancelPopup.addEventListener("click",function(event){
    event.preventDefault()
    popupOverlay.style.display = "none"
    popupbox.style.display = "none"
})

//select container and add book and book title,author,description
var container = document.querySelector(".container")
var addBook = document.getElementById("add-book")
var bookTitle = document.getElementById("book-title-input")
var bookAuthor = document.getElementById("book-author-input")
var bookDescription = document.getElementById("book-description-input")

addBook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${bookTitle.value}</h2>
        <h5>${bookAuthor.value}</h5>
        <p>${bookDescription.value}</p>
        <button id="del" onclick="deletebook(event)">delete</button>`
        container.append(div)
        popupOverlay.style.display = "none"
        popupbox.style.display = "none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}