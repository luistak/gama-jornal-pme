# Gama Academy Jornal PME
## A ssignment #2: Show me the leads! 

### Instalando o git e gitkraken em sua máquina:**
**Instalando Git**
1. Acessar o link: https://git-scm.com/downloads e clique no seu sistema operacional (Windows, Mac ou Linux)
2. Após baixar e executar o instalador, somente prosseguir até finalizar

**Instalando GitKraken**
1. Acessar o link: https://www.gitkraken.com/download e clique no seu sistema operacional
2. Prosseguir até finalizar

**Configurando o GitKraken**
1. Após instalar, e ao abrir o GitKraken faça login com sua conta do Github
2. Clique no menu superior à direita de hambuguer(três setas horizontais) depois em "Preferences"
3. Clique no menu a esquerda em Authentication
4. Clique em Github na parte da direita e clique no botão verde "connect to github"
5. Em seu navegador associe sua conta
6. Clique no botão amarelo: "Add sshKey"

**Baixar o repositório**
1. Abra o GitKraken e acesse o menu superior a esqueda tem o ícone de uma pasta
2. Clique em "Clone" em seguida "Github"
3. Clique no botão "Browse" a frente do "Where do clone" e selecione onde você irá instalar
4. Selecione o repositório: **gama-jornal-pme**
5. Clique no botão "Clone de repo"

### Instalando bibliotecas
**Instalando Node**
1. Acessar o seguinte link: https://nodejs.org/en/download/
2. Baixar e executar o instalador, somente prosseguir até finalizar

**Instalando o Sass**
1. Acessa a pasta do projeto por meio do seu navegador de arquivos
2. Clique com o botão direito em uma área branca da pasta
3. Selecione GitBash here
4. Após o Bash abrir selecione ele e digite:
   > npm install -g sass

**Instalando o firebase**
1. Acessa a pasta do projeto por meio do seu navegador de arquivos
2. Clique com o botão direito em uma área branca da pasta
3. Selecione GitBash here
4. Após o Bash abrir selecione ele e digite:
    > npm install -g firebase-tools

**Configurar o acesso ao firebase**
1. Acessa a pasta do projeto por meio do seu navegador de arquivos
2. Clique com o botão direito em uma área branca da pasta
3. Selecione GitBash here
4. Após o Bash abrir selecione ele e digite:
    > firebase login
5. Clique no link e faça o login


### Para atualizar qualquer arquivo de estilo
**Rodar o sass**
1. Acessa a pasta do projeto por meio do seu navegador de arquivos
2. Acesso a pasta /public
3. Clique com o botão direito em uma área branca da pasta
4. Selecione GitBash here
5. Após o Bash abrir selecione ele e digite:
    > sass --watch stylesheets/main.scss:stylesheets/main.css

### Para ver o blog
**Rodar o firebase local**
1. Acessa a pasta do projeto por meio do seu navegador de arquivos
2. Clique com o botão direito em uma área branca da pasta
3. Selecione GitBash here
4. Após o Bash abrir selecione ele e digite:
    > firebase serve
5. Agora basta acessar em seu navegador:
    > localhost:5000

### Para fazer deploy para o blog oficial
**Rodando o deploy do firebase**
1. Acessa a pasta do projeto por meio do seu navegador de arquivos
2. Clique com o botão direito em uma área branca da pasta
3. Selecione GitBash here
4. Após o Bash abrir selecione ele e digite:
    > firebase deploy