# Assistente de produtividade

Organização de arquivos e extração das informações principais de atas, contratos, briefings e relatórios com Claude Cowork.

| Etapa | Arquivos |
|---|---|
| Entrada | [Documentos e imagem](entrada/) organizados por assunto |
| Organização | [Skill organizador-de-arquivos](skills/organizador-de-arquivos/SKILL.md) |
| Processamento | [Skill processador-de-documentos](skills/processador-de-documentos/SKILL.md) |
| Resultado | [Resumos individuais](saidas/) e [visão geral](saidas/visao_geral_documentos.txt) |

## Como explorar

1. Abra um documento em `entrada/` e compare com seu resumo em `saidas/`.
2. Leia as duas skills para entender as regras de organização e extração.
3. Para repetir o exercício no Cowork, abra esta pasta como área de trabalho e disponibilize as skills pelo mecanismo de instalação da ferramenta. A presença dos arquivos no repositório não os instala automaticamente.
4. Peça o processamento de um arquivo específico, informando seu caminho dentro de `entrada/`.

A organização de arquivos prevê a revisão de um plano antes de mover os documentos. O processamento salva os resumos em `saidas/`.

## Histórico

A pasta de entrada já está organizada. Os relatórios e resumos foram preservados, inclusive as duas versões de resumo da reunião. O histórico permite comparar as entregas; não representa uma nova execução nesta reorganização.

[Voltar à apresentação](../../README.md)
