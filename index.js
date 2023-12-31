document.getElementById("btn-deposit").addEventListener("click", function () {
  const deposit = document.getElementById("deposit");
  const depositField = deposit.value;
  const depositFieldString = parseFloat(depositField);

  // clear the deposit field
  deposit.value = "";
  // step2
  const container = document.getElementById("depositTotal");
  const depositTotalField = container.innerText;
  const depositContainer = parseFloat(depositTotalField);

  // step total

  const newDepositValue = depositContainer + depositFieldString;
  container.innerText = newDepositValue;

  // step 3
  const blacTotal = document.getElementById("blacTotal");
  const blanceTotalField = blacTotal.innerText;
  const blacTotalString = parseFloat(blanceTotalField);

  // step 4

  const newBlanceTotal = blacTotalString + newDepositValue;
  blacTotal.innerText = newBlanceTotal;
});
