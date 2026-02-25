// Toggle accordion sections
function toggleSection(button) {
  const content = button.nextElementSibling;

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    button.innerText = "Baca Selengkapnya";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    button.innerText = "Tutup";
  }
}

// Savings calculator
function showSavings() {
  const daily = document.getElementById("dailyCost").value;
  const result = document.getElementById("savings");

  if (!daily || daily <= 0) {
    result.innerText = "Masukkan angka yang valid.";
    return;
  }

  const yearly = daily * 365;

  result.innerText =
    "Dalam setahun kamu bisa menyimpan: Rp " +
    yearly.toLocaleString("id-ID");

  result.style.opacity = "0";
  setTimeout(() => {
    result.style.opacity = "1";
  }, 100);
}

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
