function search() {
   let sities = (document.querySelectorAll('li'));
   let button = document.getElementById('searchText').value;
   let result =document.getElementById('result');
   let matches=0;

   for(const li of sities){
       if(li.textContent.includes(button)){

       matches++;
       li.style.fontWeight='bold';
       li.style.textDecoration='underline';

       }

   }

   result.textContent=(`${matches} matches found`);

   
}
