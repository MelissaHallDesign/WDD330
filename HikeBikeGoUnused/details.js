// function hikeDetails() {
//     //console.log('hello');
//     document.querySelector('#showDetails').classList.toggle('show');
    
// }
// //console.log('before');
// //setTimeout(hikeDetails, 1000);

// //console.log(document.querySelector('#showTheDetails'));
// document.querySelector('#detailClick').addEventListener('click', hikeDetails);
// //console.log('after');

function toggleDetails() {
    document.querySelector('#showDetails').classList.toggle('open');
}
document.querySelector('#detailClick').addEventListener('click', toggleDetails);

