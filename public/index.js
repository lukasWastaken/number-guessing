const sendBtn = document.getElementById('sendBtn');
const status = document.getElementById('status');
const input = document.getElementById("num");

let number = Math.floor(Math.random() * 11);
let tries = 1;
console.log('Debug: generated Number:', number)


input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("sendBtn").click();
  }
});

sendBtn.onclick = () => {
    const num = document.getElementById("num").value;
    console.log('Debug: entered Number:',num)
    if(!num > 10 && !num < 0){
      if(num == number){
          if(tries === 1){
              status.innerText='You got it right, you needed ' + tries + ' try'
          }else{
              status.innerText='You got it right, you needed ' + tries + ' tries'
          }
          document.getElementById("num").disabled = true;
          enableReset()
      }else{
          if(num > number){
              status.innerText='The searched number is smaller then your entered number'
          }else{
              status.innerText='The searched number is greater than your entered number'
          }
          tries++;
      }
    }else{
      if (num < 0) {
        status.innerText = 'Your guess must be greater or equal to 0'
        console.log('Number is smaller than 0')
      }else if(num > 10){
        status.innerText = 'Your guess must be smaller or equal to 10'
        console.log('Number is greater than 10')
      }
    }

}
function enableReset(){
    document.getElementById('rsBtn').hidden=false;
    setTimeout(500)
    document.addEventListener("keypress", function(event) {
      if (event.key === "r") {
        event.preventDefault();
        document.getElementById("rsBtn").click();
      }
    });
    rsBtn.onclick = () => {
        tries = 1
        status.innerText='';
        console.clear()
        rsBtn.hidden = true;
        document.getElementById("num").value = ''
        document.getElementById("num").disabled = false;
        number = Math.floor(Math.random() * 11);
        console.log('Debug: generated Number:', number)
    }
}
