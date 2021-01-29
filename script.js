function start() {
    var dec;
    dec = (document.getElementById('input').value) - 9;
    console.log(dec);
    var ans;
    ans = (dec * 10) + 9;
    console.log(ans);
    document.getElementById('out').innerHTML = document.getElementById('input').value;
}
