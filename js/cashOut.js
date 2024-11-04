document
  .getElementById("cashOutBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let cashOutAmount = getInputFieldId("cashOutAmount");
    let cashOutPin = getInputFieldId("cashOutPin");

    // console.log(cashOutAmount, cashOutPin);
    console.log(cashOutAmount);

    if (cashOutPin === 1111) {
      
      let currentCash = document.getElementById("original-taka").innerText;
      let currentAmount = parseFloat(currentCash);

      let currentBalance = currentAmount - cashOutAmount;
      console.log(currentBalance);

      document.getElementById("original-taka").innerText = currentBalance;

      //adding in Transaction History
      // let p = document.createElement("p");
      // p.innerText = `
      //    Withdraw ${cashOutAmount} and New Balance ${currentBalance}
      // `;
      // console.log(p);
      
      let div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.innerHTML = `
      <h4 class = "text-2xl font-bold text-black">Cash Out</h4>
      <p class = "text-black">Money withdraw ${cashOutAmount} . New Balance is ${currentBalance}</p>
      `;
      div.classList.add('rounded-lg');
      document.getElementById("transaction-container").appendChild(div);
      
    } else {
      alert("Pin Error!");
    }
  });
