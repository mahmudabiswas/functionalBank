document.getElementById("btn-withdraw").addEventListener("click", function () {
  //  withdraw field
  const withdrawAmount = getInputValueById("withdrawField");
  // withdraw total
  const withdrawTotal = getElementValueById("withdrawTotal");
  // calculate total element

  const newElement = withdrawTotal + withdrawAmount;
  setTextElementValueById("withdrawTotal", newElement);
  // withdraw blanc total
  const newBlancTotal = getElementValueById("blacTotal");
  const withdrawBlancTotal = newBlancTotal - newElement;
  setTextElementValueById("blacTotal", withdrawBlancTotal);
});
