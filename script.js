let input=document.querySelector('.input');
let button=document.querySelector('.button');
button.addEventListener('click',function(){
    if(input.value==="")
    {
        alert('input area is empty!');
    }
    else{

      let ul=document.querySelector('.list');
      let li=document.createElement('li');
      li.innerHTML=input.value;
      ul.appendChild(li);
      li.classList.add('list-item');

      var tick=document.createElement('button');
      tick.innerHTML='&#10004;';
      tick.classList.toggle('tick-btn');
      li.appendChild(tick);

      var del=document.createElement('button');
      del.innerHTML='🗑';
      del.classList.add('delete-btn');
      li.appendChild(del);
    }
    tick.addEventListener('click',function(e){
        let x=e.target;
        x.parentElement.style.textDecoration='line-through';
    })
    del.addEventListener('click',function(e){
        let dele=e.target;
          console.log(dele.parentElement.remove());
    })
    input.value='';
})

