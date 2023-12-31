document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputValueById("deposit");
  //   console.log(newDepositAmount);

  //deposit total
  const depositTotal = getElementValueById("depositTotal");
  //   console.log(depositTotal);
  // claculate the depositTotal

  const newDepositTotal = depositTotal + newDepositAmount;
  setTextElementValueById("depositTotal", newDepositTotal);
  // blance total
  const newBlance = getElementValueById("blacTotal");
  const totalBlance = newBlance + newDepositAmount;
  setTextElementValueById("blacTotal", totalBlance);
});
