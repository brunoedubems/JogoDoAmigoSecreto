let amigos = [];
let listaParaInserir = document.getElementById('listaAmigos');

function adicionarAmigo(){ 
    let amigoSelecionado = document.getElementById('amigo').value;

    if(amigoSelecionado == ''){
    alert('Por favor, insira um nome.');
    }else{
    let amigoSelecionado = document.getElementById('amigo').value;

    amigos.push(amigoSelecionado);    
    limparCampo();
    
    listaParaInserir.innerHTML = '';
    
    for (let nome = 0; nome < amigos.length; nome++) {
        let criandoLinha = document.createElement('li');

        criandoLinha.innerHTML = amigos[nome];
        listaParaInserir.appendChild(criandoLinha);

    }
} 
}

function limparCampo(){
    let amigoSelecionado = document.getElementById('amigo');
    amigoSelecionado.value = '';
}
