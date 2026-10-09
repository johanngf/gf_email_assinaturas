# GF Innovation — Editor de assinatura para Outlook Web

Site estático para criação de assinaturas sem fundo da GF Innovation. A assinatura gerada não define cor de fundo nem borda externa e **não fixa cores de texto ou hyperlinks**; permite que a apresentação herde a cor do tema do cliente de e-mail, semelhante ao modelo de referência. A divisória usa cinza neutro para visibilidade em fundos claros e escuros. O cabeçalho apresenta o logotipo corporativo e permanece visível durante a rolagem. **Não possui backend nem armazena automaticamente os dados informados**. Os dados preenchidos só saem do formulário se o usuário decidir copiá-los para a área de transferência ou baixar o HTML.

## Usar a assinatura

1. Acesse a versão hospedada do editor em HTTPS.
2. Preencha nome, cargo e e-mail. O telefone com DDD é opcional e recebe máscara `(DD) NNNNN-NNNN` ou `(DD) NNNN-NNNN`. O endereço está dividido em campos, mas a assinatura permanece em duas linhas.
3. Revise o site e os links das três redes sociais pré-preenchidos. URLs e e-mail são validados antes da exportação/cópia.
4. Use os controles **Claro/Escuro** na prévia para simular a aparência da assinatura. Essa simulação não acompanha a assinatura copiada. Clique em **Copiar assinatura**, abra o [Outlook Web](https://outlook.office.com/mail/) e entre em **Configurações → Contas → Assinaturas**. Crie/edite a assinatura e cole com `Ctrl+V`.
5. Se a cópia automática for bloqueada pelo navegador, o conteúdo fica selecionado para cópia manual com `Ctrl+C`. O botão **Baixar HTML (alternativa)** gera uma página independente para selecionar e copiar a assinatura formatada. **O Outlook Web não importa esse HTML como arquivo.**
6. Salve a assinatura e envie um e-mail de teste, conferindo imagens, telefone e links.

## Implantação no Cloudflare Pages

1. Copie os arquivos desta pasta diretamente para a raiz de seu repositório GitHub.
2. Em Cloudflare → **Workers & Pages → Create application → Pages → Connect to Git**, conecte o repositório.
3. Configure **Framework: None**, **Branch: main**, **Build command: `exit 0`** e **Output directory: `.`**.
4. Publique e teste no endereço HTTPS recebido.

Não há necessidade de Node, npm, bundler ou etapa de build. Para GitHub Pages, este repositório também possui `.nojekyll`; consulte as restrições comerciais do serviço.

## Arquivos

```text
index.html                  Página e campos de configuração
assets/style.css            Estilos responsivos e cabeçalho fixo
assets/app.js               Máscaras, validações, cópia e exportação
assets/imagens/*.png        Logotipo e redes sociais
README.md                   Este manual
.nojekyll                   Compatibilidade GitHub Pages
.gitignore                  Exclusões do repositório
```

## Privacidade, segurança e compatibilidade

- O editor não contém chamadas para salvar, transmitir ou registrar dados dos campos. Não utiliza `localStorage`, cookies analíticos nem banco de dados.
- Copiar a assinatura coloca o conteúdo escolhido na área de transferência; baixar o HTML grava um arquivo **somente por solicitação explícita**.
- Imagens copiadas do site hospedado são referenciadas por URLs públicas. O domínio deve permanecer acessível enquanto as assinaturas estiverem em uso.
- Se o navegador bloquear a cópia automática, siga a orientação para copiar manualmente ou exportar o HTML. O comportamento de imagens e estilos também depende do Outlook e do cliente de e-mail do destinatário.
- A máscara de telefone suporta números brasileiros com DDD e 10/11 dígitos; CEP tem oito dígitos; links sociais só aceitam domínios da própria rede e HTTPS. Validações são básicas, não verificam existência das contas ou do endereço.

Documentação: [Microsoft — Assinaturas](https://support.microsoft.com/en-us/outlook/training/sign-in-and-create-a-signature-for-outlook-on-the-web), [MDN — Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API), [Cloudflare Pages](https://developers.cloudflare.com/pages/get-started/git-integration/).

## Assinatura com contraste adaptável (v9)

- O HTML copiado/exportado não define `background`, `background-color` nem `bgcolor` nas tabelas da assinatura, e não possui borda externa. A área branca da prévia é apenas uma superfície de demonstração no editor.
- Textos e links foram configurados para herdar a cor do tema do cliente de e-mail (`color:inherit` nos links e nenhuma cor explícita nas células), em vez de possuir valores rígidos de azul-escuro. Em Outlook Web, as cores podem mudar conforme o modo de visualização, mas essa herança **não é garantia universal**: o Outlook pode reformatar HTML e cada cliente apresenta regras próprias.
- Logotipo e ícones PNG existentes foram preservados com transparência; não se alterou o logotipo original.
- O cabeçalho fixo da aplicação continua azul-escuro e não faz parte da assinatura enviada.

### Prévia claro/escuro e limitações

- Os botões **Claro/Escuro** alteram apenas a superfície de teste do editor; o HTML copiado não recebe classes ou scripts da prévia.
- A assinatura não contém `color:#...` ou `background-color` nos blocos de texto. A cor é herdada da mensagem e pode ser modificada pelo Outlook.
- A logomarca PNG e os ícones de redes sociais mantêm suas cores institucionais; eles **não mudam automaticamente** de tonalidade. A divisória neutra permanece visível nas duas aparências.
- O modo escuro do Outlook é controlado pelo aplicativo e pode modificar a forma de exibição, inclusive de cores explicitamente definidas; portanto teste **envio e recebimento reais** nos temas claro e escuro.

Fonte oficial: https://support.microsoft.com/pt-br/outlook/mail/dark-mode-in-outlook
