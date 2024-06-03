listaDeCompras = [];
let campoTotal = document.getElementById('valor-total');
let totalGeral;
limpar();


function adicionar(){
    //recuperar valores, nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let subTotal = valorUnitario * quantidade;
    //adicionar a lsista
    let carrinho = document.getElementById('lista-produtos')
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}X</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
    </section>`
    //somar os subtotais 
    totalGeral = totalGeral + subTotal;
    campoTotal.textContent = (`R$ ${totalGeral}`);
    document.getElementById('quantidade').value = 0;
}


function limpar(){
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').innerHTML = '';
  totalGeral = 0;
}