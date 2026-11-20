# Portal INEMA

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="48" />
  <p><strong>Arckhé AI</strong></p>
</div>


Portal centralizado de acesso a cursos e plataformas educacionais do INEMA.

## WebMCP Origin Trial

- Cadastro oficial: https://developer.chrome.com/origintrials/#/view_trial/4163014905550602241
- Em 30/08/2026, a mesma conta cadastrou `https://www.inema.club`,
  `https://inema.pro` (com subdomÃ­nios) e `https://inema.vip` (com subdomÃ­nios).
- Os trÃªs tokens atuais expiram em 17/11/2026.
- O token do INEMA.club foi emitido para `https://www.inema.club` com
  Third-party matching e Ã© entregue por `/api/webmcp-origin-trial/`.
- O valor fica em `.env.local`/Vercel e nÃ£o deve ser commitado.

## ðŸš€ CaracterÃ­sticas

- âœ… **100% HTML/CSS/JS puro** - Sem dependÃªncias
- âœ… **Responsivo** - Funciona em desktop, tablet e mobile
- âœ… **Busca em tempo real** - Filtre plataformas por nome, descriÃ§Ã£o ou tags
- âœ… **Design moderno** - Interface limpa e profissional
- âœ… **Pronto para GitHub Pages** - Deploy direto

## ðŸ“ Estrutura do Projeto

```
Portal/
â”œâ”€â”€ index.html      # Estrutura principal do portal
â”œâ”€â”€ styles.css      # Estilos e design responsivo
â”œâ”€â”€ data.js         # Dados dos cursos e plataformas
â”œâ”€â”€ script.js       # Interatividade e funcionalidades
â””â”€â”€ README.md       # Este arquivo
```

## ðŸŽ¨ PersonalizaÃ§Ã£o

### Editar Plataformas

Abra o arquivo `data.js` e edite o array `platformsData`:

```javascript
{
    id: 1,
    title: "Nome da Plataforma",
    description: "DescriÃ§Ã£o da plataforma...",
    icon: "ðŸ“š",  // Emoji do card
    tags: ["Tag1", "Tag2", "Tag3"],
    url: "https://url-da-plataforma.com"
}
```

### Personalizar Cores

Edite as variÃ¡veis CSS no arquivo `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --primary-hover: #1d4ed8;
    /* ... outras cores */
}
```

## ðŸŒ Deploy no GitHub Pages

### MÃ©todo 1: Usando a Interface Web

1. Crie um repositÃ³rio no GitHub
2. FaÃ§a upload dos arquivos do portal
3. VÃ¡ em **Settings** > **Pages**
4. Em **Source**, selecione a branch `main` e a pasta `/root`
5. Clique em **Save**
6. Aguarde alguns minutos e acesse: `https://seu-usuario.github.io/nome-do-repo/`

### MÃ©todo 2: Usando Git (Linha de Comando)

```bash
# Inicializar repositÃ³rio
git init

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "Initial commit: Portal INEMA"

# Adicionar remote
git remote add origin https://github.com/seu-usuario/nome-do-repo.git

# Enviar para GitHub
git branch -M main
git push -u origin main
```

Depois, ative o GitHub Pages nas configuraÃ§Ãµes do repositÃ³rio.

## ðŸ” Funcionalidades

### Busca
- Digite no campo de busca para filtrar plataformas
- Pressione `/` para focar no campo de busca
- Pressione `ESC` para limpar a busca

### Cards Interativos
- Hover para efeito de elevaÃ§Ã£o
- Clique para acessar a plataforma
- Tags coloridas para categorizaÃ§Ã£o

## ðŸ“± Responsividade

O portal se adapta automaticamente a:
- ðŸ“± **Mobile** (< 480px)
- ðŸ“± **Tablet** (481px - 768px)
- ðŸ’» **Desktop** (> 768px)

## ðŸ› ï¸ Desenvolvimento Local

Para testar localmente, vocÃª pode:

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

## âœ¨ Recursos Adicionais

### Adicionar Novas Plataformas via Console

Abra o console do navegador (F12) e use:

```javascript
PortalINEMA.addPlatform({
    id: 13,
    title: "Nova Plataforma",
    description: "DescriÃ§Ã£o...",
    icon: "ðŸŽ¯",
    tags: ["Nova", "Tag"],
    url: "#"
});
```

## ðŸ“„ LicenÃ§a

Este projeto Ã© de cÃ³digo aberto para uso educacional.

## ðŸ¤ ContribuiÃ§Ãµes

SugestÃµes e melhorias sÃ£o bem-vindas!

---

**Portal INEMA** - Desenvolvido com â¤ï¸ para educaÃ§Ã£o

## Descoberta entre sistemas

Ver [docs/DESCOBERTA-ECOSSISTEMA.md](docs/DESCOBERTA-ECOSSISTEMA.md).

---

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="32" />
  <p><strong>Arckhé AI</strong></p>
</div>