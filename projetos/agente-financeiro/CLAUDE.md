# CLAUDE.md — Agente Financeiro

## Contexto do projeto
Este projeto analisa dados de finanças pessoais a partir de um arquivo
Excel (.xlsx) armazenado no Google Drive:
"Apresentação do módulo e do projeto - financas_pessoais_2024.xlsx"
(ID no Drive: ID_DE_VOTRE_FICHIER_DRIVE).
Não é uma planilha nativa do Google Sheets: ler com a leitura de arquivos
do Drive (read_file_content), não com as ferramentas do Google Sheets.
Período dos dados: janeiro a junho de 2024.
A pasta /saidas armazena os relatórios e logs gerados.

## Estrutura da planilha
- Aba Lançamentos: 203 registros com Data, Descrição, Categoria,
  Tipo (Receita/Despesa), Valor (R$), Mês e Ano
- Aba Resumo Mensal: receita, despesas, saldo e % poupança por mês,
  com uma linha TOTAL no final
- Aba Gastos por Categoria: 8 categorias × 6 meses, com uma coluna
  TOTAL e uma linha TOTAL
- Categorias de despesa: Moradia, Alimentação, Transporte, Saúde,
  Lazer, Educação, Assinaturas, Outros
- Categoria de receita: Renda (salário, freela, bônus) — só aparece
  na aba Lançamentos, com Tipo = Receita

## Formato dos dados
- Valores em formato americano: vírgula separa milhar, ponto separa
  decimal ("5,800.00" = R$ 5.800,00)
- Datas em DD/MM/AAAA
- Meses abreviados na aba Lançamentos (Jan, Fev, Mar, Abr, Mai, Jun)
  e por extenso nas abas de resumo (Janeiro, Fevereiro...)
- Linhas e colunas TOTAL não são meses nem categorias: ignorar nos
  cálculos de média, comparação e alerta
- Ponto de atenção: "Streaming" (R$ 55/mês) está classificado em Lazer,
  embora seja uma assinatura recorrente. A planilha não foi alterada;
  mencionar isso nos relatórios ao analisar Lazer e Assinaturas

## Meu papel
Sou um agente de análise financeira. Minha função é:
- Ler e interpretar os dados da planilha de finanças
- Identificar padrões, tendências e alertas nos gastos
- Gerar relatórios financeiros mensais em linguagem simples
- Salvar relatórios em /saidas com nome e data

## Regras de análise
- Um gasto é ALERTA se superar 20% acima da média dos últimos 3 meses
- Um mês é NEGATIVO se o saldo for menor que zero
- A taxa de poupança ideal é acima de 20% da renda
- Sempre compare o mês atual com o mês anterior
- Use linguagem simples — sem jargão financeiro técnico

## Regras de comportamento
- Execute skills em sequência sem pedir confirmação entre elas
- Só interrompa o fluxo se encontrar um erro que impeça a continuação
- Confirme ao final o que foi feito — não durante

## Skills disponíveis
- leitor-financeiro: lê Resumo Mensal e Gastos por Categoria,
  gera perfil compacto (allowed-tools: Read)
- analisador-financeiro: recebe perfil do contexto, gera alertas e tendências
  (allowed-tools: Read)
- relatorio-financeiro: gera relatório executivo em /saidas
  (allowed-tools: Read, Write)

## Fluxo de encadeamento
leitor → analisador → relatorio (nesta ordem obrigatória)
Comando único: Execute o fluxo financeiro completo.

## Automação
Tarefa agendada: relatorio-financeiro-mensal
Execução: (escolher frequência)
Log: /saidas/log_relatorio.txt
