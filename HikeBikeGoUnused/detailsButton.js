
// window.onload=function buttonFunction() {
//     document.getElementById("detailButton").addEventListener('click', hikeDetails);
//   }

window.onload=document.getElementById("detailButton").addEventListener("click", buttonFunction);
function buttonFunction() {
    document.querySelector('#hikeDetails').classList.toggle('show');
}

// function hikeDetails() {
//     //console.log('hello');
//     document.querySelector('#hikeDetails').classList.toggle('show');
    
// }

// console.log('before');
// setTimeout(hikeDetails, 1000);

//console.log(document.querySelector('#showTheDetails'));
// document.querySelector('#showTheDetails').addEventListener('click', hikeDetails);
// console.log('after');