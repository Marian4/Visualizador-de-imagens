var imagemExibicao = document.getElementById("imagemExibicao");
var div = document.getElementById("containerImagem");
var div2 = document.getElementById("imagens");
var infoImagem = document.getElementById("infoImagem");

function mudarImagem(imagem){
    div.style.display = 'block';
    div2.style.width = '50%' ;
    var largura = imagem.naturalWidth;
    var altura = imagem.naturalHeight;
    imagemExibicao.src = imagem.src;
    infoImagem.innerHTML = imagem.title + " " + largura + "x" + altura;
}

function fecharImagem(){
    imagemExibicao.src = "";
    infoImagem.innerHTML = "";
    div.style.display = 'none';
    div2.style.width = '100%' ;
}
function ImagePreview(input)
{

    if (input.files && input.files[0])
    {

        var r = new FileReader();

        r.onload = function(e)
        {
            $("#img_preview").show();
            $("#img_preview").attr("src", e.target.result);
        }

        r.readAsDataURL(input.files[0]);

    }
}

$().ready(function() {

    hide_empty_image = false;
    set_blank_to_empty_image = false;
    set_image_border = true;

    if (hide_empty_image)
        $("#img_preview").hide();

    if (set_blank_to_empty_image)
        $("#img_preview").attr("src","data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");

    if (set_image_border)
        $("#img_preview").css("border", "1px solid #05bbcc");
  
    $("#img_preview").css("width", "150px");
    $("#img_preview").css("height", "150px");

    $("#img_input").change(function(){
        ImagePreview(this);
    });

});