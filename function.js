const modal = document.querySelector(".modal")
const openModal = document.querySelector(".clickable-div");
const closeModal = document.querySelector(".close-modal");



openModal.addEventListener('click', () => {
  modal.showModal();
})

closeModal.addEventListener('click', () => {
  modal.close();
})


