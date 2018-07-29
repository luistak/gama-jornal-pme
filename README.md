# gama-jornal-pme
Assignment #2: Show me the leads! 

Como compilar o sass:
    Passo 1 - Instalar o Git Bash em sua máquina pelo seguinte link: https://git-scm.com/downloads

    Passo 2 - Instalar o node em sua máquina pelo seguinte link: https://nodejs.org/en/download/

    Passo 3 - Instalar o Sass em sua máquina globalmente assim como no link:
        https://sass-lang.com/install
        Em seguida abre seu Bash(linha de comando) e digite:
        npm install -g sass

    Passo 4 - Abra sua pasta do projeto no windows, e clique com o botão direito e selecione: "Git BASH here"

    Passo 5 - Copie o seguinte trecho:
        sass --watch stylesheets/main.scss:stylesheets/main.css
        
    Passo 6 - Na linha de comando cole o trecho acima.

    E pronto o/ você já está assistindo a qualquer mudança nos arquivos de Sass.

Como servir a aplicação local
    Passo 1 - Abrir a pasta do repositório raiz

    Passo 2 - Abrir o BASH na pasta

    Passo 3 - Digitar o seguinte comando:
        'firebase serve'

    Passo 4 - Acesse a url: "localhost:5000" e você pode ver e ao salvar suas mudaças já afetará o código.

Como fazer Deploy da aplicaçao em produção
    Passo 1 - Abrir a pasta do repositório raiz

    Passo 2 - Abrir o BASH na pasta

    Passo 3 - Digitar o seguinte comando:
        'firebase deploy'
        E pronto assim que acabar de rodar o comando suas alterações estarão no ar.