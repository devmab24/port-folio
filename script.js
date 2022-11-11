function calculate(input){
    document.getElementById("inputext").value+=input;
}

function clr(){
    document.getElementById('inputext').value="";
}


function result(){
    let a = document.getElementById('inputext').value;
    let b = eval(a)
    document.getElementById("inputext").value = b;
}

function percent(){
    let x = document.getElementById('inputext').value;
    let y = (x/100)
    document.getElementById('inputext').value = y;
}





// let Result= Array.from(document.getElementsById('inputext'));

// Result


// let buttons = Array.from(document.getElementsByClassName('button'));

// buttons.map( button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText){
//             case 'AC':
//                 input.innerText = '';
//                 break;
//             case '=':
//                 try{
//                     input.innerText = eval(input.innerText);
//                 } catch {
//                     input.innerText = "Error"
//                 }
//                 break;
//             case 'DEL':
//                 if (input.innerText){
//                     input.innerText = input.innerText.slice(0, -1);
//                 }
//                 break;
//             default:
//                 input.innerText += e.target.innerText;
//         }
//     });
// });


// /*let result=document.getElementsById("inputext");*/

// let result=()=>{
//     try{

//         calculate.value=eval(calculate.value)
//     }
//     catch(err){
//         alert("Enter the valid number");
//     }

// }
// let display = document.getElementById('display');
// function clr(){
//     calculate.value=" ";
// }