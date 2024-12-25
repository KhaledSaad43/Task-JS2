let text=prompt("Enter a message: ");
for(let x = 1; x <= 6 ; x++){
    document.write(`<h${x}>${text}</h${x}>`) + "\n";
}