$(document).ready(function () {
    $("#Breakfast").click(function () {
        var t1 = 100
        var t2 = 4
        document.getElementById("x2").value = t1;
        document.getElementById("z1").value = t2;
    });
        $("#Lunch").click(function () {
            var t1 = 100
            var t2 = 4
            document.getElementById("x2").value = t1;
            document.getElementById("z1").value = t2;
    });
    $("#dinner").click(function () {
        var t1 = 100
        var t2 = 4
        document.getElementById("x2").value = t1;
        document.getElementById("z1").value = t2;
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
        var MT = 1
    });
    $("#but").click(function () {
        var Extra = $("#bb10").val()
        var Current = $("#x1").val();
        var Target = $("#x2").val();
        var Sensitivity = $("#x4").val();
        var Carbs = $("#y1").val();
        var Jump = $("#z1").val() * $("#y1").val();
        var Correction = Current / (Jump / Sensitivity);
        var Rise = $("#z1").val();
        if (Current === "" | Carbs === "" | Sensitivity === "" | Correction === "" | Rise === "") { alert(" Please insert all values") }
        else {
            var d1 = (Current - Target) / Sensitivity;
            var d2 = (Carbs * Rise) / Sensitivity;
            var d3 = Math.round((d1 + d2) * 100) / 100;
            //var Ratio = Math.round((Correction) *100)/100;
            var insulin = Math.round((d3 - Extra)*2)/2;
            var insulin2 = Math.round((d3 - Extra);
            var excess = document.getElementById("x1").value - document.getElementById("x2").value;
            var lower = Math.round((excess / Sensitivity) * 100) / 100;
            var food = Math.round(((Carbs * +Rise) / Sensitivity) * 2) / 2;
            var oneless = Math.round((((+Carbs * +Rise) + +Current) - Extra * Sensitivity) - ((+insulin2 - .5) * +Sensitivity));
            var at = Math.round((((+Carbs * +Rise) + +Current) - Extra * Sensitivity) - (+insulin2 * +Sensitivity));
            var oneplus = Math.round((((+Carbs * +Rise) + +Current) - Extra * Sensitivity) - ((+insulin2 + .5) * +Sensitivity));
            var plusone = +insulin2 + .5;
            var minusone = +insulin2 - .5;
            var bon = Math.round((((at - Target) / Rise) * -1) * 100) / 100;    
            document.getElementById("x3").value = excess
            document.getElementById("x5").value = lower;
            document.getElementById("y2").value = insulin2;
            document.getElementById("y3").value = food;
            document.getElementById("value").value = insulin;
            document.getElementById("test").value = insulin2;
            document.getElementById("z2").value = oneless;
            document.getElementById("z3").value = at;
            document.getElementById("z4").value = oneplus;
            document.getElementById("label12").innerHTML = "At " + plusone;
            document.getElementById("label11").innerHTML = "At " + insulin2;
            document.getElementById("label10").innerHTML = "At " + minusone;
            //document.getElementById("leftover").value = at - Target;
            //document.getElementById("bonus").value = bon;
        }
    });
});