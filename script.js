document.addEventListener("DOMContentLoaded", function() {
  let btnEncriptar = document.getElementById("btnEncriptar");
  let btnDesencriptar = document.getElementById("btnDesencriptar");
  let btnCopiar = document.getElementById("copy");
  var textArea = document.getElementById("textArea");
  var textArea2 = document.getElementById("encriptadoArea");

  btnEncriptar.addEventListener("click", encriptar);
  btnDesencriptar.addEventListener("click", desencriptar);
  btnCopiar.addEventListener("click", copyText);

  textArea.addEventListener("input", function(event) {
    // Normaliza y convierte el texto a minúsculas
    var sanitizedText = textArea.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    textArea.value = sanitizedText;
  });

  function encriptar() {
    // Verifica y obtiene el contenido del textarea
    checkTextarea();
    getContentAndCheck();

    // Encripta el texto capturado según las reglas establecidas
    let textCapturado = textArea.value.toLowerCase();
    var textoEncriptado = textCapturado.replace(/e/igm, "enter")
                                      .replace(/i/igm, "imes")
                                      .replace(/a/igm, "ai")
                                      .replace(/o/igm, "ober")
                                      .replace(/u/igm, "ufat");

    textArea2.value = textoEncriptado;
  }

  function desencriptar() {
    // Verifica y obtiene el contenido del textarea
    checkTextarea();
    getContentAndCheck();

    // Desencripta el texto encriptado según las reglas establecidas
    let textoEncriptado = textArea2.value.toLowerCase();
    var textoDesencriptado = textoEncriptado.replace(/enter/igm, "e")
                                            .replace(/imes/igm, "i")
                                            .replace(/ai/igm, "a")
                                            .replace(/ober/igm, "o")
                                            .replace(/ufat/igm, "u");

    textArea2.value = textoDesencriptado;
  }

  function checkTextarea() {
    // Verifica si el textarea tiene contenido y habilita/deshabilita un elemento según sea necesario
    var textarea = document.getElementById('textArea');
    var divToDisable = document.getElementById('container');

    if (textarea.value.trim() !== '') {
      divToDisable.classList.add('disabled');
    } else {
      divToDisable.classList.remove('disabled');
    }
  }

  function getContentAndCheck() {
    // Obtiene el contenido del textarea y realiza la verificación
    var textarea = document.getElementById('textArea').value;
    console.log('Contenido del textarea:', textarea);
    checkTextarea();
  }

  function copyText() {
    // Copia el texto en el área de texto de destino al portapapeles
    var textarea = document.getElementById('encriptadoArea');
    textarea.select();
    document.execCommand('copy');
    
    // Muestra una notificación de éxito con SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Texto copiado',
      text: 'El texto ha sido copiado al portapapeles.',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false
    });
  }
});
