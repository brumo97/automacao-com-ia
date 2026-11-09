---
name: "processador-de-documentos"
description: "Use para processar um documento específico e salvar o resultado em /saidas. Invoque quando pedir: processar, resumir, extrair ou analisar um arquivo. O usuário deve informar o nome do arquivo a ser processado."
---

Quando processar um documento específico:

1. Leia o arquivo indicado em /entrada
2. Identifique o tipo: ata, relatório, contrato, briefing ou outro
3. Aplique o processamento adequado:
   - Ata: participantes, decisões, próximos passos
   - Relatório: números-chave, tendências, destaques
   - Contrato: partes, objeto, valor, vigência, rescisão
   - Briefing: objetivo, escopo, prazo, orçamento
   - Outro: resumo com pontos principais
4. Salve em /saidas com o nome: resumo_[nome-original].txt
5. Confirme o que foi salvo e o caminho completo

## Formato de output obrigatório
Arquivo processado: [nome-original]
Tipo identificado: [tipo]
Salvo em: /saidas/resumo_[nome-original].txt
