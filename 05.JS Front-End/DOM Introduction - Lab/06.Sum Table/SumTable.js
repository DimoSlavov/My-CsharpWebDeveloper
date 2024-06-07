function sumTable() {
    const table = document.querySelector('table');

    if (table) {
        
        const lastColumnCells = table.querySelectorAll('td:last-child');
       
        let sum = 0;
       
        for (let i = 0; i < lastColumnCells.length; i++) {
            
            const value = parseFloat(lastColumnCells[i].textContent);
            if (!isNaN(value)) {
                sum += value;
            }
        }
        const sumElement = document.getElementById('sum');
        if (sumElement) {
            sumElement.textContent = sum.toFixed(2);
        } else {
            console.error('Element with ID "sum" not found.');
        }
    } else {
        console.error('No table found in the document.');
    }
}
