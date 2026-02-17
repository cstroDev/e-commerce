# Fre-commerce - Sistema de Caixa

Este é um sistema de caixa simples, desenvolvido em JavaScript para Node.js, que simula o depósito de notas em um e-commerce fictício. O sistema calcula a quantidade total de notas e o valor monetário total depositado, respeitando um limite de capacidade.

## 📋 Requisitos do Sistema

O projeto foi desenvolvido para atender aos seguintes requisitos:

1.  **Notas Aceitas:** O sistema aceita apenas notas nos valores de R$5, R$10, R$20, R$50, R$100 e R$200.
2.  **Entrada de Dados:** O sistema solicita ao usuário que informe a quantidade de notas para cada valor, uma de cada vez, em sequência.
3.  **Validação de Capacidade:** O programa valida se a soma da quantidade de todas as notas inseridas não ultrapassa o limite de 200 notas. Se o limite for excedido, a última entrada é invalidada e o sistema solicita a quantidade novamente.
4.  **Cálculo Final:** Ao final da operação, o programa calcula e exibe a quantidade total de notas inseridas e o valor monetário final depositado.
5.  **Encerramento:** A operação termina quando todas as quantidades de notas são inseridas, ou se o usuário digitar `-1` em qualquer etapa.

## 🛠️ Tecnologias Utilizadas

*   Node.js
*   JavaScript
*   prompt-sync - Para capturar a entrada do usuário no terminal.

## 🚀 Como Executar o Projeto

1.  **Pré-requisitos:** É necessário ter o Node.js instalado em sua máquina.

2.  **Clone o repositório:**
    ```bash
    git clone https://github.com/cstroDev/e-commerce.git
    cd e-commerce
    ```

3.  **Instale as dependências:**
    Na pasta do projeto, execute o comando abaixo para instalar as dependências listadas no `package.json`:
    ```bash
    npm install
    ```

4.  **Execute o script:**
    Após a instalação, execute o programa com o seguinte comando:
    ```bash
    node e-commerce.js
    ```

## ⚙️ Exemplos de Uso

Abaixo estão alguns cenários de uso:

### Cenário 1: Depósito Simples

*   **Entradas:** 1, 1, 1, 1, 1, 1
*   **Saída:**
    ```
    Quantidade total de notas: 6
    Valor total: R$385.00
    ```

### Cenário 2: Saída Antecipada

*   **Entradas:** 1, 1, 1, -1
*   **Saída:**
    ```
    Obrigado por utilizar nosso sistema! Volte sempre.
    ```

### Cenário 3: Capacidade Máxima Atingida

*   **Entradas:** 100, 50, 0, 25, 25, 0
*   **Saída:**
    ```
    Quantidade total de notas: 200
    Valor total: R$4750.00
    ```

### Cenário 4: Excesso de Capacidade

*   **Entradas:**
    1.  `100` (para notas de R$5)
    2.  `105` (para notas de R$10)

*   **Saída (após a segunda entrada):**
    ```
    Não podemos guardar mais de 200 notas!
    ```
    O programa então ignora a última entrada (105) e solicita novamente a quantidade de notas de R$10, mantendo o total de notas em 100.

## 👤 Autor

Este projeto foi desenvolvido por **Ryan**.

GitHub: cstroDev