function showSavings() {
  let daily = 30000;
  let yearly = daily * 365;
  document.getElementById("savings").innerText =
    "Uang setahun: Rp " + yearly.toLocaleString();
}
