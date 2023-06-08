var btnEncriptar = document.querySelector(".btnEncriptar");
var btnDesencriptar = document.querySelector(".btnDesencriptar");
var btnCopiar = document.querySelector(".btnCopiar");
var textoEncriptar = document.querySelector(".texto");
var resultadoTexto = document.querySelector(".resultadoTexto");
var imgMunieco = document.querySelector(".imgMunieco");
var containerMensajes = document.querySelector(".containerMensajes")



function ocultarParrafo(){
    resultadoTexto.style.display = 'none';
    btnCopiar.style.display = 'none'
    imgMunieco.style.display = 'block';
    containerMensajes.style.display = 'block'
}

function mostrarParrafo(){
    resultadoTexto.style.display = 'block';
    imgMunieco.style.display = 'none';
    containerMensajes.style.display = 'none'
    btnCopiar.style.display = 'block'
}

function encriptar(){
    let texto = textoEncriptar.value;

    if(texto == ""){
        alert("Debe ingresar un texto")
    }
    else{
        let mapa = {
            'a': 'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat'
        };

        let resultado = texto.replace(/[aeiou]/g, function(match) {
            return mapa[match] || match;
        });

        mostrarParrafo();
        resultadoTexto.textContent = resultado
    }
}

function desencriptar(){
    let texto = textoEncriptar.value;
    if(texto == ""){
        alert("Debe ingresar un texto")
    }
    else{
        let mapa = {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
        };

        let resultado = texto.replace(/ai|enter|imes|ober|ufat/g, function(match) {
            return mapa[match] || match;
        });

        mostrarParrafo()
        resultadoTexto.textContent = resultado
    }
    
}

function copiarTextoEncriptado(){
    navigator.clipboard.writeText(resultadoTexto.textContent)
    .then( () => {
        resultadoTexto.textContent = ""
        ocultarParrafo()
    })
    .catch( (error) => {
        console.log("Hubo un error al copiar")
    })
}

btnCopiar.addEventListener('click', function(){
    copiarTextoEncriptado();
})

btnEncriptar.addEventListener('click', function(){
    encriptar();
})

btnDesencriptar.addEventListener('click', function(){
    desencriptar();
})