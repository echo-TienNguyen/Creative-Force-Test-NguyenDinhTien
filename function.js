const modal = document.querySelector(".modal")
const openModal = document.querySelector(".clickable-div");
const closeModal = document.querySelector(".close-modal");



openModal.addEventListener('click', () => {
  modal.showModal();
})

closeModal.addEventListener('click', () => {
  modal.close();
})


const boxes = document.querySelectorAll('.switchable-content');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    boxes.forEach(box => box.classList.remove('active'));
    box.classList.add('active');
  });
});