window.loadDoc = function() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/get?key=e24e9424");
  xhttp.send();
}