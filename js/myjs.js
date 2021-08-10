
var detailClownz_data_1 = "detail.html?name=CLOWNZ%20LEATHER%20RACING%20FLAMES%20VARSITY%20JACKET&brand=Clownz&price=1.999.000%20vnd&link=clownz-1.jpg";
var detailClownz_data_2 = "detail.html?name=CLOWNZ%20RACING%20FLAMES%20SHORTS&brand=Clownz&price=1.199.000%20vnd&link=clownz-2.jpg";
var detailClownz_data_3 = "detail.html?name=CLOWNZ.CO%20RACING%20TEAM%20T-SHIRT&brand=Clownz&price=349.000%20vnd&link=clownz-3.jpg";
var detailClownz_data_4 = "detail.html?name=CLOWNZ%20RACING%20FLAMES%20T-SHIRT&brand=Clownz&price=349.000%20vnd&link=clownz-4.jpg";
var detailClownz_data_5 = "detail.html?name=CLOWNZ%20RACING%20FLAMES%20T-SHIRT&brand=Clownz&price=1.999.000%20vnd&link=clownz-5.jpg";
var detailDegrey_data_1 = "detail.html?name=AO%20THUN%20BASIC%20DEGREY%20DEN%20-%20ATBD%20DEN&brand=Degrey&price=190.000%20vnd&link=degrey-1.jpg";
var detailTSUN_data_1 = "detail.html?name=TSUN%20OUT%20DOOR%20JACKET%20-%20B/R&brand=TSUN&price=520.000%20vnd&link=tsun-1.jpg";


if(document.getElementById("detailClownz1") != null){
    document.getElementById("detailClownz1").href = detailClownz_data_1;
    document.getElementById("detailClownz2").href = detailClownz_data_2;
    document.getElementById("detailClownz3").href = detailClownz_data_3;
    document.getElementById("detailClownz4").href = detailClownz_data_4;
}

if(document.getElementById("detailClownz5") != null){
    document.getElementById("detailClownz5").href = detailClownz_data_5;
}

if(document.getElementById("detailDegreg1") != null){
    document.getElementById("detailDegreg1").href = detailDegrey_data_1;
}

if(document.getElementById("detailTSUN1") != null){
    document.getElementById("detailTSUN1").href = detailTSUN_data_1;
}

function increase() {
    var cartCount = document.getElementById("cartCount").innerHTML;
    var numbers = parseInt(cartCount) + 1;
    document.getElementById("cartCount").innerHTML = numbers;
}