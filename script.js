// Seus scripts aqui

function datetime() {
  var title = document.getElementById('title');
  var now = new Date();
  
  title.innerHTML = title.innerHTML + ' (' + now.toLocaleTimeString() + ')';
}
$(document).ready(function () {
                 //Inicialmente desmarca o CheckBox
                 $('#chkPainel').removeAttr('checked');
                 // Inicialmente , oculta o textarea quando o form for carregado
                 $('#divChkPainel').hide();
                $('#chkPainel').change(function () {
                    if (this.checked) {
                    $('#divChkPainel').show();
                    }
                    else {
                    $('#divChkPainel').hide();
                   }
             });
             });

$(document).on("input", "#chkPainel", function() {
        var limite = 10000;
        var informativo = "caracteres restantes.";
        var caracteresDigitados = $(this).val().length;
        var caracteresRestantes = limite - caracteresDigitados;

        if (caracteresRestantes <= 0) {
            var chkPainel = $("textarea[name=comentario]").val();
            $("textarea[name=comentario]").val(comentario.substr(0, limite));
            $(".caracteres").text("0 " + informativo);
        } else {
            $(".caracteres").text(caracteresRestantes + " " + informativo);
        }
    });



function pr() {
          document.getElementById("resultado").innerHTML = "Nome: " + document.getElementById('nome').value + "- Sobrenome: " + document.getElementById('sobrenome').value + "- Idade: " + document.getElementById('idade').value + "- Data: " + document.getElementById('data').value + document.getElementById('divChkPainel').value  ;
}

datetime();
