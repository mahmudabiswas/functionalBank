document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdraw = document.getElementById("withdrawField");
  const withdrawField = withdraw.value;
  //   console.log(withdrawField);
  const withdrawFieldString = parseFloat(withdrawField);
  //   console.log(withdrawFieldString);

  const withdrawTotal = document.getElementById("withdrawTotal");
  const withdrawFieldTotal = withdrawTotal.innerText;
  const withdrawString = parseFloat(withdrawFieldTotal);

  // clear the input field
  withdraw.value = "";
  // add widthdraw text
  const newWithdrawAmount = withdrawFieldString + withdrawString;
  withdrawTotal.innerText = newWithdrawAmount;
  // blace total
  const blacTotal = document.getElementById("blacTotal");
  const blanceTotalField = blacTotal.innerText;
  const blacTotalString = parseFloat(blanceTotalField);

  const totalwithdrawAmount = blacTotalString - newWithdrawAmount;
  blacTotal.innerText = totalwithdrawAmount;
});
