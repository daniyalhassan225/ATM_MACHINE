let moneyBox = 22000; //ATM MACHINE MONEY BOX
let cardDailyLimit = 20000;
let accountBalance = 50000;

function checkPin() {
  console.log("I am checking pin");

  let userInputPin = document.querySelector("#userInputPin").value;

  if (userInputPin.length > 4) {
    document.querySelector("#errorMessage").innerHTML =
      "You Must Enter 4 Digit Pin Number";
    return;
  }

  if (userInputPin.length < 4) {
    document.querySelector("#errorMessage").innerHTML =
      "You Must Enter 4 Digit Pin Number";
    return;
  }

  if (userInputPin === "5112") {
    document.querySelector("#errorMessage").innerHTML =
      "Correct Pin Number 🙂";
    document.querySelector("#homeScreen").innerHTML = `
                  <form onsubmit="withdraw(); return false">
                       <h3>WITHDRAW</h3>
                       Enter your Amount to withdraw:
                       <input type="number" id="userInputAmount" required />
                       <button>withdraw</button>
                       <h4><span style="color: red">Note:</span> Enter multiples of 5 like: 5, 10, 15, ...</h4>
                  </form>`;
    return;
  }

  if (userInputPin !== "5112") {
    document.querySelector("#errorMessage").innerHTML =
      "inCorrect Pin Number 😌";
    return;
  }
}

function withdraw() {
  let amount = document.querySelector("#userInputAmount").value;

  if (amount > cardDailyLimit) {
    let liItem = (document.querySelector("ul").style.display = "none");
    document.querySelector("#message").innerHTML =
      "this machine don't have enough card Daily Limit, Please try again with small amount";
  } else {
    document.querySelector("#message").innerHTML =
      "Successfully Withdraw 👍";

    let liItem = (document.querySelector("ul").style.display = "block");

    let item1 = (document.querySelector("#item1").innerHTML =
      "Remain Mony Box: " + (moneyBox - Number(amount)));
    let item2 = (document.querySelector("#item2").innerHTML =
      "Remain Card Daily Limit: " + (cardDailyLimit - Number(amount)));
    let item3 = (document.querySelector("#item3").innerHTML =
      "Remain Account Balance: " + (accountBalance - Number(amount)));
  }
  // else if (amount > moneyBox) {
  //   document.querySelector("#message").innerHTML =
  //   "this machine don't have enough money, Please try again with small amount";
  // }
  // else if (amount > accountBalance) {
  //   document.querySelector("#message").innerHTML =
  //     "this machine don't have enough Account Balance, Please try again with small amount";
  // }
}