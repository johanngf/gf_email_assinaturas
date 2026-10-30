# GF Innovation — Imagens legadas

Este repositório preserva as imagens utilizadas em assinaturas de e-mail anteriormente distribuídas, cujos endereços absolutos usam o caminho `/gf_email_assinaturas/assets/imagens/`.

O repositório principal atual é [johanngf/gf_ferramentas_internas](https://github.com/johanngf/gf_ferramentas_internas), com o [Portal de Ferramentas Internas](https://johanngf.github.io/gf_ferramentas_internas/). Este repositório de compatibilidade não é uma cópia do portal e não deve receber as funcionalidades do gerador.

## Arquivos e endereços públicos esperados

- [logo.png](https://johanngf.github.io/gf_email_assinaturas/assets/imagens/logo.png)
- [facebook.png](https://johanngf.github.io/gf_email_assinaturas/assets/imagens/facebook.png)
- [instagram.png](https://johanngf.github.io/gf_email_assinaturas/assets/imagens/instagram.png)
- [linkedin.png](https://johanngf.github.io/gf_email_assinaturas/assets/imagens/linkedin.png)

Os quatro PNGs são cópias binariamente idênticas dos arquivos versionados em `assets/imagens/` no repositório principal, commit `e27ff70ecdab5b8f2d8faafdfb2b8cf63e20b3d4`. Preserve os caminhos, os nomes e os conteúdos, inclusive dimensões, transparência e cores. Não altere esses arquivos sem avaliar o impacto sobre assinaturas existentes.

Desativar o GitHub Pages, excluir ou renomear este repositório pode quebrar a exibição das imagens em e-mails antigos. A página inicial apenas informa a finalidade deste endereço e oferece acesso ao portal atual; não redireciona nem interfere nos PNGs.

## Publicação pelo GitHub Pages

Na consulta de 30/10/2026, a API informou `has_pages: false` e o endpoint de Pages retornou HTTP 404. A publicação ainda não está habilitada; os arquivos estão preparados localmente, sem publicação automática.

Após revisão e autorização para commit e push, em **Settings → Pages → Build and deployment**, configurar:

- **Source:** Deploy from a branch.
- **Branch:** `main` (branch padrão efetiva consultada).
- **Folder:** `/(root)`.

Salvar e aguardar a publicação. O arquivo `.nojekyll` evita o processamento Jekyll. Não há JavaScript, dependências, processo de build ou workflow de GitHub Actions neste repositório.

Após a publicação, validar cada URL em navegador sem autenticação: resposta HTTP 200, conteúdo PNG válido e renderização da imagem. Baixar cada arquivo por HTTP e comparar seu SHA-256 com a origem; HTTP 200 isoladamente não comprova integridade. Esses testes públicos permanecem pendentes até a hospedagem estar habilitada e acessível.
