    let problem = document.getElementById('problem');
    const text = document.getElementById('text');
    const btn = document.getElementById('button');
    const alert = document.getElementById('alert');
    const timeCount = document.getElementById('time');
    function reset() {
      alert.innerHTML = "";
      let num = Math.floor(Math.random()*10 +3);
      let random = Math.random().toString(36).slice(-num);
      problem.innerHTML = random;
      text.value = "";
      timeCount.innerHTML = 10;
    };
    function count (){
      setInterval(function () {
        timeCount.innerHTML -= 1;
        if (timeCount.innerHTML <= 0) {
          clearInterval(count);
          reset();
        }
      }, 1000);
    };
    count();
    function check() {
      if (text.value === problem.innerHTML) {
        alert.innerHTML = '正解';
        reset();
      } else {
        alert.innerHTML = '間違っています';
        text.value = "";
      }
      clearInterval(count);
    }
    text.addEventListener('keypress',function (e) {
      if (e.keyCode === 13){
        check();
      }
    })