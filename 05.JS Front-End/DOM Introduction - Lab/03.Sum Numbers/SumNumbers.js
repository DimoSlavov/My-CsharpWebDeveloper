function calc() {

    const num12 = document.getElementById('num1');
    const num13 = document.getElementById('num2');
    const element = document.querySelector('#sum');

    const firstnumber = Number(num12.value);
    const secondnumber= Number(num13.value);

    


    element.value=firstnumber+secondnumber;
    
}
