function subtract() {
    const first = document.getElementById('firstNumber');
    const second = document.getElementById('secondNumber');
    const result = document.getElementById('result')


    const firstsum =Number(first.value);
    const secondsum = Number(second.value);

    result.textContent=firstsum-secondsum;
   


    
}