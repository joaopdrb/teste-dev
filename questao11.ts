class Produto {
 id: number;
 descricao: string;
 quantidadeEstoque: number;

 constructor(id: number, descricao: string, quantidadeEstoque: number) {
   this.id = id;
   this.descricao = descricao;
   this.quantidadeEstoque = quantidadeEstoque;
 }
}

class Verdureira {
 produtos: Produto[];

 constructor() {
   this.produtos = [
      new Produto(1, 'Maçã', 20),
      new Produto(2, 'Laranja', 0),
      new Produto(3, 'Limão', 20)
    ];
 }

 novaVerdureira = new Verdureira();

 getDescricaoProduto(produtoId: any) {
   for (let i = 0; i < this.novaVerdureira.produtos.length; i++) {
     if (this.novaVerdureira.produtos[i].id == produtoId) {
       return this.novaVerdureira.produtos[i].id + ' - ' + this.novaVerdureira.produtos[i].descricao + ' (' + this.novaVerdureira.produtos[i].quantidadeEstoque + 'x)';
     }
   }
   
 }

 hasEstoqueProduto(produtoId: any) {
   for (let i = 0; i < this.novaVerdureira.produtos.length; i++) {
     if (this.novaVerdureira.produtos[i].id == produtoId && this.novaVerdureira.produtos[i].quantidadeEstoque > 0) {
       return true;
     }
     else {
       return false;
     }

   }
  
 }
}
