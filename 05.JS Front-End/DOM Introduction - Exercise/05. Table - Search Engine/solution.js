function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let input = document.getElementById('searchField');
   let element = document.querySelectorAll('tbody tr');


   function onClick() {
       for(const tr of element){
        tr.classList.remove('select');
         if(input.value !== '' && tr.innerHTML.includes(input.value)){
            tr.className='select';
         }
       }
     input.value='';

   }
}