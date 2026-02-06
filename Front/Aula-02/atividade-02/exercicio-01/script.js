function mudarDiv() {
    document.getElementById("conteudo").innerHTML = '<h1 style="color: white;">texto na div</h1>';
    document.getElementById("conteudo").style.backgroundColor = "black";
    
    let conteudo = document.getElementById("conteudo").innerHTML;

    console.log(conteudo)
}