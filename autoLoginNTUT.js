var gettingItem = browser.storage.sync.get();
gettingItem.then((res) => {
  document.querySelector("#username").value = res.id;
  document.querySelector("#password").value = res.password;
});
document.getElementById("submit").click();
