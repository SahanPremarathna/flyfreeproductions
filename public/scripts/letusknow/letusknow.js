const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");
const previewContainer = document.getElementById("preview-container");

// Store all selected files here
let selectedFiles = [];

// Drag over
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.classList.add("dragover");
});

// Drag leave
dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("dragover");
});

// Drop
dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("dragover");

  if (e.dataTransfer.files.length) {
    Array.from(e.dataTransfer.files).forEach(file => {
      if (file.type.startsWith("image/")) {
        selectedFiles.push(file);
        previewImage(file);
      }
    });
    updateFileInput();
  }
});

// File input change (click to select)
fileInput.addEventListener("change", function () {
  Array.from(this.files).forEach(file => {
    if (file.type.startsWith("image/")) {
      selectedFiles.push(file);
      previewImage(file);
    }
  });
  updateFileInput();
  fileInput.value = "";
});

function previewImage(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    wrapper.style.display = "inline-block";
    wrapper.style.margin = "5px";

    const img = document.createElement("img");
    img.src = e.target.result;
    img.style.width = "120px";
    img.style.height = "auto";
    img.style.display = "block"; // ensures delete button aligns properly
    img.style.borderRadius = "6px";
    img.style.boxShadow = "0 2px 6px rgba(0,0,0,0.15)";

    const delBtn = document.createElement("button");
    delBtn.innerHTML = "✖";
    delBtn.style.position = "absolute";
    delBtn.style.top = "5px";
    delBtn.style.right = "5px";
    delBtn.style.background = "rgba(0,0,0,0.6)";
    delBtn.style.color = "white";
    delBtn.style.border = "none";
    delBtn.style.borderRadius = "50%";
    delBtn.style.width = "20px";
    delBtn.style.height = "20px";
    delBtn.style.cursor = "pointer";
    delBtn.style.fontSize = "12px";
    delBtn.style.lineHeight = "18px";
    delBtn.style.padding = "0";

    delBtn.addEventListener("click", () => {
      wrapper.remove();
      selectedFiles = selectedFiles.filter(f => f !== file);
      updateFileInput();
    });

    wrapper.appendChild(img);
    wrapper.appendChild(delBtn);
    previewContainer.appendChild(wrapper);
  };
  reader.readAsDataURL(file);
}

function updateFileInput() {
  const dataTransfer = new DataTransfer();
  selectedFiles.forEach(file => dataTransfer.items.add(file));
  fileInput.files = dataTransfer.files;
}