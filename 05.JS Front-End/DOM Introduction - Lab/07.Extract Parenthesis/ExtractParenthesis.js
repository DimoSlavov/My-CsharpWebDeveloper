function extract(id) {
    const paragraph = document.getElementById(id);
    
    if (paragraph) {
        const text = paragraph.textContent;
        const regex = /\((.*?)\)/g; 
        let matches = [];
        
        let match;
        while ((match = regex.exec(text)) !== null) {
            matches.push(match[1]); 
        }
        
        const result = matches.join('; '); 
        console.log(result); 
        return result;
    } else {
        console.error(`Element with ID "${id}" not found.`);
        return null;
    }
}