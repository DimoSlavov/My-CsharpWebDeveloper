function extractText() {
    

    const element = document.getElementById('items');
    const area = document.getElementById('result');

    area.value = element.textContent;
}