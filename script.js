const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Modal open function 
const openModal = () => {
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayeractive");
}

// Modal close function
const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayeractive");
    console.log("Modal is Closed");
}