let user = prompt ("Adınız nedir?");

let name = document.querySelector("#name");
name.innerHTML = `${user}`
name.style.color = "rgb(255, 179, 102)"
name.style.textShadow = "3px 3px 10px darkseagreen";




function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + " eğer bu saat doğruysa Kodluyoruz Front-End Eğitimi ilk JS ödevini bitirmiş bulunmaktayım.";
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }