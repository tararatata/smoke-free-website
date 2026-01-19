function showSavings() {
  const dailyCost = 30000; // rupiah per day
  const yearly = dailyCost * 365;

  const result = document.getElementById("savings");

  result.innerText =
    "Dalam setahun, uang yang bisa disimpan: Rp " +
    yearly.toLocaleString("id-ID");

  // small visual effect
  result.style.opacity = "0";
  result.style.transition = "opacity 0.6s ease";
  
  setTimeout(() => {
    result.style.opacity = "1";
  }, 50);
}
