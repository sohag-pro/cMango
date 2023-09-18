let method = document.getElementById("method");
let url = document.getElementById("url");
let send = document.getElementById("send");
let output = document.getElementById("output");

send.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();
  xhr.open(method.value, url.value);
  xhr.send();

  xhr.onload = () => {
    console.log(xhr.response);
    output.innerText = xhr.response;
  };
});
