alert("Welcome to my site");
let userName = prompt("Please enter your name:");
let color_Choice;
do{
    color_Choice = prompt("Choose a color red , Green , blur: ").toLocaleLowerCase();
}while(!(color_Choice === "red" || color_Choice === "green" || color_Choice === "blue"));

document.write(`<h1 style="color:${color_Choice};"> Welcome , ${userName}!</h1>`);


