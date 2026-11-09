# Resumo executivo — Projeto Plataforma de E-learning

**Período:** março de 2026 · **Responsável:** Mariana Costa (Gerente de Projeto)

## Contexto

O projeto está 65% concluído e tem 2 semanas de atraso. Há dois motivos: a integração com o gateway de pagamento foi mais complexa que o previsto, e um desenvolvedor sênior saiu da equipe em fevereiro. A qualidade das entregas está acima do esperado, e o cliente ficou satisfeito com as 3 últimas demos.

## Pontos principais

- **Módulos concluídos:** Autenticação e Perfil (100%) e Catálogo de Cursos (100%).
- **Em andamento:** Player de Vídeo (80%) e Área Administrativa (60%). No player faltam as legendas automáticas e o modo PiP no mobile. Na área administrativa faltam os relatórios financeiros e a exportação de dados.
- **Bloqueio crítico:** o Sistema de Pagamentos está em 45%. A integração com o Stripe tem problemas de webhook, a documentação da API está desatualizada e a equipe aguarda resposta do suporte.
- **Gamificação (0%):** prevista para abril, pode passar para maio se o módulo de pagamentos continuar atrasado.
- **Orçamento:** R$ 312.000 gastos de R$ 480.000. A projeção final é de R$ 510.000, um estouro de 6,25%. A principal causa é o freelancer contratado para cobrir a vaga aberta.

## Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Atraso no gateway de pagamento | Alta | Crítico | Avaliar PagSeguro como alternativa ao Stripe |
| Saída de mais membros da equipe | Média | Alto | Processo seletivo preventivo |
| Custo de infraestrutura acima do orçado | Baixa | Médio | Encoding de vídeo serverless |

## Decisões solicitadas à diretoria

1. Aprovar R$ 30.000 de orçamento adicional para cobrir o estouro projetado.
2. Autorizar a contratação de 1 dev pleno até o fim do projeto.
3. Definir o que vem primeiro: gamificação ou relatórios financeiros.

## Próximos passos — abril de 2026

| Ação | Prazo |
|---|---|
| Decidir entre resolver o bloqueio do Stripe ou migrar para o PagSeguro | 03/04 |
| Finalizar o player de vídeo (legendas + PiP) | 11/04 |
| Implementar o fluxo completo de assinatura | 18/04 |
| Iniciar o módulo de gamificação | a partir de 21/04 |
| Demo para o cliente com o pagamento funcionando | 25/04 |
