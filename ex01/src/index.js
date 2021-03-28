var arr = Array.from(document.querySelectorAll(".key"));
var txt = document.getElementById("myTextarea");
var caps = false;
var shift = false;

arr.forEach((item) => {
  item.onclick = function () {
    switch (true) {
      case item.id === "back-space":
        txt.value = txt.value.slice(0, -1);
        break;
      case item.id === "enter":
        txt.value += "\n";
        break;
      case item.id === "ok":
        alert(txt.value);
        txt.value = "";
        break;
      case item.id === "caps-lock":
        if (caps === false) {
          caps = true;
        } else {
          caps = false;
        }
        break;
      case item.id === "shift":
        if (shift === false) {
          shift = true;
        } else {
          shift = false;
        }
        break;
      case caps === true && shift === true:
        txt.value += item.value.toUpperCase();
        shift = false;
        caps = false;
        break;
      case caps === false && shift === true:
        txt.value += item.value.toUpperCase();
        shift = false;
        break;
      case caps === true && shift === false:
        txt.value += item.value.toUpperCase();
        break;
      default:
        txt.value += item.value;
        break;
    }
  };
});
