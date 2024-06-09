function solve() {
 let text = document.querySelector('#text').value.toLowerCase();
 let convention =document.querySelector('#naming-convention').value;
 let result = document.querySelector('#result');

 if(convention==='Camel Case'){

  let word = [];

  text=text.split(' ');
  word.push(text[0]);

  for (let index = 1; index < text.length; index++) {
    word.push(text[index].charAt(0).toUpperCase()+text[index].slice(1));
    
  }

  result.textContent=word.join('');

 }else if(convention==='Pascal Case'){
  let word = [];

  text=text.split(' ');
 

  for (let index = 0; index < text.length; index++) {
    word.push(text[index].charAt(0).toUpperCase()+text[index].slice(1));
    
  }
  result.textContent=word.join('');

 }else{
  result.textContent= 'Error!';
 }



}