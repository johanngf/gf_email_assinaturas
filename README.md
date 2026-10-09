# GF Innovation — Editor de assinatura para Outlook Web

Site estático para criação de assinaturas da GF Innovation. **Não possui backend nem armazena automaticamente os dados informados**. Os dados preenchidos só saem do formulário se o usuário decidir copiá-los para a área de transferência ou baixar o HTML.

## Usar a assinatura

1. Acesse a versão hospedada do editor em HTTPS.
2. Preencha nome, cargo e e-mail. O telefone com DDD é opcional e recebe máscara `(DD) NNNNN-NNNN` ou `(DD) NNNN-NNNN`. O endereço está dividido em campos, mas a assinatura permanece em duas linhas.
3. Revise o site e os links das três redes sociais pré-preenchidos. URLs e e-mail são validados antes da exportação/cópia.
4. Clique em **Copiar assinatura**, abra o [Outlook Web](https://outlook.office.com/mail/) e entre em **Configurações → Contas → Assinaturas**. Crie/edite a assinatura e cole com `Ctrl+V`.
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
assets/style.css            Estilos responsivos
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
