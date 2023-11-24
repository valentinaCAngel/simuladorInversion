function inversion(){

    //1. ocultar la imagen y mostar el panel con los datos  de la simulacion
    const preCont = document.querySelector(".pre-simulation");
    const postCont = document.querySelector(".post-simulation");

    postCont.classList.remove("disabled");
    preCont.classList.add("disabled");

    //2.capturamos sy mostramos los datos que no se calculan
    const campoNombres = document.getElementById("nombres").value;
    const campoEmail = document.getElementById("email").value;
    const nombreShow = document.getElementById("nombres-show");
    const emailShow = document.getElementById("email-show");

    nombreShow.innerText =  campoNombres;
    emailShow.innerText = campoEmail;

    //3. capturamos los daros de inversion y tiempo ccreamos las variables de ganancia y ganancia  total

    const inversion  = document.getElementById("inversion").value;
    const tiempo = document.getElementById("tiempo").value;
    const gananciasShow = document.getElementById("total-show");
    const totalShow = document.getElementById("ganancia-show");
    const tiempoShow = document.getElementById("tiempo-show");
    const interesShow = document.getElementById("interes-show")

    let ganancia = 0;
    let gananciaTotal = 0;

    //4. validamos o comparamos el tiempo de inversion segun este  mostramos la ganancia el total y los demas datos
//switch valida los casos de un mismo valor -un solo valor. if((a==b) and (a==c))

    switch (tiempo) {

        case "1":

        ganancia = (inversion * 0.8) / 100 * 12;
            
        gananciaTotal = parseInt(inversion) + parseInt(ganancia);

        totalShow.innerText = ganancia;
        gananciasShow.innerText = gananciaTotal;
        tiempoShow.innerText = "12 MESES";
        interesShow.innerText = "0.8%";
        

            break;
    
        case "2":

        ganancia = (inversion * 1.3)/100*24;
        gananciaTotal = parseInt(inversion) + parseInt(ganancia);

        totalShow.innerText = ganancia;
        gananciasShow.innerText = gananciaTotal;
        tiempoShow.innerText = "2 años";
        interesShow.innerText = "1.3%";
            
            break;
        case "3":
            
        ganancia = (inversion * 1.7)/100*36;
        gananciaTotal = parseInt(inversion) + parseInt(ganancia);

        totalShow.innerText = ganancia;
        gananciasShow.innerText = gananciaTotal;
        tiempoShow.innerText = "3 años";
        interesShow.innerText = "1.7%"
            break;
    
    }
}



