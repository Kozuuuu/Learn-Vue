<script>
  const toggleButton = document.getElementById("nightModeToggle");
  const icon = document.getElementById("icon");

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("night-mode");
    console.log("Night mode class:", document.body.classList.contains("night-mode"));

    if (document.body.classList.contains("night-mode")) {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  });
</script>
