window.onload=function detailDisplay() {
    document.querySelector('#showDetails').classList.toggle('show');
}
console.log("before");
document.getElementById("#detailClick").addEventListener('click', detailDisplay);
console.log("after");