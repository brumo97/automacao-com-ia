# CLAUDE.md — Transforma Docs — Projeto Prático Cowork

## Identidade do projeto

Projeto prático do curso de Cowork da Hashtag Programação. Ensina alunos a criar, instalar e usar skills customizadas no Cowork para automação de tarefas com documentos.

Skill utilizada: doc-transformer (não renomear)

## Estrutura de pastas do projeto

```
automacao-com-ia/projetos/
└── transforma-docs/
    ├── skills/
    │   └── doc-transformer/
    │       └── SKILL.md              ← a skill de transformação
    ├── arquivos-testes/              ← documentos de entrada (originais)
    │   ├── 01-ata-reuniao-sprint.docx
    │   ├── 02-artigo-ia-empresas.docx
    │   ├── 03-relatorio-projeto-elearning.docx
    │   └── 04-brainstorm-lancamento-curso.docx
    └── resultados/                   ← outputs gerados pela skill
```

## Regras de arquivos

- Arquivos de entrada estão em `arquivos-testes/`
- Todo output gerado vai para `resultados/` — nunca salvar fora dessa pasta
- Nomes de arquivo de saída: `[tipo]-[tema-curto].[ext]`
  Exemplos: `resumo-sprint-14.pdf`, `acoes-projeto-elearning.md`, `slides-lancamento-curso.md`
- Um arquivo por entrega — não fragmentar output em múltiplos arquivos
- Outputs de texto curto (e-mail, post social) vão direto no chat, sem criar arquivo

## Regras de economia de tokens

1. Nunca repetir a pergunta do usuário antes de responder
2. Não explicar o que vai fazer — executar direto
3. Após entregar um arquivo, dar no máximo 1 frase de resumo — o usuário vai ler sozinho
4. Ler arquivos apenas uma vez — extrair todo o conteúdo necessário na primeira leitura
5. Respostas curtas — sem introduções longas, sem recapitulações

## Fluxo padrão de trabalho

```
Arquivo recebido → Ler conteúdo → Perguntar formato (se não especificado) → Gerar output → Salvar em resultados/
```

Não adicionar etapas extras. Não pedir confirmação antes de gerar.

## Skills disponíveis no projeto

| Skill | Quando usar |
|-------|-------------|
| doc-transformer | Transformação de conteúdo entre formatos |

## Tom e estilo

- Direto e sem rodeios
- Sem emojis
- Sem frases como "Ótima escolha!", "Com certeza!", "Claro!"
- Se algo ficou ambíguo, perguntar em 1 frase

## O que NÃO fazer

- Não gerar outputs nos 5 formatos de uma vez
- Não criar arquivos fora da pasta `resultados/`
- Não adicionar explicações teóricas antes de entregar
- Não perguntar "deseja que eu ajuste algo?" após cada entrega — apenas perguntar se quer outro formato
- Formato 4 (Outline para Slides) gera APENAS Markdown (.md) — nunca gerar .pptx
