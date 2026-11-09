---
name: doc-transformer
description: Transforma um documento (ata, artigo, relatório, brainstorm) em um de 5 formatos — resumo executivo, lista de ações, e-mail, outline de slides ou post social. Use sempre que o usuário enviar um arquivo de arquivos-testes/ e pedir para transformá-lo.
---

# doc-transformer

## Entrada

- Arquivos em `arquivos-testes/` (.docx, .txt ou .md)
- Ler o arquivo uma única vez e extrair tudo o que for necessário

## Fluxo

1. Ler o documento
2. Se o formato não foi especificado, perguntar em 1 frase qual dos 5 formatos
3. Gerar apenas o formato pedido (nunca os 5 de uma vez)
4. Salvar em `resultados/` com nome `[tipo]-[tema-curto].[ext]` — exceto e-mail e post social, que vão direto no chat
5. Dar no máximo 1 frase de resumo e perguntar apenas: "Quer outro formato?"

## Formatos

### 1. Resumo executivo
- Arquivo: `resumo-[tema].md` (ou .pdf se pedido)
- Estrutura: contexto (2-3 linhas), pontos principais (3-5 itens), decisões ou conclusões, próximos passos
- Máximo 1 página

### 2. Lista de ações
- Arquivo: `acoes-[tema].md`
- Tabela: ação | responsável | prazo | status
- Só ações explícitas no documento; campo ausente fica "a definir" (não inventar responsáveis ou datas)

### 3. E-mail
- Direto no chat, sem arquivo
- Assunto, saudação, 1 parágrafo de contexto, pontos-chave em lista, pedido ou próximo passo claro, assinatura
- Até 200 palavras

### 4. Outline de slides
- **Importante:** gerar APENAS arquivo Markdown (.md) com a estrutura dos slides. Nunca gerar arquivo .pptx
- Arquivo: `slides-[tema].md` — APENAS Markdown, nunca .pptx
- Um título por slide (`## Slide N — título`), 3-5 bullets por slide, 6-10 slides
- Slide 1: título; último slide: conclusão ou chamada para ação

### 5. Post social
- Direto no chat, sem arquivo
- Gancho na primeira linha, 3-5 linhas de valor, chamada para ação, até 3 hashtags
- Até 150 palavras, sem emojis

## Regras

- Fiel ao documento: não inventar números, nomes, datas ou resultados
- Tom direto, sem emojis, sem frases como "Ótima escolha!"
- Um arquivo por entrega
