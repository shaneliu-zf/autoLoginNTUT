function saveOptions(e) {
  browser.storage.sync.set({
    id: document.querySelector("#id").value,
    password: document.querySelector("#password").value
  });
  e.preventDefault();
  window.open("","_self").close();
}

function restoreOptions() {
  var gettingItem = browser.storage.sync.get();
  gettingItem.then((res) => {
    document.querySelector("#id").value = res.id || 'your student ID';
    document.querySelector("#password").value = res.password || 'your password';
  });
}
document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
