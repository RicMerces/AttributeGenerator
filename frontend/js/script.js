slider1.disabled = false

slider1.addEventListener("mousemove", function testar() {
    var x = slider1.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider1.style.background = color;


})

n1 = 0
n2 = 0
n3 = 0
n4 = 0
n5 = 0
n6 = 0
n7 = 0
n8 = 0
n9 = 0
n10 = 0





function testar() {

    pontDisp.value = 0
    pontDisp.innerHTML = pontDisp.value

    valores = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10]
    pontosDisponiveis = 100
    while (pontosDisponiveis > 0) {
        indice = Math.floor(Math.random() * 10);
        if (valores[indice] < 20) {
            valores[indice] += 1;
            pontosDisponiveis -= 1;
        }
    }

    output1.innerHTML = valores[0];
    slider1.value = valores[0];
    var x = slider1.value;



    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider1.style.background = color;

    slider1.oninput = function () {
        output1.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value

    }



    //-------------------------------------------------------------------

    output2.innerHTML = valores[1];
    slider2.value = valores[1];
    var x = slider2.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider2.style.background = color;

    slider2.oninput = function () {
        output2.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value



    }

    //-------------------------------------------------------------------

    output3.innerHTML = valores[2];
    slider3.value = valores[2];
    var x = slider3.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider3.style.background = color;

    slider3.oninput = function () {
        output3.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value

    }

    //-------------------------------------------------------------------

    output4.innerHTML = valores[3];
    slider4.value = valores[3];
    var x = slider4.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider4.style.background = color;

    slider4.oninput = function () {
        output4.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value

    }

    //-------------------------------------------------------------------

    output5.innerHTML = valores[4];
    slider5.value = valores[4];
    var x = slider5.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider5.style.background = color;

    slider5.oninput = function () {
        output5.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value

    }

    //-------------------------------------------------------------------

    output6.innerHTML = valores[5];
    slider6.value = valores[5];
    var x = slider6.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider6.style.background = color;

    slider6.oninput = function () {
        output6.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value

    }

    //-------------------------------------------------------------------

    output7.innerHTML = valores[6];
    slider7.value = valores[6];
    var x = slider7.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider7.style.background = color;

    slider7.oninput = function () {
        output7.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value

    }

    //-------------------------------------------------------------------

    output8.innerHTML = valores[7];
    slider8.value = valores[7];
    var x = slider8.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider8.style.background = color;

    slider8.oninput = function () {
        output8.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value

    }

    //-------------------------------------------------------------------

    output9.innerHTML = valores[8];
    slider9.value = valores[8];
    var x = slider9.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider9.style.background = color;

    slider9.oninput = function () {
        output9.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value

    }

    //-------------------------------------------------------------------

    output10.innerHTML = valores[9];
    slider10.value = valores[9];
    var x = slider10.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider10.style.background = color;

    slider10.oninput = function () {
        output10.innerHTML = this.value + " pts";
        v1 = valores[0] - slider1.value
        v2 = valores[1] - slider2.value
        v3 = valores[2] - slider3.value
        v4 = valores[3] - slider4.value
        v5 = valores[4] - slider5.value
        v6 = valores[5] - slider6.value
        v7 = valores[6] - slider7.value
        v8 = valores[7] - slider8.value
        v9 = valores[8] - slider9.value
        v10 = valores[9] - slider10.value
        pontDisp.value = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10
        pontDisp.innerHTML = pontDisp.value

    }



}