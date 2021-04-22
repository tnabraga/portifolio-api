# Projeto
 Portfolio API
Fizemos este projeto a nivel de conhecimento da tecnologia  NodeSJs para ser execultado em localhost.
 O mesmo irar imprimir na tela uma mensagem para o usuario!

#  Descrição Instalação
## Clonado o repositório e extraído todos os arquivos
No GitHub, navegue até a página principal do repositório.
Para clonar o repositório usando HTTPS, em "Clonar com HTTPS", clique no icone do lado da URL . Para clonar o repositório usando uma chave SSH, incluindo um certificado emitido pela autoridade certificada e SSH da sua organização, clique em Usar SSH e, em seguida, clique icone do lado da URL. Para clonar um repositório usando GitHub CLI, clique em Usar GitHub CLI e, em seguida, clique icone do lado da URL.
Abra Git Bash.

Altere o diretório de trabalho atual para o local em que deseja ter o diretório clonado.

Digite git clone (clonar git) e cole a URL que você copiou anteriormente.

$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
Pressione Enter para criar seu clone local.

$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `Spoon-Knife`...
> remote: Contando objetos: 10, concluído.
> remote: Compactando objetos: 100% (8/8), concluído.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.

## Solucionar problemas de erros de clonagem
Ao clonar um repositório, é possível que você encontre alguns erros.

Se você não conseguir clonar um repositório, verifique se:

Você consegue conectar-se usando HTTPS. Para obter mais informações, consulte "Erros de clonagem por meio de HTTPS".
Você tem permissão para acessar o repositório que você deseja clonar. Para obter mais informações, consulte "Erro: Repositório não encontrado".
O branch-padrão que você deseja clonar ainda existe. Para obter mais informações, consulte a permissão para acessar o repositório que você deseja clonar. Para ibter mais informações, consulte "Erro: o HEAD remoto refere-se a uma ref inexistente, incapaz de fazer checkout".

Após ter clonado o repositório e extraído todos os arquivos, tenha certeza que possui o node.js(versão mais recente) e o npm.
 Caso esteja com tudo pronto, execute o seguinte comando no diretorio dos arquivos:.

$ npm install
ou
$ yarn

Se estiver tudo certo, crie um arquivo com o nome de .env seguindo o exemplo do .env.example com o seguinte comando:

Windows
$ copy .env.example .env

Feito isso, você poderá iniciar seu bot utilizando o seguinte comando:

$ npm start
ou
$ yarn start

# tecnlogias
NodeJS v16.0.0