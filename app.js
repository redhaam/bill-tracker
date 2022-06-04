function handleBill(e) {
  e.preventDefault();
  const reason = document.addBill.reason.value;
  const montant = document.addBill.montant.valueAsNumber;
  const billType = document.addBill.typeBill.value;
  const sold = document.getElementById("sold");

  if (billType == "credit") {
    sold.textContent = parseInt(sold.textContent) + montant;
  } else {
    sold.textContent = +sold.textContent - montant;
  }

  const row = document.createElement("tr");
  const date = new Date().toLocaleDateString();

  const tbody = document.querySelector("#bills>tbody");

  //   row.innerHTML = `
  //   <td> ${date} </td>
  //   <td> ${reason} </td>
  //   <td> ${montant} </td>
  //   `;

  const tDate = document.createElement("td");
  const tReason = document.createElement("td");
  const tMontant = document.createElement("td");

  tDate.textContent = date;
  tReason.textContent = reason;
  if (billType == "credit") {
    tMontant.textContent = "+ " + montant;
    // tMontant.style.color = "green";
    tMontant.classList.add("text-green");
  } else {
    tMontant.textContent = "- " + montant;
    // tMontant.style.color = "red";
    tMontant.classList.add("text-red");
  }

  row.appendChild(tDate);
  row.appendChild(tReason);
  row.appendChild(tMontant);

  tbody.appendChild(row);
}

document.addBill.addEventListener("submit", handleBill);
