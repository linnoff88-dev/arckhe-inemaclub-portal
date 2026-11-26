ï»¿# Portal ARCKHÉ

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="48" />
  <p><strong>Arckhé AI</strong></p>
</div>


Portal centralizado de acesso a cursos e plataformas educacionais do ARCKHÉ.

## WebMCP Origin Trial

- Cadastro oficial: https://developer.chrome.com/origintrials/#/view_trial/4163014905550602241
- Em 30/08/2026, a mesma conta cadastrou `https://www.ARCKHÉ AI`,
  `https://ARCKHÉ.pro` (com subdomêÂ­nios) e `https://ARCKHÉ.vip` (com subdomêÂ­nios).
- Os trêÂªs tokens atuais expiram em 17/11/2026.
- O token do ARCKHÉ AI foi emitido para `https://www.ARCKHÉ AI` com
  Third-party matching e êÂ© entregue por `/api/webmcp-origin-trial/`.
- O valor fica em `.env.local`/Vercel e nêÂ£o deve ser commitado.

## ê°Å¸Å¡â¬ CaracterêÂ­sticas

- ê¢Åâ¦ **100% HTML/CSS/JS puro** - Sem dependêÂªncias
- ê¢Åâ¦ **Responsivo** - Funciona em desktop, tablet e mobile
- ê¢Åâ¦ **Busca em tempo real** - Filtre plataformas por nome, descriêÂ§êÂ£o ou tags
- ê¢Åâ¦ **Design moderno** - Interface limpa e profissional
- ê¢Åâ¦ **Pronto para GitHub Pages** - Deploy direto

## ê°Å¸âÂ Estrutura do Projeto

```
Portal/
ê¢âÅê¢ââ¬ê¢ââ¬ index.html      # Estrutura principal do portal
ê¢âÅê¢ââ¬ê¢ââ¬ styles.css      # Estilos e design responsivo
ê¢âÅê¢ââ¬ê¢ââ¬ data.js         # Dados dos cursos e plataformas
ê¢âÅê¢ââ¬ê¢ââ¬ script.js       # Interatividade e funcionalidades
ê¢ââê¢ââ¬ê¢ââ¬ README.md       # Este arquivo
```

## ê°Å¸Å½Â¨ PersonalizaêÂ§êÂ£o

### Editar Plataformas

Abra o arquivo `data.js` e edite o array `platformsData`:

```javascript
{
    id: 1,
    title: "Nome da Plataforma",
    description: "DescriêÂ§êÂ£o da plataforma...",
    icon: "ê°Å¸âÅ¡",  // Emoji do card
    tags: ["Tag1", "Tag2", "Tag3"],
    url: "https://url-da-plataforma.com"
}
```

### Personalizar Cores

Edite as variêÂ¡veis CSS no arquivo `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --primary-hover: #1d4ed8;
    /* ... outras cores */
}
```

## ê°Å¸ÅÂ Deploy no GitHub Pages

### MêÂ©todo 1: Usando a Interface Web

1. Crie um repositêÂ³rio no GitHub
2. FaêÂ§a upload dos arquivos do portal
3. VêÂ¡ em **Settings** > **Pages**
4. Em **Source**, selecione a branch `main` e a pasta `/root`
5. Clique em **Save**
6. Aguarde alguns minutos e acesse: `https://seu-usuario.github.io/nome-do-repo/`

### MêÂ©todo 2: Usando Git (Linha de Comando)

```bash
# Inicializar repositêÂ³rio
git init

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "Initial commit: Portal ARCKHÉ"

# Adicionar remote
git remote add origin https://github.com/seu-usuario/nome-do-repo.git

# Enviar para GitHub
git branch -M main
git push -u origin main
```

Depois, ative o GitHub Pages nas configuraêÂ§êÂµes do repositêÂ³rio.

## ê°Å¸âÂ Funcionalidades

### Busca
- Digite no campo de busca para filtrar plataformas
- Pressione `/` para focar no campo de busca
- Pressione `ESC` para limpar a busca

### Cards Interativos
- Hover para efeito de elevaêÂ§êÂ£o
- Clique para acessar a plataforma
- Tags coloridas para categorizaêÂ§êÂ£o

## ê°Å¸âÂ± Responsividade

O portal se adapta automaticamente a:
- ê°Å¸âÂ± **Mobile** (< 480px)
- ê°Å¸âÂ± **Tablet** (481px - 768px)
- ê°Å¸âÂ» **Desktop** (> 768px)

## ê°Å¸âºÂ ê¯Â¸Â Desenvolvimento Local

Para testar localmente, vocêÂª pode:

1. **Abrir diretamente no navegador**
   - Basta abrir o arquivo `index.html` no navegador

2. **Usar um servidor local** (recomendado)
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js
   npx serve
   ```
   Depois acesse: `http://localhost:8000`

## ê¢ÅÂ¨ Recursos Adicionais

### Adicionar Novas Plataformas via Console

Abra o console do navegador (F12) e use:

```javascript
PortalARCKHÉ.addPlatform({
    id: 13,
    title: "Nova Plataforma",
    description: "DescriêÂ§êÂ£o...",
    icon: "ê°Å¸Å½Â¯",
    tags: ["Nova", "Tag"],
    url: "#"
});
```

## ê°Å¸ââ LicenêÂ§a

Este projeto êÂ© de cêÂ³digo aberto para uso educacional.

## ê°Å¸Â¤Â ContribuiêÂ§êÂµes

SugestêÂµes e melhorias sêÂ£o bem-vindas!

---

**Portal ARCKHÉ** - Desenvolvido com ê¢ÂÂ¤ê¯Â¸Â para educaêÂ§êÂ£o

## Descoberta entre sistemas

Ver [docs/DESCOBERTA-ECOSSISTEMA.md](docs/DESCOBERTA-ECOSSISTEMA.md).

---

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="32" />
  <p><strong>Arckhé AI</strong></p>
</div>