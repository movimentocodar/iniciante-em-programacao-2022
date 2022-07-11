# iniciante-em-programacao-2022

## Desafio

Desafio do módulo Iniciante em Programação do Movimento Codar 2022. Pratique lógica de programação com Javascript criando o jogo da velha!

## Pré-requisitos:

- Instale o [Git](https://git-scm.com/).
- Faça um fork desse projeto clicando no botão `Fork` no canto superior direito da página, conforme a imagem abaixo.

![Realizando o fork](https://docs.github.com/assets/images/help/repository/fork_button.png)

- Acesse o fork que você criou e faça o clone para a sua máquina. Clique primeiro no botão `Code` e depois copie a URL.

![Copiando a URL](https://docs.github.com/assets/images/help/repository/https-url-clone-cli.png)

- Realize o clone com o comando `git clone` + a URL copiada.
- Instale a IDE [Visual Studio Code](https://code.visualstudio.com)
- Instale o plugin [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no Visual Studio Code

![Instalando o plugin no VSCode](https://user-images.githubusercontent.com/6104963/178366265-c14bbb19-7176-422c-a7d6-ee506ab8a06e.png)

- Abra o projeto clonado no Visual Studio Code e clique em Go Live para visualizar a página.

![Abrindo a página no Go Live](https://user-images.githubusercontent.com/6104963/178366419-6773d3ac-e5a4-475b-91b5-6fcf7a7e9e73.png)

- Você conseguirá acessar a página do projeto através do navegador no endereço `http://127.0.0.1:5500`

## Resolvendo o desafio

O desafio consiste na implementação das regras do jogo da velha. 

A interface já está pronta, você precisa criar a lógica do jogo no arquivo `jogo-velha.js`.

As regras para esse jogo da velha são:

- O jogo acontece em uma grade de 3x3
- Dois jogadores, de forma alternada, marcam o seu símbolo em um dos 9 quadrados disponíveis (um será o `X` e o outro `O`)
- O jogador `X` inicia o jogo 
- O primeiro jogador a conseguir colocar seus três símbolos em sequência (linha, coluna ou diagonal) vence
- Se os 9 quadrados forem preenchidos sem que nenhum jogador consiga fazer a sequência então acontece um empate

Para ajudá-lo já existem algumas funções prontas:

```js

// Atualiza a área com a mensagem de resultado. Use para informar quem foi o ganhador ou se foi empate.
exibirResultado(mensagem);

// Desenha o símbolo na linha e coluna dos valores informados. Use para desenha o X e O nos quadrados.
desenharSimbolo(simbolo, posicaoLinha, posicaoColuna);

// Atualiza a mensagem do jogador ativo. Use para mostrar de quem é a vez.
marcarJogadorAtivo(simbolo);
```

Essas funções estão no arquivo `jogo.js` mas você não precisa alterá-lo.