function increase() {
    var cartCount = document.getElementById("cartCount").innerHTML;
    var numbers = parseInt(cartCount) + 1;
    document.getElementById("cartCount").innerHTML = numbers;
}