// ! Handling password

document.addEventListener("DOMContentLoaded", () => {
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("exampleInputPassword1");

  togglePassword.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("exampleInputEmail1").value;
      const password = document.getElementById("exampleInputPassword1").value;
      const errorMessage = document.getElementById("errorMessage");

      if (email === "test@mail.com" && password === "test123") {
        window.location.href = "index.html";
      } else {
        errorMessage.textContent = "Email atau password anda salah!";
        setTimeout(() => {
          errorMessage.classList.add("hidden");
        }, 5000);
      }
    });
  }
});
// ? script data
document.addEventListener("DOMContentLoaded", () => {
  const dropArea = document.getElementById("dropArea");
  const fileInput = document.getElementById("fileInput");
  const fileSelectBtn = document.getElementById("fileSelectBtn");
  const fileDetails = document.getElementById("fileDetails");
  const fileName = document.getElementById("fileName");
  const fileSize = document.getElementById("fileSize");

  const dropArea1 = document.getElementById("dropArea1");
  const fileInput1 = document.getElementById("fileInput1");
  const fileSelectBtn1 = document.getElementById("fileSelectBtn1");
  const fileDetails1 = document.getElementById("fileDetails1");
  const fileName1 = document.getElementById("fileName1");
  const fileSize1 = document.getElementById("fileSize1");

  const jsonFile = document.getElementById("jsonFiles");

  dropArea.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", handleFiles);
  dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("border-blue-500");
  });
  dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("border-blue-500");
  });
  dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.classList.remove("border-blue-500");
    const files = e.dataTransfer.files;
    handleFiles({ target: { files } });
  });

  function handleFiles(event) {
    const file = event.target.files[0];
    if (file) {
      dropArea.classList.add("hidden");
      dropArea1.classList.add("hidden");

      fileDetails.classList.remove("hidden");
      fileName.textContent = `${file.name}`;
      fileSize.textContent = `Size: ${(file.size / 1024).toFixed(0)} KB`;
    }
  }

  dropArea1.addEventListener("click", () => {
    fileJson.classList.remove("hidden");
    dropArea1.classList.add("hidden");
    dropArea.classList.add("hidden");
  });
  const simpleSave = document.getElementById("simpleSave");
  const jsonFiles1 = document.getElementById("jsonFiles1");
  const selectElement = document.getElementById("selectedFile");
  const textName = document.getElementById("textName");
  selectElement.addEventListener("change", () => {
    if (selectElement.value) {
      jsonFile.classList.remove("hidden");
      selectElement.classList.add("w-full");
      simpleSave.classList.add("hidden");
    }
  });

  jsonFiles1.addEventListener("click", () => {
    jsonFile.classList.add("hidden");
    selectElement.classList.remove("w-full");

    selectElement.classList.add("w-96");
    simpleSave.classList.remove("hidden");
    textName.classList.remove("hidden");
  });

  // fileInput1.addEventListener("change", handleFiles1);
  // dropArea1.addEventListener("dragover", (e) => {
  //   e.preventDefault();
  //   dropArea1.classList.add("border-blue-500");
  // });
  // dropArea1.addEventListener("dragleave", () => {
  //   dropArea1.classList.remove("border-blue-500");
  // });
  // dropArea1.addEventListener("drop", (e) => {
  //   e.preventDefault();
  //   dropArea1.classList.remove("border-blue-500");
  //   const files = e.dataTransfer.files;
  //   handleFiles1({ target: { files } });
  // });

  // function handleFiles1(event) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     dropArea.classList.add("hidden");
  //     dropArea1.classList.add("hidden");
  //     jsonFile.classList.remove("hidden");

  //     fileName.textContent = `${file.name}`;
  //     // fileSize.textContent = `Size: ${(file.size / 1024).toFixed(2)} KB`;
  //   }
  // }

  const openJson = document.getElementById("openJson");
  const fileJson = document.getElementById("fileJson");

  openJson.addEventListener("click", () => {
    fileJson.classList.remove("hidden");
    jsonFile.classList.add("hidden");
  });
});

// ? script toggle dropdown sidebar
function toggleDropdown(id) {
  const element = document.getElementById(id);
  element.classList.toggle("show");

  const icon = document.getElementById(`icon-${id}`);
  icon.classList.toggle("rotate-180");
}

document.addEventListener("DOMContentLoaded", () => {
  // resize js
  const resizeHandle = document.getElementById("resizeHandle");
  const resizeContainer = document.getElementById("resizeContainer");
  let isResizing = false;
  let startY;
  let startHeight;

  resizeHandle.addEventListener("mousedown", (e) => {
    isResizing = true;
    startY = e.clientY;
    startHeight = parseInt(
      document.defaultView.getComputedStyle(resizeContainer).height,
      10
    );
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);
  });

  function resize(e) {
    if (isResizing) {
      const newHeight = startHeight - (e.clientY - startY);
      if (newHeight > 0) {
        resizeContainer.style.height = `${newHeight}px`;
      }
    }
  }

  function stopResize() {
    isResizing = false;
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", stopResize);
  }

  const closePanel = document.getElementById("closePanel");
  const togglePanel = document.getElementById("togglePanel");
  closePanel.addEventListener("click", () => {
    resizeContainer.classList.add("hidden");
    togglePanel.classList.remove("hidden");
    togglePanel.addEventListener("click", () => {
      resizeContainer.classList.remove("hidden");
      togglePanel.classList.add("hidden");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById("dropdownToggle");
  const dropdownMenu = document.getElementById("dropdownMenu");

  dropdownToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
  });
  const themeToggle = document.getElementById("themeToggle");
  const themeContent = document.getElementById("themeContent");

  themeToggle.addEventListener("click", () => {
    themeContent.classList.toggle("hidden");
  });

  const toggleDark = document.getElementById("darkMode");
  const toggleLight = document.getElementById("lightMode");
  const toggleDefault = document.getElementById("defaultMode");

  toggleDark.addEventListener("click", function () {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeContent.classList.toggle("hidden");
  });

  toggleLight.addEventListener("click", function () {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    themeContent.classList.toggle("hidden");
  });

  toggleDefault.addEventListener("click", function () {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
    themeContent.classList.toggle("hidden");
  });

  // Apply theme on load based on preference
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  } else if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.remove("dark");
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
  }
});
