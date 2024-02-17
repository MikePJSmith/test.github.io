$(document).ready(function () {
    $("#Breakfast").click(function () {
        var t1 = 90
        var t2 = 6
        //var s1 = 8
        document.getElementById("x2").value = t1;
        document.getElementById("z1").value = t2;
        //document.getElementById("y2").value = s1;
    });
        $("#Lunch").click(function () {
            var t1 = 100
            var t2 = 6
        //var s1 = 9
            document.getElementById("x2").value = t1;
            document.getElementById("z1").value = t2;
        //document.getElementById("y2").value = s1;
    });
    $("#dinner").click(function () {
        var t1 = 110
        var t2 = 5
        //var s1 = 10
        document.getElementById("x2").value = t1;
        document.getElementById("z1").value = t2;
       //document.getElementById("y2").value = s1;
    });
    $("#aa2").click(function () {
        var bbx = $("#bb1").val();
        var e1 = bbx * .875;
        document.getElementById("bb2").value = e1
        document.getElementById("bb10").value = e1;
    });
    $("#aa3").click(function () {
        var bbx = $("#bb1").val();
        var e1 = bbx * .750;
        document.getElementById("bb3").value = e1
        document.getElementById("bb10").value = e1;
    });
    $("#aa4").click(function () {
        var bbx = $("#bb1").val();
        var e1 = bbx * .625;
        document.getElementById("bb4").value = e1
        document.getElementById("bb10").value = e1;
    });
    $("#aa5").click(function () {
        var bbx = $("#bb1").val();
        var e1 = bbx * .500;
        document.getElementById("bb5").value = e1
        document.getElementById("bb10").value = e1;
    });
    $("#aa6").click(function () {
        var bbx = $("#bb1").val();
        var e1 = bbx * .375;
        document.getElementById("bb6").value = e1
        document.getElementById("bb10").value = e1;
    });
    $("#aa7").click(function () {
        var bbx = $("#bb1").val();
        var e1 = bbx * .250;
        document.getElementById("bb7").value = e1
        document.getElementById("bb10").value = e1;
    });
    $("#aa8").click(function () {
        var bbx = $("#bb1").val();
        var e1 = bbx * .125;
        document.getElementById("bb8").value = e1
        document.getElementById("bb10").value = e1;
    });
    $("#MT1").click(function () {
        var MT1 = 1.25;
    });
    $("#but").click(function () {
        //var x1 = document.getElementById("x1").value;
        var ex = $("#bb10").val()
        var x1 = $("#x1").val();
        //var bb1 = $(bb1).val();
        //var x2 = t1;
        var x2 = $("#x2").val();
        var x4 = $("#x4").val();
        var y1 = $("#y1").val();
        var z5 = $("#z1").val() * $("#x1").val();
        var y2 = x1 / (z5 / x4);
        //var y2 = document.getElementById("y2").value;
        //var y2 = $("#y2").val();
        var z1 = $("#z1").val();
        if (x1 === "" | y1 === "" | x4 === "" | y2 === "" | z1 === "") { alert(" Please insert all values") }
        else {
            //$("#result").css("display", "inline");
            var d1 = (x1 - x2) / x4;
            var d2 = y1 / y2;
            var d3 = Math.round((d1 + d2) * 100) / 100;
            var Ratio = Math.round((y2) *100)/100;
            var insulin = Math.round(d3 - ex);
            var insulin2 = Math.round(d3 - ex);
            var excess = document.getElementById("x1").value - document.getElementById("x2").value;
            var lower = Math.round((excess / x4) * 100) / 100;
            var food = Math.round((y1 / y2) * 0.5) / 0.5;
            var oneless = Math.round((((+y1 * +z1) + +x1) - ex * x4) - ((+insulin2 - .5) * +x4));
            var at = Math.round((((+y1 * +z1) + +x1) - ex * x4) - (+insulin2 * +x4));
            var oneplus = Math.round((((+y1 * +z1) + +x1) - ex * x4) - ((+insulin2 + .5) * +x4));
            var plusone = +insulin2 + .5;
            var minusone = +insulin2 - .5;
            var bon = Math.round((((at - x2) / z1) * -1) * 100) / 100;
            //var h1 = Math.round((bb1 * 0.925)*100)/100;
            //var h1p5 = Math.round((bb1 * 0.825) * 100) / 100;
            //var h2 = Math.round((bb1 * 0.65) * 100) / 100;
            //var h2p5 = Math.round((bb1 * 0.5) * 100) / 100;
            //var h3 = Math.round((bb1 * 0.35) * 100) / 100;
            //var h3p5 = Math.round((bb1 * 0.2) * 100) / 100;
            //var h4 = Math.round((bb1 * 0.125) * 100) / 100;
            //var h4p5 = Math.round((bb1 * 0.0) * 100) / 100;
            //document.getElementById("Extra").value =
            document.getElementById("x3").value = excess
            document.getElementById("x5").value = lower;
            document.getElementById("y2").value = Ratio;
            document.getElementById("y3").value = food;
            document.getElementById("value").value = insulin;
            document.getElementById("test").value = insulin2;
            document.getElementById("z2").value = oneless;
            document.getElementById("z3").value = at;
            document.getElementById("z4").value = oneplus;
            document.getElementById("label12").innerHTML = "At " + plusone;
            document.getElementById("label11").innerHTML = "At " + insulin2;
            document.getElementById("label10").innerHTML = "At " + minusone;
            document.getElementById("leftover").value = at - x2;
            document.getElementById("bonus").value = bon;
            //document.getElementById("bb2").value = h1;
            //document.getElementById("bb3").value = h1p5;
            //document.getElementById("bb4").value = h2;
            //document.getElementById("bb5").value = h2p5;
            //document.getElementById("bb6").value = h3;
            //document.getElementById("bb7").value = h3p5;
            //document.getElementById("bb8").value = h4;
            //document.getElementById("bb9").value = h4p5;
        }
    });
});