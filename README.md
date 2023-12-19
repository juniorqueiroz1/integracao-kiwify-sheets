Projeto de Integração com Planilha Google Sheets
Este projeto visa facilitar a integração entre uma aplicação Node.js e o Google Sheets. A integração inclui a leitura de credenciais do Google Sheets a partir de um arquivo JSON ou variáveis de ambiente, autenticação e a capacidade de enviar dados para uma planilha específica.

Passo 1: Acesse o Console de Desenvolvedor do Google
Acesse https://console.developers.google.com/ e faça login na sua conta do Google.

Passo 2: Crie um Novo Projeto ou Selecione um Existente
Se você já possui um projeto, pode pular para o próximo passo.
Se for criar um novo projeto, clique no menu suspenso no canto superior direito ao lado do nome do projeto e escolha "Novo Projeto". Digite um nome para o projeto e clique em "Criar".

Passo 3: Vá para a Página de Credenciais
No painel de navegação à esquerda, clique em "APIs e Serviços" e selecione "Credenciais".

Passo 4: Crie uma Chave de Conta de Serviço
Clique em "Criar Credenciais" e escolha "Chave de Conta de Serviço".
Escolha ou crie uma conta de serviço, defina a função e clique em "Continuar".
Em "Detalhes da Chave", escolha "JSON" e clique em "Criar". O arquivo JSON será baixado automaticamente.

Passo 5: Copie o Client Email e Configure a Planilha
Abra o arquivo JSON baixado e copie o valor de client_email.
Compartilhe a planilha com o endereço de e-mail copiado (client_email). Permita a edição da planilha para esse e-mail.

Passo 6: Copie as Informações Necessárias para o Projeto
Copie o project_id, client_email, e private_key do arquivo JSON para o seu projeto ou configure variáveis de ambiente conforme necessário.
Agora, você está pronto para usar essas credenciais no seu projeto Node.js. Se você tiver alguma dúvida específica em algum desses passos, por favor, me avise!

Passo 7: Instalação das Dependências
Certifique-se de ter o Node.js instalado em sua máquina. Em seguida, instale as dependências do projeto:

npm install

Passo Adicional: Configuração do Google Cloud Functions
Após configurar as credenciais no Console de Desenvolvedor do Google, agora você pode criar uma função no Google Cloud Functions para processar suas requisições. Aqui está um guia básico para configurar isso:

 - Acesse o Console do Google Cloud Functions
Acesse https://console.cloud.google.com/functions/ e faça login na sua conta do Google.
 -  Crie uma Nova Função
Clique em "Criar Função" para criar uma nova função.
Dê um nome para a função e escolha a região mais apropriada.
No campo "Método de Execução", escolha "Inline editor" para escrever seu código diretamente no console ou "ZIP de arquivo" para fazer upload de um arquivo ZIP contendo seu código.
Cole ou escreva seu código no editor.
  - Configure as Variáveis de Ambiente
Se você estiver utilizando variáveis de ambiente para suas credenciais, vá até a seção "Variáveis de ambiente, chaves e vínculos".
Adicione as variáveis de ambiente necessárias, como GOOGLE_PROJECT_ID, GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, etc.
 - Configure o Trigger
Escolha o evento que acionará a sua função. Pode ser um evento HTTP, um evento de armazenamento, um evento Pub/Sub, etc.
Configure os detalhes do trigger conforme necessário.
 - Implante Sua Função
Clique em "Implantar" para implantar a sua função.
 - Teste Sua Função
Após a implantação, você pode testar sua função clicando em "Testar a função" no console.
Agora, sua função está configurada no Google Cloud Functions e pode ser acionada conforme a configuração do trigger escolhido. Se encontrar algum problema durante esse processo, não hesite em pedir ajuda!

Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações de pull.
