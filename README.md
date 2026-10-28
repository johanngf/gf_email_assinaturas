# GF Innovation — Portal de Ferramentas Internas

Portal estático em HTML, CSS e JavaScript puro, sem dependências de execução, backend, banco de dados ou processo de build. A entrada central oferece acesso a duas funcionalidades independentes:

- **Assinaturas de e-mail:** gerador existente em `assinaturas/index.html`.
- **Governança Documental:** entrada inicial em `governanca/index.html`, destinada à Skill `governanca-documental-institucional`. Conteúdo, instalação e links oficiais de releases serão implementados posteriormente.

## Gerador de assinaturas

Site estático para criação de assinaturas sem fundo da GF Innovation. A assinatura gerada não define cor de fundo nem borda externa e **não fixa cores de texto ou hyperlinks**; permite que a apresentação herde a cor do tema do cliente de e-mail, semelhante ao modelo de referência. A divisória usa cinza neutro para visibilidade em fundos claros e escuros. O cabeçalho apresenta o logotipo corporativo e permanece visível durante a rolagem. **Não possui backend nem armazena automaticamente os dados informados**. Os dados preenchidos só saem do formulário se o usuário decidir copiá-los para a área de transferência ou baixar o HTML.

## Usar a assinatura

1. Acesse o portal hospedado em HTTPS e selecione **Assinaturas de e-mail**, ou abra diretamente `assinaturas/index.html`.
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

A publicação não exige Node, npm, bundler ou etapa de build. Node e npm são utilizados somente nas ferramentas de desenvolvimento descritas abaixo. Para GitHub Pages, este repositório também possui `.nojekyll`; consulte as restrições comerciais do serviço.

## Arquivos

```text
index.html                      Entrada central e navegação do portal
assinaturas/
  index.html                    Formulário, prévia e instruções para Outlook
  assinaturas.css               Estilos específicos do gerador
  assinaturas.js                Máscaras, validações, cópia e exportação
governanca/
  index.html                    Entrada inicial de Governança Documental
assets/
  imagens/
    logo.png                    Logotipo com URL pública preservada
    facebook.png                Ícone com URL pública preservada
    instagram.png               Ícone com URL pública preservada
    linkedin.png                Ícone com URL pública preservada
eslint.config.mjs               Regras de lint JavaScript com Prettier integrado
.prettierrc.json                 Convenções de formatação
.prettierignore                  Exclusões da formatação
.vscode/                        Correções ao salvar e extensões recomendadas
package.json                    Scripts e dependências de desenvolvimento
package-lock.json               Versões reproduzíveis das dependências
README.md                       Documentação
.nojekyll                       Compatibilidade GitHub Pages
.gitignore                      Exclusões do repositório
```

Os módulos usam navegação HTML convencional. O JavaScript e o CSS do gerador são carregados somente em `assinaturas/index.html`. As novas páginas usam HTML semântico com a apresentação padrão do navegador; não foram criados scripts, folhas de estilo ou diretórios compartilhados sem necessidade real.

### Caminhos e compatibilidade

As imagens permanecem em `assets/imagens/`, sem cópias adicionais, porque assinaturas já distribuídas podem referenciar suas URLs públicas. Preserve também o domínio e o prefixo de publicação existentes. O gerador acessa essas imagens por `../assets/imagens/`, compatível com publicação na raiz ou em subdiretório. Na cópia e na exportação em HTTP/HTTPS, os caminhos são convertidos para URLs absolutas; em abertura local por `file:`, mantém-se a alternativa com imagens incorporadas em base64.

A raiz agora abre o portal; o gerador está em `assinaturas/index.html`. Os arquivos antigos `assets/app.js` e `assets/style.css` foram transferidos para o módulo. As tabelas e os estilos inline da assinatura foram mantidos. A navegação para outra página não salva os campos preenchidos, como já ocorria ao sair do editor.

### Execução local

Na raiz do repositório, se Python 3 estiver disponível, execute:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abra `http://localhost:8000/`. As entradas diretas são `http://localhost:8000/assinaturas/index.html` e `http://localhost:8000/governanca/index.html`. Encerre com `Ctrl+C`. Não é necessário instalar pacotes. Também é possível abrir o HTML diretamente, mas a cópia automática depende das permissões do navegador; valide a distribuição em HTTPS e o resultado real no Outlook.

### Lint, formatação e VS Code

Use Node.js `^20.19.0`, `^22.13.0` ou `>=24` e instale as dependências de desenvolvimento com:

```sh
npm ci
```

Os pacotes são exclusivamente de desenvolvimento; o portal continua estático e sem build.

```sh
npm run lint          # Verifica JavaScript com ESLint, incluindo Prettier
npm run lint:fix      # Corrige problemas automaticamente quando possível
npm run format       # Formata HTML, CSS, JavaScript, JSON e Markdown
npm run format:check # Verifica formatação sem alterar arquivos
npm run check        # Executa lint e verificação de formatação
```

No VS Code, instale/habilite as extensões recomendadas em `.vscode/extensions.json`: **ESLint** (`dbaeumer.vscode-eslint`) e **Prettier** (`esbenp.prettier-vscode`). Abra a raiz deste repositório como pasta de trabalho. As configurações são locais ao projeto e não modificam preferências globais do editor.

Ao salvar JavaScript, `source.fixAll.eslint: always` aplica as correções do ESLint, incluindo a formatação pelo plugin do Prettier. O formatador separado é desabilitado para JavaScript para evitar dois processos de formatação no mesmo salvamento. HTML, CSS, JSON e Markdown usam o Prettier como formatador ao salvar. Problemas sem correção automática continuam aparecendo no painel de problemas. A recomendação de extensões não as instala automaticamente.

A [configuração oficial da Rocketseat](https://github.com/Rocketseat/eslint-config-rocketseat) existe, mas sua versão publicada `2.2.2` depende de ESLint 8 e inclui plugins React/TypeScript. Em vez de carregar essas dependências, a configuração local usa ESLint 10 com flat config e adapta as [convenções de React da Rocketseat](https://github.com/Rocketseat/eslint-config-rocketseat/blob/main/react.js) pertinentes ao JavaScript puro: dois espaços, aspas simples, sem ponto e vírgula, vírgula final, parênteses em funções de seta e largura de 80 caracteres. Não são aplicadas regras de JSX, React ou TypeScript. A configuração também verifica erros comuns, igualdade estrita, variáveis não utilizadas e preferência por `const`.

As regras de formatação ficam em `.prettierrc.json`, utilizadas tanto pelo editor quanto pelo ESLint via `eslint-plugin-prettier/recommended`. Foi adotado LF para finais de linha reproduzíveis. `embeddedLanguageFormatting: off` impede reformatação de código embutido em templates, preservando o HTML das assinaturas geradas; `bracketSameLine: true` mantém o `>` na linha do último atributo; `htmlWhitespaceSensitivity: ignore` permite aplicar essa apresentação sem que o Prettier desloque o delimitador para preservar espaços entre tags. As páginas HTML são reformatadas, mas os templates JavaScript das assinaturas continuam preservados. O plugin `prettier-plugin-css-order` organiza as propriedades dos arquivos CSS em ordem alfabética crescente (`cssDeclarationSorterOrder: alphabetical`), inclusive ao salvar. `cssDeclarationSorterKeepOverrides: true` preserva a precedência quando propriedades abreviadas e específicas dependem da ordem. ESLint analisa JavaScript; HTML e CSS recebem formatação, sem análise semântica por um linter específico.

Na implantação dessas ferramentas, `npm run check` passou sem erros. Uma verificação em memória confirmou a correção conjunta de ESLint/Prettier e a detecção de variáveis indefinidas. Os testes locais no Chrome descritos abaixo foram repetidos após a formatação: a cópia formatada e o HTML exportado permaneceram idênticos aos anteriores. O acionamento pelo salvamento na interface do VS Code não foi testado nesta execução.

### Publicação existente

A reorganização não altera configurações de hospedagem. A seção de Cloudflare Pages acima descreve o procedimento documentado originalmente; a hospedagem ativa não foi confirmada nesta etapa. Ela cita `main`, mas a configuração Git local acompanha `origin/master`: confirme a branch efetivamente publicada no provedor antes de qualquer implantação. O arquivo `.nojekyll` foi preservado.

### Próxima etapa

A base está preparada para evolução visual independente. Governança Documental ainda precisa receber o conteúdo oficial, os requisitos e as instruções de instalação, além dos links reais de releases. Não há downloads ou versões fictícios nesta etapa.

### Validação da migração

A migração foi comparada com uma cópia anterior dos arquivos em Chrome headless, usando servidor HTTP local na raiz e sob o prefixo `/portal/`, além de abertura por `file:`. Não foram instaladas dependências para essa validação.

- HTML exportado e conteúdos HTML/texto da cópia formatada idênticos aos da versão anterior para os mesmos dados. Na prévia, a única diferença comparada foi o caminho relativo das imagens.
- Verificados campos obrigatórios, telefone opcional, máscaras de telefone fixo/celular e CEP, normalização de UF, e-mail inválido, URL insegura, domínio de rede social e escape de texto.
- Verificados atualização da prévia, alternância claro/escuro sem mudança na assinatura, carregamento das imagens, cópia formatada pelo evento nativo e seleção manual com cópia automática indisponível.
- Verificados geração do Blob de download, imagens base64 na abertura local e botão de seleção no HTML exportado.
- Verificados navegação e acesso direto aos módulos, layout em larguras de 1280 e 390 pixels e ausência de exceções JavaScript não tratadas. Os quatro PNGs permaneceram idênticos byte a byte.

Os testes foram pontuais, com script temporário externo ao repositório; não há suíte automatizada instalada. A permissão e o resultado da alternativa assíncrona `navigator.clipboard.write`, outros navegadores, a colagem/envio/recebimento no Outlook e a hospedagem de produção não foram validados. A equivalência observada não garante comportamento idêntico em todos os clientes de e-mail.

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
