# ⚖️ Calculadora de IMC

Uma aplicação simples em **JavaScript** que calcula o **Índice de Massa
Corporal (IMC)** de uma pessoa a partir do nome, peso e altura
informados.\
O resultado é exibido em um **alerta** no navegador, mostrando o valor
do IMC e sua respectiva classificação.

------------------------------------------------------------------------

## 📂 Estrutura do Projeto

    📦 calculadora-imc
     ┣ 📜 index.html      # Página principal que carrega o script
     ┣ 📜 calculadora.js  # Lógica para cálculo do IMC

------------------------------------------------------------------------

## 🕹️ Como Funciona

1.  Ao abrir o `index.html`, o navegador executa o `calculadora.js`.

2.  O sistema pede ao usuário:

    -   Nome
    -   Peso (em kg)
    -   Altura (em metros)

3.  O **IMC** é calculado pela fórmula:

        IMC = peso / (altura * altura)

4.  O resultado aparece em um **alert**, exibindo:

    -   Nome do usuário
    -   Valor do IMC
    -   Classificação (abaixo do peso, normal, sobrepeso, obesidade I,
        II ou III)

------------------------------------------------------------------------

## ✨ Classificações Utilizadas

-   **Abaixo de 18.5** → Abaixo do peso\
-   **18.5 a 24.9** → Peso normal\
-   **25.0 a 29.9** → Sobrepeso\
-   **30.0 a 34.9** → Obesidade grau I\
-   **35.0 a 39.9** → Obesidade grau II (severa)\
-   **40.0 ou mais** → Obesidade grau III (mórbida)

------------------------------------------------------------------------

## 🖥️ Tecnologias Utilizadas

-   **HTML5**
-   **JavaScript (ES6+)**

------------------------------------------------------------------------

## 🚀 Como Executar

1.  Clone este repositório ou baixe os arquivos:

    ``` bash
    git clone https://github.com/seu-usuario/calculadora-imc.git
    ```

2.  Abra o arquivo `index.html` no navegador.

3.  Insira os dados solicitados e veja o resultado no alerta.

------------------------------------------------------------------------

## 📌 Melhorias Futuras

-   Criar interface gráfica (inputs e botões) em vez de prompts.\
-   Exibir resultado diretamente na página (HTML/CSS).\
-   Adicionar verificação de entrada (para evitar valores inválidos).\
-   Responsividade para mobile.

------------------------------------------------------------------------

## 🧑‍💻 Desenvolvido por **Giovanna Oliveira** 
