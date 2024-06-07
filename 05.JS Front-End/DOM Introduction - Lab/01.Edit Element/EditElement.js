function editElement(ref,match,repleaser) {

    const content =ref.textContent;
    const editedText = content.replace(new RegExp(match,"g"),repleaser);

       ref.textContent=editedText;
    


}