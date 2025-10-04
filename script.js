let account = 1000;
let cash = 1000;

function updateLog(newLine = "") {
  const log = document.getElementById("log");
  log.value += "\n" + newLine;
  log.scrollTop = log.scrollHeight;
}

function process() {
  let amount = parseFloat(document.getElementById("amount").value);
  let operation = document.getElementById("operation").value;
  let message = "";

  if (operation === "deposit") {
    if (cash >= amount) {
      account += amount;
      cash -= amount;
      message = `Deposit ${amount} THB ✅ | Account: ${account}, Cash: ${cash}`;
    } else {
      alert("Cash Not Enough!");
      return;
    }
  } else if (operation === "withdraw") {
    if (account >= amount) {
      account -= amount;
      cash += amount;
      message = `Withdraw ${amount} THB 💸 | Account: ${account}, Cash: ${cash}`;
    } else {
      alert("Money Not Enough To Withdraw!");
      return;
    }
  }

  document.getElementById("account").value = account;
  document.getElementById("cash").value = cash;
  updateLog(message);
}

function updateBalance() {
  account = parseFloat(document.getElementById("account").value);
  cash = parseFloat(document.getElementById("cash").value);
  updateLog(`Updated balances manually → Account: ${account}, Cash: ${cash}`);
}
