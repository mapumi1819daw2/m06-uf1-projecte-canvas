

var figuras = new Array(
    "cuadrado",
    "triangulo",
    "pentagono",
    "cilindro",
    "circulo",
    "cRectangle",
    "cArc",
    "cElipse",
    "cPiramide3D",
    "cCub",
);

var colors = new Array(
    "green",
    "black",
    "red",
    "blue",
);

var colorsLletra = new Array(
    "blue",
    "yellow",
    "purple",
    "red",

);

var gruixosLletra = new Array(
    1.5,
    1.7,
    2.0,
);

var figuraSeleccionada = null;
var colorSeleccionado = null;
var colorLletraSeleccionat = null;
var gruiLletraSeleccionat = null;

var ample = null;
var alt = null;
var esquerra = null;
var superior = null;
var margEsquerra = null;


var ample = null;
var alt = null;
var esquerra = null;
var gruix = null;
var color = null;
var tipuslin = null;
var tipuslin2 = null;





/**Funció que es carrega quan s'ha carregat l'html */
$(function () {

    /***VIDEO */

    /* $("#up").on("click", function () {
        alert("f");
        $("#video").volume+=0.1;
    }); */

    /**Ocultem elements inicials */
    $(".gruix").hide();
    $(".pepatext").hide();
    $(".pepa").hide();
    $(".menu").hide();
    $(".lul").hide();
    $(".lul2").hide();
    $("canvas").hide();



    $("#up").on("click", function () {
        $("#video").volume = 1.0;
    });



    /**Mostrem la pàgina de les figures */
    $("#passar").on("click", function () {
        $(this).hide();
        $(".pepatext").show();
        $(".pepa").show();
        $("video").hide();
        $("canvas").show();


        /* draw(); */
    });

    /**Ocultem el botó tornar enrere només carregar la pàgina*/
    $("#back").hide();

    /*  $("p").hide();
  */


    $("canvas").css({ "cursor": "pointer" });
    $("p").css({ "cursor": "pointer" });


    /**Al clicar a l'element canvas, desa l'id a la variable idSeleccionat i oculta 
     * la resta de figures gemoètriques 
     */
    $("canvas").on("click", function () {

        figuraSeleccionada = $(this).attr("id");

        ample = $(this).css("width");
        esquerra = $(this).css("left");
        superior = $(this).css("top");
        margEsquerra = $(this).css("margin-left");
        /* alert(ample); */

        /* alert($(this).css("left")); */
        console.log("Figura: " + figuraSeleccionada);


        $(".pepatext").hide();
        $(".pepa").hide();
        $(".gruix").show();
        $(".menu").show();
        $(".lul").show();
        $(".lul2").show();
        $("#back").show();
        $("p").show();
    

        pintaInfo();

        $("canvas").css({ "cursor": "initial" });

        figuras.forEach(element => {
            if (figuraSeleccionada != element) {

                $("#" + element).hide();

            }

        });


        /**Animació per mostrar la figura geomètrica clicada */
        $(this).animate({
            width: "1100",
            left: "650",
            top: "30",
            marginLeft: "0%",


        },




            "slow",


        )

        /*  alert($(this).css("left")); */
    });


    /**Accions que es duen a terme quan es clica el botó de tornar enrere */
    $("#back").on("click", function () {
        $("#" + figuraSeleccionada).animate({
            width: ample,
            left: esquerra,
            top: superior,
            marginLeft: margEsquerra,

        });



        $(".pepatext").show();
        $(".gruix").hide();
        $(".pepa").show();
        $(".menu").hide();
        $(".lul").hide();
        $(".lul2").hide();
        $("p").hide();
        $("#back").hide();
        

        pintaNormal();

        $("canvas").css({ "cursor": "pointer" });

        figuras.forEach(element => {
            if (figuraSeleccionada != element) {

                $("#" + element).show();

            }

        });
    });


});







function draw1() {

    try {

        var CANcuadrado = document.getElementById("cuadrado");
        var context1 = CANcuadrado.getContext("2d");
        square(context1, "white", 4, 0, 0);


        var CANtriangulo = document.getElementById("triangulo");
        var context2 = CANtriangulo.getContext("2d");
        triangle(context2, "white", 4, 0, 0);


        var CANpentagono = document.getElementById("pentagono");
        var context3 = CANpentagono.getContext("2d");
        penta(context3, "white", 4, 0, 0);


        var CANcilindro = document.getElementById("cilindro");
        var context4 = CANcilindro.getContext("2d");
        cilindro(context4, "white", 4, 0, 0);


        var CANcirculo = document.getElementById("circulo");
        var context5 = CANcirculo.getContext("2d");
        esphere(context5, "white", 4, 0, 0);


        var cRectangle = document.getElementById("cRectangle");
        var context = cRectangle.getContext("2d");
        dibuixaRectangle(context, "white", 4, 0, 0);


        var cArc = document.getElementById("cArc");
        var context1 = cArc.getContext("2d");
        dibuixaArc(context1, "white", 4, 0, 0);


        var cElipse = document.getElementById("cElipse");
        var context2 = cElipse.getContext("2d");
        dibuixaElipse(context2, "white", 4, 0, 0);


        var cPiramide3D = document.getElementById("cPiramide3D");
        var context3 = cPiramide3D.getContext("2d");
        piramide3D(context3, "white", 4, 0, 0)


        var cCub = document.getElementById("cCub");
        var context4 = cCub.getContext("2d");
        dibuixaCub(context4, "white", 4, 0, 0);




    } catch (e) {
        document.getElementById("body").innerHTML = "HTML5 no suportat!";
    }

}
function gruixo(id1) {
    var color = null;


    if (id1 == '1') {
        gruix = 2;
    }
    if (id1 == '2') {
        gruix = 5;
    }
    if (id1 == '3') {
        gruix = 10;
    }
    switch (figuraSeleccionada) {
        case "cRectangle":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");

            dibuixaRectangleInfo(context, color, gruix, tipuslin, tipuslin2);
            break;


        case "triangulo":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            triangleInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "pentagono":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            pentaInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cilindro":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            cilindroInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "circulo":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            esphereInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cRectangle":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            dibuixaRectangleInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cArc":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            dibuixaArcInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cElipse":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            dibuixaElipseInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cPiramide3D":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            piramide3DInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cCub":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            dibuixaCubInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cuadrado":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            cuadratInfo(context, color, gruix, tipuslin, tipuslin2);
            break;
    }


}

function colorpicker(id) {
    var color = null;



    if (id == 0) {
        color = "blue";
    }
    if (id == 1) {
        color = "yellow";
    }
    if (id == 2) {
        color = "purple";
    }
    if (id == 3) {
        color = "red";
    }
    console.log(color);

    switch (figuraSeleccionada) {
        case "cRectangle":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");

            dibuixaRectangleInfo(context, color, gruix, tipuslin, tipuslin2);
            break;


        case "triangulo":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            triangleInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "pentagono":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            pentaInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cilindro":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            cilindroInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "circulo":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            esphereInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cRectangle":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            dibuixaRectangleInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cArc":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            dibuixaArcInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cElipse":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            dibuixaElipseInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cPiramide3D":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            piramide3DInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cCub":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            dibuixaCubInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cuadrado":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            cuadratInfo(context, color, gruix, tipuslin, tipuslin2);
            break;
    }
}

function tipuslinea(idT) {
    var color = null;


    if (idT == 0) {
        tipuslin = "0";
        tipuslin2 = "0";
    }
    if (idT == 1) {
        tipuslin = "1";
        tipuslin2 = "5";

    }
    if (idT == 2) {
        tipuslin = "12";
        tipuslin2 = "4";

    }

    console.log(tipuslin);
    console.log(figuraSeleccionada);


    switch (figuraSeleccionada) {
        case "cRectangle":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");

            dibuixaRectangleInfo(context, color, gruix, tipuslin, tipuslin2);
            break;


        case "triangulo":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            triangleInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "pentagono":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            pentaInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cilindro":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            cilindroInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "circulo":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            esphereInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cRectangle":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            dibuixaRectangleInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cArc":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            dibuixaArcInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cElipse":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            dibuixaElipseInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cPiramide3D":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            piramide3DInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cCub":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            dibuixaCubInfo(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cuadrado":
            var sample = document.getElementById(figuraSeleccionada);
            var context = sample.getContext("2d");
            cuadratInfo(context, color, gruix, tipuslin, tipuslin2);
            break;
    }
}

function colorLletra(valor) {

    colorLletraSeleccionat = colorsLletra[valor];
    console.log("gruix: " + gruix);

    console.log("Color lletra seleccionat " + colorLletraSeleccionat);

    pintaFigura();

}

function gruixLletra(valor) {
    gruiLletraSeleccionat = gruixosLletra[valor];
    console.log("Gruixos lletra seleccionat " + gruiLletraSeleccionat);

    pintaFigura();
}
function pintaFigura() {

    var context = obtenirContext();

    cuadratInfo(context);

    switch (figuraSeleccionada) {
        case "cRectangle":
            dibuixaRectangleInfo(context);
            break;

        case "triangulo":
            triangleInfo(context);
            break;

        case "pentagono":
            pentaInfo(context);
            break;

        case "cilindro":
            cilindroInfo(context);
            break;

        case "circulo":
            esphereInfo(context);
            break;

        case "cRectangle":
            dibuixaRectangleInfo(context);
            break;


        case "cArc":
            dibuixaArcInfo(context);
            break;

        case "cElipse":
            dibuixaElipseInfo(context);
            break;

        case "cPiramide3D":
            piramide3DInfo(context);
            break;

        case "cCub":
            dibuixaCubInfo(context);
            break;


        case "cuadrado":
            cuadratInfo(context);
            break;

    }

}

function obtenirContext() {
    var element = document.getElementById(figuraSeleccionada);
    var context = element.getContext("2d");
    return context;
}

function pintaNormal() {

    var element = document.getElementById(figuraSeleccionada);
    var context = element.getContext("2d");
    tipuslin = 0;
    tipuslin2 = 0;

    switch (figuraSeleccionada) {
        case "cRectangle":

            dibuixaRectangle(context, color, gruix, tipuslin, tipuslin2);
            break;


        case "triangulo":
            triangle(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "pentagono":
            penta(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cilindro":
            cilindro(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "circulo":
            esphere(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cRectangle":
            dibuixaRectangle(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cArc":
            dibuixaArc(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cElipse":
            dibuixaElipse(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cPiramide3D":
            piramide3D(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cCub":
            dibuixaCub(context, color, gruix, tipuslin, tipuslin2);
            break;

        case "cuadrado":
            square(context, color, gruix, tipuslin, tipuslin2);
            break;
    }
}


/**Funció que mostra el canvas amb la informació amb la figura geomètrica */
function pintaInfo() {


    var element = document.getElementById(figuraSeleccionada);
    var context = element.getContext("2d");

    var tipuslin = 0;
    var tipuslin2 = 0;



    switch (figuraSeleccionada) {
        case "cRectangle":
            dibuixaRectangleInfo(context);
            break;

        case "triangulo":
            triangleInfo(context);
            break;

        case "pentagono":
            pentaInfo(context);
            break;

        case "cilindro":
            cilindroInfo(context, "white", 4, 0, 0);
            break;

        case "circulo":
            esphereInfo(context);
            break;

        case "cRectangle":
            dibuixaRectangleInfo(context);
            break;


        case "cArc":
            dibuixaArcInfo(context);
            break;

        case "cElipse":
            dibuixaElipseInfo(context);
            break;

        case "cPiramide3D":
            piramide3DInfo(context);
            break;

        case "cCub":
            dibuixaCubInfo(context);
            break;


        case "cuadrado":
            cuadratInfo(context);
            break;

    }


}



function square(context1, color, gruix, tipuslin, tipuslin2) {
    console.log("squre gruix: " + gruix);
    context1.beginPath();


    context1.lineWidth = gruix;
    context1.globalAlpha = 0.8;
    context1.strokeStyle = color;
    context1.setLineDash([tipuslin, tipuslin2]);
    context1.rect(60, 60, 140, 140);
    context1.clearRect(0, 0, 300, 300);

    context1.stroke();
    context1.closePath();

}

function cuadratInfo(context1, color, gruix, tipuslin, tipuslin2) {
    square(context1, color, gruix, tipuslin, tipuslin2);

    context1.beginPath();
    context1.setLineDash([tipuslin, tipuslin2]);

    context1.lineWidth = "1.5";
    context1.strokeStyle = color;
    context1.setLineDash([2, 2]);
    context1.moveTo(125, 200);
    context1.lineTo(125, 220);
    context1.stroke();

    context1.beginPath();
    context1.lineWidth = "1.5";
/*     context1.setLineDash([2, 2]); 
 */    context1.moveTo(200, 125);
    context1.lineTo(220, 125);
    context1.stroke();

    context1.beginPath();
    context1.globalAlpha = 0.8;
    context1.font = gruiLletraSeleccionat + "vw Mr-Chalk";
    context1.fillStyle = colorLletraSeleccionat;
    context1.fillText("Base", 105, 240);
    context1.stroke();

    context1.beginPath();
    context1.globalAlpha = 0.6;
    context1.font = gruiLletraSeleccionat + "vw Mr-Chalk";
    context1.fillStyle = colorLletraSeleccionat;
    context1.fillText("Altura", 220, 130);
    context1.stroke();




}


function triangle(context2, color, gruix, tipuslin, tipuslin2) {

    context2.beginPath();
    context2.lineWidth = gruix;
    context2.globalAlpha = 0.8;
    context2.clearRect(0, 0, 300, 300);
    context2.setLineDash([tipuslin, tipuslin2]);
    context2.moveTo(125, 60);
    context2.lineTo(50, 200);
    context2.lineTo(200, 200);
    context2.strokeStyle = color;

    context2.closePath();
    context2.stroke();



}

function triangleInfo(context2, color, gruix, tipuslin, tipuslin2) {
    triangle(context2, color, gruix, tipuslin, tipuslin2);
    context2.beginPath();
    context2.lineWidth = "1.5";
    context2.setLineDash([2, 2]);
    context2.ellipse(125, 80, 9, 5, 0, 3, 2 * Math.PI, true);
    context2.stroke();

    context2.beginPath();
    context2.moveTo(125, 75);
    context2.lineTo(85, 50);
    context2.closePath();
    context2.stroke();

    context2.beginPath();
    context2.globalAlpha = 0.6;
    context2.font = gruiLletraSeleccionat + "vw Mr-Chalk";
    context2.fillStyle = colorLletraSeleccionat;
    context2.fillText("Angle", 55, 50);
    context2.stroke();

    context2.beginPath();
    context2.lineWidth = "1.5"
    context2.strokeStyle = color
    context2.setLineDash([2, 2]);
    context2.moveTo(125, 200);
    context2.lineTo(125, 220);
    context2.stroke();

    context2.beginPath();
    context2.globalAlpha = 0.6;
    context2.font = gruiLletraSeleccionat + "vw Mr-Chalk";
    context2.fillStyle = colorLletraSeleccionat;
    context2.fillText("Base", 105, 240);
    context2.stroke();





}

function penta(context3, color, gruix, tipuslin, tipuslin2) {

    context3.beginPath();
    context3.lineWidth = gruix;
    context3.strokeStyle = color;
    context3.globalAlpha = 0.8;
    context3.clearRect(0, 0, 300, 300);
    context3.setLineDash([tipuslin, tipuslin2]);
    context3.moveTo(125, 60);
    context3.lineTo(40, 120);
    context3.lineTo(70, 200);
    context3.lineTo(187.5, 200);
    context3.lineTo(210, 120);
    context3.lineTo(125, 60);
    context3.stroke();



}

function pentaInfo(context3, color, gruix, tipuslin, tipuslin2) {
    penta(context3, color, gruix, tipuslin, tipuslin2);
    context3.beginPath();
    context3.lineWidth = "1.5"
    context3.setLineDash([2, 2]);
    context3.moveTo(125, 140);
    context3.lineTo(125, 200);
    context3.stroke();

    context3.beginPath();
    context3.globalAlpha = 0.6;
    context3.font = gruiLletraSeleccionat + "vw Mr-Chalk";
    context3.fillStyle = colorLletraSeleccionat;
    context3.fillText("Apotema", 90, 125);
    context3.stroke();

}

function cilindro(context4, color, gruix, tipuslin, tipuslin2) {
    var radians = (Math.PI / 180) * 50;
    context4.beginPath();
    context4.lineWidth = gruix;
    context4.globalAlpha = 0.8;
    context4.strokeStyle = color;

    context4.clearRect(0, 0, 300, 300);
    context4.setLineDash([tipuslin, tipuslin2]);


    context4.ellipse(125, 60, 45, 9, 0, 0, 2 * Math.PI, true);
    context4.stroke();

    context4.beginPath();
    context4.lineWidth = gruix;
    context4.setLineDash([tipuslin, tipuslin2]);
    context4.globalAlpha = 0.8;
    context4.moveTo(80, 60);
    context4.lineTo(80, 190);
    context4.stroke();

    context4.beginPath();
    context4.lineWidth = gruix;
    context4.setLineDash([tipuslin, tipuslin2]);
    context4.globalAlpha = 0.8;
    context4.moveTo(170, 60);
    context4.lineTo(170, 190);
    context4.stroke();

    context4.beginPath();
    context4.lineWidth = gruix;
    context4.setLineDash([tipuslin, tipuslin2]);
    context4.globalAlpha = 0.8;
    context4.ellipse(125, 190, 45, 9, 0, 3, 2 * Math.PI, true);
    context4.stroke();

    context4.beginPath();
    context4.lineWidth = "1.5";
    context4.globalAlpha = 0.8;
    context4.setLineDash([2, 2]);
    context4.beginPath();
    context4.ellipse(125, 190, 45, 9, 0, 0, 2 * Math.PI, true);
    context4.stroke();



}

function cilindroInfo(context4, color, gruix, tipuslin) {
    cilindro(context4, color, gruix, tipuslin);
    context4.beginPath();
    context4.lineWidth = "1.5";
    context4.globalAlpha = 0.8;
    context4.setLineDash([2, 2]);
    context4.moveTo(170, 125);
    context4.lineTo(190, 125);
    context4.stroke();

    context4.beginPath();
    context4.lineWidth = "1.5";
    context4.globalAlpha = 0.8;
    context4.setLineDash([2, 2]);
    context4.moveTo(125, 190);
    context4.lineTo(77, 190);
    context4.stroke();

    context4.beginPath();
    context4.globalAlpha = 0.6;
    context4.font = gruiLletraSeleccionat + "vw Mr-Chalk";
    context4.fillStyle = colorLletraSeleccionat;
    context4.fillText("Radi", 110, 223);
    context4.stroke();

    context4.beginPath();
    context4.globalAlpha = 0.6;
    context4.font = gruiLletraSeleccionat + "vw Mr-Chalk";
    context4.fillStyle = colorLletraSeleccionat;
    context4.fillText("Altura", 195, 130);
    context4.stroke();


}
function esphere(context5, color, gruix, tipuslin, tipuslin2) {
    context5.beginPath();
    context5.lineWidth = gruix;
    context5.globalAlpha = 0.8;
    context5.strokeStyle = color;

    context5.clearRect(0, 0, 300, 300);
    context5.setLineDash([tipuslin, tipuslin2]);

    context5.setLineDash([tipuslin, tipuslin2]);
    context5.arc(125, 125, 75, 0, 2 * Math.PI);
    context5.stroke();

    context5.beginPath();
    context5.lineWidth = gruix;
    context5.globalAlpha = 0.8;
    context5.ellipse(125, 125, 75, 25, 0, 3, 2 * Math.PI, true);
    context5.stroke();


    context5.beginPath();
    context5.lineWidth = "1.5";
    context5.globalAlpha = 0.8;
    context5.setLineDash([2, 2]);
    context5.ellipse(125, 125, 75, 25, 0, 0, 2 * Math.PI, true);
    context5.stroke();
}

function esphereInfo(context5, color, gruix, tipuslin, tipuslin2) {
    esphere(context5, color, gruix);
    context5.beginPath();
    context5.lineWidth = "1.5";
    context5.setLineDash([tipuslin, tipuslin2]);
    context5.moveTo(125, 125);
    context5.lineTo(85, 144);
    context5.stroke();

    context5.beginPath();
    context5.lineWidth = "1.5";
    context5.setLineDash([2, 2]);
    context5.moveTo(125, 125);
    context5.lineTo(125, 50);
    context5.stroke();


    context5.beginPath();
    context5.globalAlpha = 0.6;
    context5.font = gruiLletraSeleccionat + "vw Mr-Chalk";
    context5.fillStyle = colorLletraSeleccionat;
    context5.fillText("Radi", 130, 130);
    context5.stroke();

}

function dibuixaRectangle(context, color, gruix, tipuslin, tipuslin2) {
    context.beginPath();
    context.lineWidth = gruix;
    context.globalAlpha = 0.8;
    context.strokeStyle = color;
    context.clearRect(0, 0, 300, 300);
    context.setLineDash([tipuslin, tipuslin2]);
    context.rect(20, 50, 200, 100);

    context.stroke();
    context.save();
    // document.getElementById("textRectangle").innerHTML= "Rectangle";

    // escriuTitol(context, "Rectangle");
}

function dibuixaRectangleInfo(context, color, gruix, tipuslin, tipuslin2) {
    dibuixaRectangle(context, color, gruix, tipuslin, tipuslin2);


    context.beginPath();
    context.lineWidth = "1.5";
    context.strokeStyle = color;
    context.setLineDash([2, 2]);
    context.moveTo(125, 150);
    context.lineTo(125, 175);
    context.stroke();

    context.beginPath();
    context.lineWidth = "1.5";
    context.setLineDash([2, 2]);
    context.moveTo(220, 100);
    context.lineTo(240, 100);
    context.stroke();

    context.beginPath();
    context.globalAlpha = 0.6;
    context.font = gruiLletraSeleccionat + "vw Mr-Chalk";
    context.fillStyle = colorLletraSeleccionat;
    context.fillText("Base", 105, 190);
    context.stroke();

    context.beginPath();
    context.globalAlpha = 0.6;
    context.font = gruiLletraSeleccionat + "vw Mr-Chalk";
    context.fillStyle = colorLletraSeleccionat;
    context.fillText("Altura", 240, 105);
    context.stroke();


}
function dibuixaArc(context, color, gruix, tipuslin, tipuslin2) {
    var radians = (Math.PI / 180) * 50;
    context.beginPath();
    context.lineWidth = gruix;
    context.globalAlpha = 0.8;
    context.strokeStyle = color;

    context.clearRect(0, 0, 300, 300);
    context.setLineDash([tipuslin, tipuslin2]);
    context.arc(110, 100, 80, 0, 2 * Math.PI);
    context.stroke();
    context.save();
    //document.getElementById("textArc").innerHTML= "Arc";


    //escriuTitol(context, "Cercle");

    var arc = document.getElementById("cArc");

    var height = window.getComputedStyle(arc, null).getPropertyValue("height");
    var x = window.getComputedStyle(arc, null).getPropertyValue("left");
    /* console.log(height);
    console.log(x); */

}

function dibuixaArcInfo(context, color, gruix, tipuslin, tipuslin2) {
    dibuixaArc(context, color, gruix, tipuslin, tipuslin2);
    context.beginPath();
    context.lineWidth = "1.5";
    context.strokeStyle = color;
    context.setLineDash([2, 2]);
    context.moveTo(110, 105);
    context.lineTo(30, 105);
    context.stroke();

    context.beginPath();
    context.globalAlpha = 0.6;
    context.font = gruiLletraSeleccionat + "vw Mr-Chalk";
    context.fillStyle = colorLletraSeleccionat;
    context.fillText("Radi", 80, 95);
    context.stroke();




}
function dibuixaElipse(context, color, gruix, tipuslin, tipuslin2) {
    context.beginPath();
    context.lineWidth = gruix;
    context.globalAlpha = 0.8;
    context.strokeStyle = color;


    context.clearRect(0, 0, 300, 300);
    context.setLineDash([tipuslin, tipuslin2]);


    context.ellipse(110, 100, 100, 60, 0, 0, 2 * Math.PI, true);
    //document.getElementById("textElipse").innerHTML= "Elipse";
    context.stroke();
    context.save();


    //escriuTitol(context, "Elipse");
}







function dibuixaElipseInfo(context, color, gruix, tipuslin, tipuslin2) {
    dibuixaElipse(context, color, gruix, tipuslin, tipuslin2);
    context.beginPath();
    context.lineWidth = "4";
    context.globalAlpha = 0.8;
    context.fillStyle = color;
    context.arc(70, 100, 3, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.lineWidth = "4";
    context.globalAlpha = 0.8;
    context.fillStyle = color;
    context.arc(150, 100, 3, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.globalAlpha = 0.6;
    context.font = gruiLletraSeleccionat + "vw Mr-Chalk";
    context.fillStyle = colorLletraSeleccionat;
    context.fillText("Foco 1", 40, 90);
    context.stroke();


    context.beginPath();
    context.globalAlpha = 0.6;
    context.font = gruiLletraSeleccionat + "vw Mr-Chalk";
    context.fillStyle = colorLletraSeleccionat;
    context.fillText("Foco 2", 120, 90);
    context.stroke();

}



function piramide3D(context, color, gruix, tipuslin, tipuslin2) {
    context.beginPath();


    /******
     * 
     * 
     *              a1
     * 
     * 
     *      a4      a5
     * 
     *            a3          a2
     * 
     * 
     * 
     */
    //a1
    var a1x = 100;
    var a1y = 10;


    //a2
    var a2x = 175;
    var a2y = 170;

    //a3
    var a3x = 80;
    var a3y = 180;

    //a4
    var a4x = 30;
    var a4y = 150;

    //a5
    var a5x = 115;
    var a5y = 140;



    context.clearRect(0, 0, 300, 300);
    context.setLineDash([tipuslin, tipuslin2]);

    dibuixaLinia(context, a1x, a1y, a2x, a2y); //lateral dret  
    context.lineWidth = gruix;
    context.globalAlpha = 0.8;
    context.strokeStyle = color;


    context.stroke();


    //barra horitzontal inferior
    context.beginPath();
    context.lineWidth = gruix;
    context.globalAlpha = 0.8;
    dibuixaLinia(context, a2x, a2y, a3x, a3y);

    context.stroke();


    //costat vertical esquerre
    context.beginPath();
    context.lineWidth = gruix;
    context.globalAlpha = 0.8;

    dibuixaLinia(context, a1x, a1y, a3x, a3y);
    context.stroke();


    //Vertical darrere
    context.beginPath();
    context.lineWidth = gruix;
    context.globalAlpha = 0.8;

    dibuixaLinia(context, a3x, a3y, a4x, a4y);
    context.stroke();




    context.beginPath();
    context.lineWidth = gruix;
    context.globalAlpha = 0.8;
    dibuixaLinia(context, a4x, a4y, a1x, a1y);
    context.stroke();


    //Discontinua esquerra
    context.setLineDash([2, 2]);
    context.beginPath();
    context.lineWidth = "1.5";

    dibuixaLinia(context, a4x, a4y, a5x, a5y);
    context.stroke();

    //Horitzontal discontinua dreta
    context.setLineDash([2, 2]);
    context.beginPath();
    dibuixaLinia(context, a2x, a2y, a5x, a5y);
    context.stroke();


    //vertical discontinua
    context.setLineDash([2, 2]);
    context.beginPath();


    dibuixaLinia(context, a5x, a5y, a1x, a1y);

    context.stroke();
    context.save();

    //escriuTitol(context, "Piràmide");


    //document.getElementById("textPiramide3D").innerHTML= "Piràmide";
}

function piramide3DInfo(context, color, gruix, tipuslin, tipuslin2) {
    piramide3D(context, color, gruix, tipuslin, tipuslin2);
    context.beginPath();
    context.lineWidth = "1.5";
    context.setLineDash([2, 2]);
    context.moveTo(125, 180);
    context.lineTo(125, 210);
    context.stroke();

    context.beginPath();
    context.lineWidth = "1.5";
    context.setLineDash([2, 2]);
    context.moveTo(175, 170);
    context.lineTo(175, 10);
    context.lineTo(95, 10);


    context.stroke();

    context.beginPath();
    context.globalAlpha = 0.6;
    context.font = gruiLletraSeleccionat + "vw Mr-Chalk";
    context.fillStyle = colorLletraSeleccionat;
    context.fillText("Base", 105, 230);
    context.stroke();

    context.beginPath();
    context.globalAlpha = 0.6;
    context.font = gruiLletraSeleccionat + "vw Mr-Chalk";
    context.fillStyle = colorLletraSeleccionat;
    context.fillText("Altura", 185, 100);
    context.stroke();

}


function dibuixaCub(context, color, gruix, tipuslin, tipuslin2) {




    context.beginPath();
    context.lineWidth = gruix;
    context.globalAlpha = 0.8;
    context.strokeStyle = color;
    context.clearRect(0, 0, 300, 300);
    context.rect(60, 60, 100, 100); //dibuja cuadrado principal
    context.moveTo(60, 161);//me posiciono en el vertice inferior izquierdo del cuadrado para dibujar la cara del cuadrado izquierda
    context.lineTo(30, 125);//dibujo la linea de abajo de la cara izquierda
    context.lineTo(30, 30);//dibujo la linea de la altura de la cara izquierda
    context.lineTo(62, 62);//dibujo la linea para unir la cara izquiera con el vertice de superior izquierdo del cuadrado
    context.moveTo(28, 28);//me posiciono en la en el vertice izquierdo del cuadrado de la izquierda
    context.lineTo(125, 28);//hago la linea superior de todas
    context.lineTo(161, 60); //uno para cerrar el cuadrado superior
    context.setLineDash([tipuslin, tipuslin2]);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineWidth = "1.5";
    context.globalAlpha = 0.8;
    context.strokeStyle = color;

    context.moveTo(30, 125);
    context.lineTo(125, 125);
    context.lineTo(160, 161);
    context.moveTo(125, 125);
    context.lineTo(125, 30);
    context.setLineDash([2, 2]);

    context.stroke();
    context.closePath();








    //document.getElementById("textCub").innerHTML ="Cub";


    //escriuTitol(context, "Cub");
}

function dibuixaCubInfo(context, color, gruix, tipuslin) {
    dibuixaCub(context, color, gruix, tipuslin);
    context.beginPath();
    context.lineWidth = "1.5";
    context.setLineDash([2, 2]);
    context.moveTo(140, 180);
    context.lineTo(140, 210);
    context.stroke();

    context.beginPath();
    context.lineWidth = "1.5";
    context.setLineDash([2, 2]);
    context.moveTo(185, 125);
    context.lineTo(215, 125);
    context.stroke();

    context.beginPath();
    context.globalAlpha = 0.6;
    context.font = gruiLletraSeleccionat + "vw Mr-Chalk";
    context.fillStyle = colorLletraSeleccionat;
    context.fillText("Base", 120, 230);
    context.stroke();

    context.beginPath();
    context.globalAlpha = 0.6;
    context.font = gruiLletraSeleccionat + "vw Mr-Chalk";
    context.fillStyle = colorLletraSeleccionat;
    context.fillText("Altura", 220, 130);
    context.stroke();
}


function dibuixaLinia(context, moveToX, moveToY, lineToX, lineToY) {
    context.moveTo(moveToX, moveToY);

    context.lineTo(lineToX, lineToY);

    return context;
}



function escriuTitol(context, text) {
    context.font = "25px Comic Sans MS";
    context.fillStyle = "#007BFF";
    context.textAlign = "end";
    context.fillText(text, 160, 230);
}
