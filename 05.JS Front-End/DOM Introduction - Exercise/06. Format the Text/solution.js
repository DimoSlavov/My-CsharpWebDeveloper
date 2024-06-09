function solve() {
  let element = document.getElementById('input').value;
  let output = document.getElementById('output');

  let text = element.split('.');
  text=text.filter(s=>s.length>0).map(s=>s+='.');

  while(text.length>0){
    let p=document.createElement('p');
    p.textContent=text.splice(0,3).join('');

    output.appendChild(p);
  }
}