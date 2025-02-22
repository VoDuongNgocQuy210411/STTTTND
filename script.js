// Hàm xử lý toggle cho một nút và hình ảnh tương ứng
function toggleImage(button, image) {
  // Nếu hình ảnh đang ẩn (display: none hoặc chưa được thiết lập)
  if (image.style.display === "none" || image.style.display === "") {
    // Hiển thị hình ảnh
    image.style.display = "block";
    // Để đảm bảo hiệu ứng chuyển tiếp hoạt động, trì hoãn một chút trước khi thay đổi opacity
    setTimeout(() => {
      image.style.opacity = "1";
    }, 10);
    button.textContent = "Ẩn Đáp Án";
  } else {
    // Làm mờ dần hình ảnh
    image.style.opacity = "0";
    // Sau khi hiệu ứng hoàn tất, ẩn hình ảnh đi
    setTimeout(() => {
      image.style.display = "none";
    }, 500);
    button.textContent = "Hiển thị Đáp Án";
  }
}

// Danh sách chứa các cặp nút và hình ảnh cần xử lý
const toggles = [
  { buttonId: "toggleButton", imageId: "aImage" },
  { buttonId: "toggle", imageId: "Image" },
  { buttonId: "toggleButton3", imageId: "aImage3" },
  { buttonId: "toggle2", imageId: "Image2" },
  { buttonId: "toggleButton4", imageId: "aImage4" },
  { buttonId: "toggle3", imageId: "Image3" },
  { buttonId: "toggleButton5", imageId: "aImage5" },
  { buttonId: "toggle4", imageId: "Image4" }
];

// Lặp qua mảng và gán sự kiện click cho từng cặp nút – hình ảnh
toggles.forEach(pair => {
  const button = document.getElementById(pair.buttonId);
  const image = document.getElementById(pair.imageId);
  if (button && image) {
    button.addEventListener("click", () => toggleImage(button, image));
  }
});

function toggleImageClass(button, image) {
  if (image.classList.contains("visible")) {
    image.classList.remove("visible");
    button.textContent = "Hiển thị Đáp Án";
    // Sau thời gian chuyển tiếp, ẩn phần tử hoàn toàn nếu cần
    setTimeout(() => {
      image.style.display = "none";
    }, 500);
  } else {
    image.style.display = "block";
    // Trì hoãn một chút để trình duyệt nhận biết sự thay đổi
    setTimeout(() => {
      image.classList.add("visible");
    }, 10);
    button.textContent = "Ẩn Đáp Án";
  }
}

// Sử dụng mảng đối tượng và gán sự kiện tương tự như trên:
toggles.forEach(pair => {
  const button = document.getElementById(pair.buttonId);
  const image = document.getElementById(pair.imageId);
  // Thêm lớp chung cho các hình ảnh nếu chưa có
  if (image) image.classList.add("toggle-image");
  if (button && image) {
    button.addEventListener("click", () => toggleImageClass(button, image));
  }
});