(function(){
'use strict';
var CATS=['Moradia','Alimentação','Transporte','Saúde','Lazer','Educação','Assinaturas','Outros'];
var COL={'Moradia':'#4F6BD8','Alimentação':'#D4A72C','Transporte':'#2A9D8F','Saúde':'#E07A5F','Lazer':'#9D6BE0','Educação':'#3FA7D6','Assinaturas':'#8A97AB','Outros':'#D1495B'};
var CONTRATUAIS=['Aluguel','Condomínio','Internet','Plano de saúde','Academia','Netflix','Spotify','iCloud','Amazon Prime','Canva Pro','Streaming','Assinatura curso','Curso online'];
var GOAL=20;
function pad(n){return String(n).padStart(2,'0');}

/* ================= IDIOMAS ================= */
var STATIC_EN={"Agente Financeiro": "Financial Agent", "Painel analítico, jan a jun 2024": "Analytics dashboard, Jan to Jun 2024", "O case": "The case", "Visão geral": "Overview", "Categorias": "Categories", "Lançamentos": "Transactions", "Diagnóstico": "Diagnosis", "Método": "Method", "Tema": "Theme", "Imprimir": "Print", "Meses": "Months", "Limpar filtros": "Clear filters", "Um agente que transforma uma planilha de finanças em diagnóstico.": "An agent that turns a finance spreadsheet into a diagnosis.", "Entra": "In", "Planilha de receitas e despesas": "Income and expense spreadsheet", "Processa": "Process", "3 skills em sequência": "3 skills in sequence", "Sai": "Out", "Perfil, alertas e onde agir": "Profile, alerts and where to act", "Para que serve": "What it is for", "Mostrar para onde vai o dinheiro e onde agir, sem montar a análise à mão.": "Show where the money goes and where to act, without building the analysis by hand.", "O que faz": "What it does", "Lê os dados, resume cada mês, aplica regras de alerta e entrega o relatório.": "Reads the data, summarizes each month, applies alert rules and delivers the report.", "O que encontrou aqui": "What it found here", "5 de 6": "5 of 6", "meses com gasto acima da receita": "months with spending above income", "do gasto se repete todo mês": "of spending repeats every month", "alertas pelas regras do projeto": "alerts from the project rules", "As skills": "The skills", "Cada skill é um conjunto de instruções com uma única função. Uma entrega o resultado para a próxima.": "Each skill is a set of instructions with a single job. Each one hands its result to the next.", "Função:": "Job:", "organizar os dados.": "organize the data.", "Entrega:": "Delivers:", "perfil de cada mês e categoria.": "profile of each month and category.", "Ativa": "Active", "interpretar o perfil.": "interpret the profile.", "alertas, tendências e pontos positivos.": "alerts, trends and positive points.", "apresentar o resultado.": "present the result.", "relatório final. Este painel cumpre o papel.": "final report. This dashboard fills that role.", "Ainda não existe": "Does not exist yet", "Como proceder": "How to proceed", "Colocar a planilha": "Add the spreadsheet", "Na pasta do projeto no Drive.": "In the project folder on Drive.", "Pedir a leitura": "Ask for the reading", "“Ler planilha” aciona o leitor-financeiro.": "“Read spreadsheet” triggers leitor-financeiro.", "Deixar analisar": "Let it analyze", "O analisador-financeiro roda logo em seguida.": "analisador-financeiro runs right after.", "Gerar e salvar": "Generate and save", "Relatório na nuvem e em C:\\Users\\User\\Desktop\\ClaudeCowork.": "Report in the cloud and in C:\\Users\\User\\Desktop\\ClaudeCowork.", "Dados desta planilha: janeiro a junho de 2024. Ainda não confirmado se são de exemplo ou reais.": "Data in this spreadsheet: January to June 2024. Not yet confirmed whether it is sample or real data.", "Conclusão principal da análise": "Main conclusion of the analysis", "Receita, despesas e saldo por mês": "Income, expenses and balance by month", "Clique num mês para isolá-lo no painel inteiro.": "Click a month to isolate it across the whole dashboard.", "Taxa de poupança contra a meta": "Savings rate vs. target", "Linha tracejada: meta de 20% do projeto.": "Dashed line: the project’s 20% target.", "Para onde vai o dinheiro": "Where the money goes", "Clique numa categoria para filtrar por ela.": "Click a category to filter by it.", "O que os dados dizem": "What the data says", "Achados do analista sobre o período completo, do mais ao menos importante.": "Analyst findings for the full period, from most to least important.", "Composição das despesas mês a mês": "Expense breakdown month by month", "Cada cor é uma categoria.": "Each color is a category.", "Desvio de cada mês contra a média": "Each month’s deviation from the average", "Quanto cada categoria gastou acima ou abaixo da própria média do período.": "How much each category spent above or below its own average for the period.", "acima da média": "above average", "abaixo da média": "below average", "cor mais forte, desvio maior": "stronger color, larger deviation", "Raio-X da categoria": "Category deep dive", "Escolha uma categoria para ver a evolução e os itens que a compõem.": "Pick a category to see its trend and the items that make it up.", "Pareto dos gastos": "Spending Pareto", "Itens do maior para o menor (barras) e o percentual acumulado (linha). A faixa tracejada marca 80%.": "Items from largest to smallest (bars) and the cumulative percentage (line). The dashed line marks 80%.", "Gasto fixo, recorrente ou eventual": "Fixed, recurring or one-off spending", "Classificação de cada item pela frequência ao longo dos 6 meses.": "Each item classified by how often it appears across the 6 months.", "Quando o dinheiro sai": "When the money goes out", "Gasto por faixa de dias do mês.": "Spending by range of days in the month.", "Todos os lançamentos": "All transactions", "Pesquise, ordene clicando no cabeçalho. Respeita os filtros do topo.": "Search, and sort by clicking a header. Follows the filters at the top.", "Como os agentes do projeto processam estes dados": "How the project’s agents process this data", "O fluxo de skills que lê a planilha, analisa e gera o relatório.": "The skill flow that reads the spreadsheet, analyzes it and generates the report.", "Agente 1": "Agent 1", "Lê as abas de resumo e monta o perfil: mês a mês, categorias, destaques.": "Reads the summary tabs and builds the profile: month by month, categories, highlights.", "Ativo": "Active", "Agente 2": "Agent 2", "Aplica 3 regras de alerta, busca tendências e pontos positivos.": "Applies 3 alert rules and looks for trends and positive points.", "Agente 3": "Agent 3", "Montaria o relatório final. Este painel faz esse papel por enquanto.": "Would build the final report. This dashboard plays that role for now.", "Não existe na conta": "Not in the account", "Alertas pelas regras do projeto": "Alerts from the project rules", "O déficit é de patamar, não de exceção": "The deficit is structural, not an exception", "Despesa média mensal em cada cenário, contra o salário recorrente.": "Average monthly spending in each scenario, against the recurring salary.", "Onde o gasto é mais instável": "Where spending is least stable", "Variação mês a mês dos itens recorrentes (coeficiente de variação). Quanto maior, mais imprevisível.": "Month-to-month variation of recurring items (coefficient of variation). The higher, the less predictable.", "Qualidade e limites dos dados": "Data quality and limits", "Checagens feitas antes de qualquer conclusão.": "Checks made before drawing any conclusion.", "Definições usadas no painel": "Definitions used in the dashboard", "Para ler qualquer número daqui sem ambiguidade.": "To read any number here without ambiguity.", "Saldo": "Balance", "Receita menos despesas do mês.": "Income minus expenses for the month.", "Taxa de poupança": "Savings rate", "Saldo dividido pela receita do mês. A meta do projeto é 20%.": "Balance divided by the month’s income. The project target is 20%.", "Contratual": "Contract", "Item com valor combinado que se repete: aluguel, condomínio, internet, plano de saúde, academia, assinaturas e cursos.": "Item with an agreed amount that repeats: rent, condo fees, internet, health insurance, gym, subscriptions and courses.", "Recorrente": "Recurring", "Item que aparece em 5 ou 6 dos 6 meses, com valor variável (supermercado, gasolina, contas de consumo).": "Item that appears in 5 or 6 of the 6 months, with a variable amount (supermarket, gasoline, utility bills).", "Eventual": "One-off", "Item que aparece em até 4 dos 6 meses (eletrônico, viagem, consultas, consertos).": "Item that appears in up to 4 of the 6 months (electronics, travel, doctor visits, repairs).", "Coeficiente de variação": "Coefficient of variation", "Desvio padrão dividido pela média. Mede o quanto um gasto oscila, em porcentagem da própria média.": "Standard deviation divided by the mean. Measures how much a cost fluctuates, as a percentage of its own average.", "Alerta de categoria": "Category alert", "Gasto 20% ou mais acima da média dos 3 meses anteriores. Só avaliável de abril em diante.": "Spending 20% or more above the average of the previous 3 months. Can only be assessed from April onward.", "Tendência": "Trend", "Três variações seguidas na mesma direção dentro de uma categoria.": "Three consecutive changes in the same direction within a category.", "Fonte: planilha financas_pessoais_2024.xlsx (abas Lançamentos, Resumo Mensal e Gastos por Categoria). Os 203 lançamentos foram conferidos contra as abas de resumo: as 48 combinações de categoria e mês batem ao centavo. Ainda não está confirmado se os dados são de exemplo ou reais; as leituras descrevem a planilha e não são recomendação financeira.": "Source: spreadsheet financas_pessoais_2024.xlsx (Lançamentos, Resumo Mensal and Gastos por Categoria tabs). All 203 transactions were checked against the summary tabs: the 48 category and month combinations match to the cent. It is not yet confirmed whether the data is sample or real; the readings describe the spreadsheet and are not financial advice.", "Gráficos com Chart.js (licença MIT), embutido no arquivo para funcionar sem internet.": "Charts by Chart.js (MIT license), embedded in the file so it works offline.", "Seções do painel": "Dashboard sections", "Alternar tema claro e escuro": "Toggle light and dark theme", "Idioma": "Language", "Filtros": "Filters", "Gráfico de receita, despesas e saldo por mês": "Chart of income, expenses and balance by month", "Taxa de poupança mensal comparada à meta de 20%": "Monthly savings rate compared with the 20% target", "Despesa total por categoria": "Total spending by category", "Unidade": "Unit", "Despesas mensais empilhadas por categoria": "Monthly expenses stacked by category", "Evolução mensal da categoria escolhida": "Monthly trend of the selected category", "Itens que compõem a categoria escolhida": "Items that make up the selected category", "Gráfico de Pareto dos itens de despesa": "Pareto chart of expense items", "Divisão do gasto entre contratual, recorrente e eventual": "Split of spending into contract, recurring and one-off", "Despesa por faixa de dias do mês": "Spending by range of days in the month", "Buscar por descrição ou categoria": "Search by description or category", "Buscar lançamentos": "Search transactions", "Comparação entre despesa média, despesa sem eventuais, salário e limite para poupar 20%": "Comparison of average spending, spending without one-offs, salary and the limit to save 20%", "Coeficiente de variação dos itens recorrentes": "Coefficient of variation of recurring items", "Painel analítico — Agente Financeiro": "Analytics dashboard — Financial Agent"};
var I18N={
'pt-BR':{
  loc:'pt-BR',title:'Painel analítico — Agente Financeiro',
  M:['Jan','Fev','Mar','Abr','Mai','Jun'],MF:['janeiro','fevereiro','março','abril','maio','junho'],
  cat:{},item:{},inc:{},
  K:{c:'Contratual',r:'Recorrente',e:'Eventual'},
  fMonths:'Meses',fCats:'Categorias',fAll:'Tudo',fCount:function(m,c){return m+' '+(m>1?'meses':'mês')+', '+c+' '+(c>1?'categorias':'categoria');},
  scopeAll:'Mostrando tudo: 6 meses e 8 categorias',
  scope:function(m,c){return 'Filtro ativo: '+m+' de 6 meses, '+c+' de 8 categorias';},
  read:'Leitura:',
  leadH:function(p){return 'O déficit é de patamar: '+p+' do gasto se repete todo mês.';},
  leadP:function(a,b,c,d,e){return 'A despesa média é de <b>'+a+'</b> e o salário recorrente, <b>'+b+'</b>. Mesmo sem nenhum gasto eventual, a média ficaria em <b>'+c+'</b>, ainda acima do salário. Só os itens contratuais já comprometem <b>'+d+'</b> por mês, '+e+' da renda.';},
  kRec:'Receita',kDes:'Despesas',kDesF:'Despesas filtradas',kSal:'Saldo',kPou:'Taxa de poupança',kTk:'Ticket médio',kMed:'Despesa média por mês',
  months:function(n){return n+(n>1?' meses':' mês');},
  nTx:function(n){return n+' lançamentos';},
  ofTotal:function(x){return 'de '+x+' no total';},
  allCats:'todas as categorias',goal:'meta: 20%',perTx:'por lançamento',base:function(x){return 'base: '+x+' de salário';},
  rec:'Receita',des:'Despesas',sal:'Saldo',salAxis:'Saldo (R$)',incomeFoot:function(x){return 'Receita: '+x;},
  rFlow:function(n,m){return 'a despesa (vermelho) passou da receita (verde) em <b>'+n+' de '+m+'</b> '+(m>1?'meses':'mês')+' do recorte. A linha dourada é o saldo, no eixo da direita.';},
  sav:'Poupança',goalLine:'Meta 20%',
  rSav:function(x){return 'no melhor mês do recorte, a poupança ficou <b>'+x+' pontos percentuais</b> abaixo da meta.';},
  finds:function(v){return [
    ['O problema é o patamar, não um mês ruim','Itens contratuais e recorrentes somam '+v.rec+' do gasto. Gastos eventuais são só '+v.ev+'.'],
    ['Metade da renda já sai comprometida','Os 13 itens contratuais custam '+v.contr+' por mês: '+v.contrPct+' do salário de '+v.base+' antes de qualquer compra.'],
    [v.n80+' de '+v.n+' itens concentram 80% do gasto','Só o aluguel responde por '+v.rent+'. Qualquer ajuste relevante passa por poucos itens.'],
    ['Restaurante é o gasto que mais cresceu em reais','A média mensal subiu de '+v.a1+' (jan e fev) para '+v.a2+' (mar a jun): '+v.diff+' a mais por mês, alta de '+v.grow+'.'],
    ['Os picos de abril e maio têm nome','Eletrônicos em três meses seguidos somam '+v.ele+'; em maio, viagem e restaurante explicam o salto de lazer.'],
    ['O começo do mês pesa mais',v.early+' do gasto acontece nos dias 1 a 10. É a janela de maior pressão sobre o caixa.']];},
  thCat:'Categoria',thAvg:'Média',
  stTot:'Total no período',stAvg:'Média mensal',stMax:'Maior mês',stCv:'Variação (CV)',avg:'Média',
  rCat:function(c,i,p,l){return 'em '+c.toLowerCase()+', <b>'+i+'</b> responde por '+p+' do gasto no recorte. '+['Variação baixa: é previsível e fácil de orçar.','Variação moderada.','Variação alta: é uma categoria difícil de prever.'][l];},
  spend:'Gasto',cum:'% acumulado',cumTip:'Acumulado: ',
  rPareto:function(a,b,t,p){return '<b>'+a+' de '+b+'</b> itens explicam 80% do gasto no recorte (barras fortes). O maior é <b>'+t+'</b>, com '+p+'.';},
  rMix:function(p){return 'só <b>'+p+'</b> do gasto é eventual. Cortar exceções ajuda pouco; o peso está no que se repete.';},
  days:['Dias 1 a 10','Dias 11 a 20','Dias 21 a 31'],
  rDays:function(p){return p+' do gasto sai nos 10 primeiros dias do mês.';},
  th:['Data','Descrição','Categoria','Tipo','Valor'],
  date:function(d,m){return pad(d)+'/'+pad(m+1);},
  count:function(a,b){return a+' de '+b+' lançamentos';},
  alCat:function(c,m){return c+' em '+m;},
  alCatD:function(v,a){return v+' contra média de '+a+' nos 3 meses anteriores';},
  alNeg:function(n){return 'Saldo negativo em '+n+' meses';},
  alNegD:function(ms,t){return ms+'. Acumulado do semestre: '+t;},
  alLow:function(n){return 'Poupança abaixo de 20% em '+n+' meses';},
  alLowD:function(m,p){return 'Melhor mês: '+m+', com '+p;},
  alSub:function(n){return n+' ocorrências em 3 regras. Calculado sobre os 6 meses, porque as regras dependem do histórico.';},
  struct:['Despesa média','Sem gastos eventuais','Salário recorrente','Limite para poupar 20%'],
  rStruct:function(a,b,c){return 'zerar os eventuais ainda deixaria '+a+' por mês acima do salário. Para poupar 20%, a despesa teria de cair '+b+' por mês. O eixo começa em '+c+' para destacar as diferenças.';},
  varTip:'Variação: ',
  rCv:function(i,p){return '<b>'+i+'</b> é o item recorrente mais imprevisível, com variação de '+p+' em torno da média. Itens contratuais ficaram de fora porque o valor é fixo.';},
  qa:[['203 lançamentos lidos','6 receitas e 197 despesas, sem campos vazios.',0],
      ['Somas conferidas','As 48 combinações de categoria e mês batem ao centavo com a aba Gastos por Categoria; as receitas batem com o Resumo Mensal.',0],
      ['Sem duplicatas','Nenhum lançamento repetido com mesma data, descrição e valor.',0],
      ['Período curto','Só 6 meses: tendências e sazonalidade têm pouca base estatística.',1],
      ['Dados de 2024','Para decisões atuais, a planilha precisa de meses recentes.',1],
      ['Origem a confirmar','Ainda não está confirmado se a planilha é de exemplo ou reflete finanças reais.',1]]
},
'en-US':{
  loc:'en-US',title:'Analytics dashboard — Financial Agent',
  M:['Jan','Feb','Mar','Apr','May','Jun'],MF:['January','February','March','April','May','June'],
  cat:{'Moradia':'Housing','Alimentação':'Food','Transporte':'Transport','Saúde':'Health','Lazer':'Leisure','Educação':'Education','Assinaturas':'Subscriptions','Outros':'Other'},
  item:{'Aluguel':'Rent','Supermercado':'Supermarket','Gasolina':'Gasoline','Plano de saúde':'Health insurance','Restaurante':'Restaurant','Conta de luz':'Electricity bill','Condomínio':'Condo fees','Feira livre':'Street market','Assinatura curso':'Course subscription','Eletrônico':'Electronics','Açougue':'Butcher','Viagem':'Travel','Metrô/ônibus':'Metro/bus','Academia':'Gym','Roupa':'Clothing','Conta de água':'Water bill','Farmácia':'Pharmacy','Hortifruti':'Produce','Curso online':'Online course','Consulta médica':'Doctor visit','Mercearia':'Grocery store','Doação':'Donation','Exame':'Medical test','Estacionamento':'Parking','Conserto':'Repairs','Livros':'Books','Manutenção carro':'Car maintenance','Material didático':'Study materials','Cinema':'Movies','Presente':'Gift'},
  inc:{'Salário':'Salary','Salário + Freela':'Salary + Freelance','Salário + Bônus':'Salary + Bonus'},
  K:{c:'Contract',r:'Recurring',e:'One-off'},
  fMonths:'Months',fCats:'Categories',fAll:'All',fCount:function(m,c){return m+' '+(m>1?'months':'month')+', '+c+' '+(c>1?'categories':'category');},
  scopeAll:'Showing everything: 6 months and 8 categories',
  scope:function(m,c){return 'Active filter: '+m+' of 6 months, '+c+' of 8 categories';},
  read:'Reading:',
  leadH:function(p){return 'The deficit is structural: '+p+' of spending repeats every month.';},
  leadP:function(a,b,c,d,e){return 'Average spending is <b>'+a+'</b> and the recurring salary is <b>'+b+'</b>. Even without any one-off expense, the average would be <b>'+c+'</b>, still above the salary. Contract items alone commit <b>'+d+'</b> per month, '+e+' of income.';},
  kRec:'Income',kDes:'Expenses',kDesF:'Filtered expenses',kSal:'Balance',kPou:'Savings rate',kTk:'Average ticket',kMed:'Average monthly spending',
  months:function(n){return n+(n>1?' months':' month');},
  nTx:function(n){return n+' transactions';},
  ofTotal:function(x){return 'of '+x+' total';},
  allCats:'all categories',goal:'target: 20%',perTx:'per transaction',base:function(x){return 'base: '+x+' salary';},
  rec:'Income',des:'Expenses',sal:'Balance',salAxis:'Balance (R$)',incomeFoot:function(x){return 'Income: '+x;},
  rFlow:function(n,m){return 'spending (red) exceeded income (green) in <b>'+n+' of '+m+'</b> '+(m>1?'months':'month')+' of the selection. The gold line is the balance, on the right axis.';},
  sav:'Savings',goalLine:'20% target',
  rSav:function(x){return 'in the best month of the selection, savings were <b>'+x+' percentage points</b> below target.';},
  finds:function(v){return [
    ['The issue is the baseline, not a bad month','Contract and recurring items make up '+v.rec+' of spending. One-off expenses are only '+v.ev+'.'],
    ['Half of income is committed upfront','The 13 contract items cost '+v.contr+' per month: '+v.contrPct+' of the '+v.base+' salary before any purchase.'],
    [v.n80+' of '+v.n+' items account for 80% of spending','Rent alone accounts for '+v.rent+'. Any meaningful adjustment goes through a few items.'],
    ['Restaurants grew the most in absolute terms','The monthly average rose from '+v.a1+' (Jan and Feb) to '+v.a2+' (Mar to Jun): '+v.diff+' more per month, up '+v.grow+'.'],
    ['The April and May spikes have names','Electronics in three consecutive months total '+v.ele+'; in May, travel and restaurants explain the jump in leisure.'],
    ['The start of the month weighs more',v.early+' of spending happens on days 1 to 10. That is the window of greatest cash pressure.']];},
  thCat:'Category',thAvg:'Average',
  stTot:'Total in period',stAvg:'Monthly average',stMax:'Highest month',stCv:'Variation (CV)',avg:'Average',
  rCat:function(c,i,p,l){return 'in '+c.toLowerCase()+', <b>'+i+'</b> accounts for '+p+' of spending in the selection. '+['Low variation: predictable and easy to budget.','Moderate variation.','High variation: a hard category to predict.'][l];},
  spend:'Spending',cum:'Cumulative %',cumTip:'Cumulative: ',
  rPareto:function(a,b,t,p){return '<b>'+a+' of '+b+'</b> items explain 80% of spending in the selection (solid bars). The largest is <b>'+t+'</b>, at '+p+'.';},
  rMix:function(p){return 'only <b>'+p+'</b> of spending is one-off. Cutting exceptions helps little; the weight is in what repeats.';},
  days:['Days 1 to 10','Days 11 to 20','Days 21 to 31'],
  rDays:function(p){return p+' of spending happens in the first 10 days of the month.';},
  th:['Date','Description','Category','Type','Amount'],
  date:function(d,m){return I18N['en-US'].M[m]+' '+pad(d);},
  count:function(a,b){return a+' of '+b+' transactions';},
  alCat:function(c,m){return c+' in '+m;},
  alCatD:function(v,a){return v+' vs. an average of '+a+' over the previous 3 months';},
  alNeg:function(n){return 'Negative balance in '+n+' months';},
  alNegD:function(ms,t){return ms+'. Half-year total: '+t;},
  alLow:function(n){return 'Savings below 20% in '+n+' months';},
  alLowD:function(m,p){return 'Best month: '+m+', at '+p;},
  alSub:function(n){return n+' occurrences across 3 rules. Calculated over all 6 months because the rules depend on history.';},
  struct:['Average spending','Without one-off spending','Recurring salary','Limit to save 20%'],
  rStruct:function(a,b,c){return 'removing one-off spending would still leave '+a+' per month above the salary. To save 20%, spending would need to drop '+b+' per month. The axis starts at '+c+' to highlight the differences.';},
  varTip:'Variation: ',
  rCv:function(i,p){return '<b>'+i+'</b> is the least predictable recurring item, varying '+p+' around its average. Contract items are excluded because their amount is fixed.';},
  qa:[['203 transactions read','6 income entries and 197 expenses, with no empty fields.',0],
      ['Totals checked','The 48 category and month combinations match the Gastos por Categoria tab to the cent; income matches the Resumo Mensal tab.',0],
      ['No duplicates','No repeated transaction with the same date, description and amount.',0],
      ['Short period','Only 6 months: trends and seasonality have little statistical basis.',1],
      ['2024 data','For current decisions, the spreadsheet needs recent months.',1],
      ['Origin to be confirmed','It is not yet confirmed whether the spreadsheet is sample data or reflects real finances.',1]]
}};
var LANGS=[{id:'pt-BR',code:'PT',label:'Português (Brasil)'},{id:'en-US',code:'EN',label:'English (US)'}];
var lang='pt-BR';try{var sl=localStorage.getItem('rf-lang');if(I18N[sl])lang=sl;}catch(err){}
var L=I18N[lang],nf,nf0;
function setFormatters(){nf=new Intl.NumberFormat(L.loc,{minimumFractionDigits:2,maximumFractionDigits:2});nf0=new Intl.NumberFormat(L.loc,{maximumFractionDigits:0});}
setFormatters();
function C(c){return L.cat[c]||c;}
function IT(d){return L.item[d]||d;}

/* ---------- utilidades ---------- */
function $(s){return document.querySelector(s);}
function r2(x){return Math.round(x*100)/100;}
function rHA(x,d){var f=Math.pow(10,d);return (x<0?-1:1)*Math.round(Math.abs(x)*f+1e-9)/f;}
function sg(n){return n<0?'−':'';}
function brl(n){return sg(n)+'R$ '+nf.format(Math.abs(n));}
function brl0(n){return sg(n)+'R$ '+nf0.format(Math.abs(n));}
function num(n,d){return Math.abs(n).toFixed(d==null?1:d).replace('.',L.loc==='pt-BR'?',':'.');}
function pct(n,d){return sg(n)+num(n,d)+'%';}
function sum(a){return r2(a.reduce(function(x,y){return x+y;},0));}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function mean(a){return a.reduce(function(x,y){return x+y;},0)/a.length;}
function sd(a){var m=mean(a);return Math.sqrt(mean(a.map(function(x){return (x-m)*(x-m);})));}
function rd(html){return '<b>'+L.read+'</b> '+html;}

/* ---------- dados ---------- */
var ROWS=DESP.map(function(r,i){return {id:i,d:r[0],m:r[1],desc:r[2],cat:r[3],v:r[4]};});
var REC=[0,0,0,0,0,0];RECE.forEach(function(r){REC[r[1]]+=r[3];});
var RECLAB=['','','','','',''];RECE.forEach(function(r){RECLAB[r[1]]=r[2];});
var itemMonths={};ROWS.forEach(function(r){(itemMonths[r.desc]=itemMonths[r.desc]||{})[r.m]=1;});
function cls(desc){if(CONTRATUAIS.indexOf(desc)>=0)return 'c';return Object.keys(itemMonths[desc]).length>=5?'r':'e';}
ROWS.forEach(function(r){r.k=cls(r.desc);});
var DESP_M=[0,0,0,0,0,0];ROWS.forEach(function(r){DESP_M[r.m]+=r.v;});DESP_M=DESP_M.map(r2);
var BASE=REC[0];

/* ---------- estado ---------- */
var S={months:[0,1,2,3,4,5],cats:CATS.slice(),stack:'abs',cat:'Lazer',q:'',sort:{k:'date',dir:1},tab:'o-case'};
function inM(m){return S.months.indexOf(m)>=0;}
function inC(c){return S.cats.indexOf(c)>=0;}
function F(){return ROWS.filter(function(r){return inM(r.m)&&inC(r.cat);});}
function allCats(){return S.cats.length===CATS.length;}

/* ---------- tema para gráficos ---------- */
var charts={};
function T(){var cs=getComputedStyle(document.documentElement);function g(n){return cs.getPropertyValue(n).trim();}
  return {ink:g('--ink'),ink2:g('--ink-2'),line:g('--line'),pos:g('--pos'),neg:g('--neg'),brass:g('--brass'),surface:g('--surface')};}
function setDefaults(){var t=T();
  Chart.defaults.font.family=getComputedStyle(document.body).fontFamily;
  Chart.defaults.font.size=12;Chart.defaults.color=t.ink2;Chart.defaults.borderColor=t.line;
  Chart.defaults.plugins.legend.labels.boxWidth=10;Chart.defaults.plugins.legend.labels.boxHeight=10;Chart.defaults.plugins.legend.labels.useBorderRadius=true;Chart.defaults.plugins.legend.labels.borderRadius=3;
  Chart.defaults.plugins.tooltip.backgroundColor='#0B1A2C';Chart.defaults.plugins.tooltip.titleColor='#E9EEF5';Chart.defaults.plugins.tooltip.bodyColor='#E9EEF5';
  Chart.defaults.plugins.tooltip.padding=10;Chart.defaults.plugins.tooltip.cornerRadius=8;Chart.defaults.plugins.tooltip.boxPadding=4;
  Chart.defaults.maintainAspectRatio=false;Chart.defaults.locale=L.loc;
  if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)Chart.defaults.animation=false;
}
function mk(id,cfg){if(charts[id])charts[id].destroy();var el=document.getElementById(id);if(!el)return;charts[id]=new Chart(el,cfg);}
function hex(c,fb){return c&&c.charAt(0)==='#'?c:fb;}
function alpha(h,a){var n=parseInt(h.replace('#',''),16);return 'rgba('+(n>>16&255)+','+(n>>8&255)+','+(n&255)+','+a+')';}
function moneyAxis(){return {grid:{color:T().line},border:{display:false},ticks:{callback:function(v){return nf0.format(v);}}};}

/* ---------- filtros ---------- */
function renderFilters(){
  $('#fMonths').innerHTML='<span class="flabel">'+L.fMonths+'</span>'+L.M.map(function(m,i){return '<button type="button" class="chip" data-m="'+i+'" aria-pressed="'+inM(i)+'">'+m+'</button>';}).join('');
  $('#fCats').innerHTML='<span class="flabel">'+L.fCats+'</span>'+CATS.map(function(c){return '<button type="button" class="chip" data-c="'+esc(c)+'" aria-pressed="'+inC(c)+'"><i style="background:'+COL[c]+'"></i>'+C(c)+'</button>';}).join('');
  var full=S.months.length===6&&allCats();
  $('#scopeTxt').textContent=full?L.scopeAll:L.scope(S.months.length,S.cats.length);
  $('#resetBtn').style.visibility=full?'hidden':'visible';
  $('#fSummary').textContent=full?L.fAll:L.fCount(S.months.length,S.cats.length);
  $('#fToggle').setAttribute('data-active',full?'0':'1');
}
function toggle(arr,v){var i=arr.indexOf(v);if(i>=0){if(arr.length>1)arr.splice(i,1);}else arr.push(v);arr.sort(function(a,b){return a-b;});}
function isolate(key,v,all){if(S[key].length===1&&S[key][0]===v)S[key]=all.slice();else S[key]=[v];}

/* ---------- VISÃO GERAL ---------- */
var LEAD={};
(function(){
  var tot=sum(DESP_M),k={c:0,r:0,e:0};ROWS.forEach(function(r){k[r.k]+=r.v;});
  LEAD.tot=tot;LEAD.k=k;LEAD.recShare=(k.c+k.r)/tot*100;LEAD.eShare=k.e/tot*100;
  LEAD.media=tot/6;LEAD.semE=LEAD.media-k.e/6;LEAD.contrM=k.c/6;
})();
function renderOverview(){
  var t=T(),Dm=F(),months=S.months;
  var rec=sum(months.map(function(m){return REC[m];})),desAll=sum(months.map(function(m){return DESP_M[m];}));
  var desF=sum(Dm.map(function(r){return r.v;})),saldo=r2(rec-desAll),poup=rHA(saldo/rec*100,1);
  $('#leadH').textContent=L.leadH(pct(LEAD.recShare));
  $('#leadP').innerHTML=L.leadP(brl(LEAD.media),brl(BASE),brl(LEAD.semE),brl(LEAD.contrM),pct(LEAD.contrM/BASE*100,0));
  var pos=hex(t.pos,'#0B7A66'),neg=hex(t.neg,'#B02E27'),brass=hex(t.brass,'#8F6616'),ink2=hex(t.ink2,'#4A5A6E');
  var K=[
    {l:L.kRec,v:brl(rec),s:L.months(months.length),sp:months.map(function(m){return REC[m];}),c:pos},
    {l:allCats()?L.kDes:L.kDesF,v:brl(allCats()?desAll:desF),s:allCats()?L.nTx(Dm.length):L.ofTotal(brl(desAll)),sp:months.map(function(m){return Dm.filter(function(r){return r.m===m;}).reduce(function(a,r){return a+r.v;},0);}),c:neg},
    {l:L.kSal,v:brl(saldo),cls:saldo<0?'neg':'pos',s:L.allCats,sp:months.map(function(m){return REC[m]-DESP_M[m];}),c:saldo<0?neg:pos},
    {l:L.kPou,v:pct(poup),cls:poup<0?'neg':'pos',s:L.goal,sp:months.map(function(m){return (REC[m]-DESP_M[m])/REC[m]*100;}),c:poup<0?neg:pos},
    {l:L.kTk,v:brl(Dm.length?desF/Dm.length:0),s:L.perTx,sp:months.map(function(m){var x=Dm.filter(function(r){return r.m===m;});return x.length?x.reduce(function(a,r){return a+r.v;},0)/x.length:0;}),c:brass},
    {l:L.kMed,v:brl(desAll/months.length),s:L.base(brl(BASE)),sp:months.map(function(m){return DESP_M[m];}),c:ink2}
  ];
  $('#kpis').innerHTML=K.map(function(k,i){return '<div class="kpi"><dt>'+k.l+'</dt><dd class="'+(k.cls||'')+'">'+k.v+'</dd><small>'+k.s+'</small><div class="spk"><canvas id="sp'+i+'" aria-hidden="true"></canvas></div></div>';}).join('');
  K.forEach(function(k,i){
    mk('sp'+i,{type:'line',data:{labels:months.map(function(m){return L.M[m];}),datasets:[{data:k.sp,borderColor:k.c,borderWidth:2,pointRadius:0,tension:.35,fill:{target:'origin'},backgroundColor:alpha(k.c,.12)}]},
      options:{responsive:true,plugins:{legend:{display:false},tooltip:{enabled:false}},scales:{x:{display:false},y:{display:false}},animation:false,events:[]}});
  });
  var labels=months.map(function(m){return L.M[m];});
  mk('cFlow',{type:'bar',data:{labels:labels,datasets:[
      {label:L.rec,data:months.map(function(m){return REC[m];}),backgroundColor:alpha(pos,.85),borderRadius:6,order:2},
      {label:L.des,data:months.map(function(m){return DESP_M[m];}),backgroundColor:alpha(neg,.85),borderRadius:6,order:2},
      {label:L.sal,type:'line',data:months.map(function(m){return r2(REC[m]-DESP_M[m]);}),borderColor:t.brass,backgroundColor:t.brass,borderWidth:2.5,pointRadius:5,pointHoverRadius:7,yAxisID:'y2',order:1,tension:.25}
    ]},
    options:{responsive:true,interaction:{mode:'index',intersect:false},
      plugins:{legend:{position:'top',align:'end'},tooltip:{callbacks:{label:function(c){return ' '+c.dataset.label+': '+brl(c.parsed.y);},footer:function(items){var m=months[items[0].dataIndex];return RECLAB[m]&&RECLAB[m]!=='Salário'?L.incomeFoot(L.inc[RECLAB[m]]||RECLAB[m]):'';}}}},
      scales:{x:{grid:{display:false}},y:Object.assign(moneyAxis(),{min:0,title:{display:true,text:'R$'}}),y2:{position:'right',grid:{display:false},border:{display:false},title:{display:true,text:L.salAxis},ticks:{callback:function(v){return nf0.format(v);}}}},
      onClick:function(e,els){if(els.length){isolate('months',months[els[0].index],[0,1,2,3,4,5]);refresh();}}}});
  var negN=months.filter(function(m){return REC[m]<DESP_M[m];}).length;
  $('#rFlow').innerHTML=rd(L.rFlow(negN,months.length));
  var sav=months.map(function(m){return rHA((REC[m]-DESP_M[m])/REC[m]*100,1);});
  mk('cSav',{type:'line',data:{labels:labels,datasets:[
      {label:L.sav,data:sav,borderColor:t.ink,borderWidth:2.5,pointRadius:5,pointBackgroundColor:sav.map(function(v){return v<0?t.neg:t.pos;}),pointBorderColor:t.surface,pointBorderWidth:2,tension:.25,fill:{target:{value:0},above:alpha('#0B7A66',.10),below:alpha('#B02E27',.14)}},
      {label:L.goalLine,data:months.map(function(){return GOAL;}),borderColor:t.brass,borderDash:[6,5],borderWidth:2,pointRadius:0}
    ]},options:{responsive:true,plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){return ' '+c.dataset.label+': '+pct(c.parsed.y);}}}},
      scales:{x:{grid:{display:false}},y:{grid:{color:t.line},border:{display:false},suggestedMin:-20,suggestedMax:25,ticks:{callback:function(v){return v+'%';}}}}}});
  var best=Math.max.apply(null,sav);
  $('#rSav').innerHTML=rd(L.rSav(num(GOAL-best)));
  var byCat=CATS.map(function(c){return {c:c,v:sum(Dm.filter(function(r){return r.cat===c;}).map(function(r){return r.v;}))};}).filter(function(x){return x.v>0;}).sort(function(a,b){return b.v-a.v;});
  var tot=sum(byCat.map(function(x){return x.v;}));
  mk('cCat',{type:'bar',data:{labels:byCat.map(function(x){return C(x.c);}),datasets:[{data:byCat.map(function(x){return x.v;}),backgroundColor:byCat.map(function(x){return COL[x.c];}),borderRadius:6,barThickness:'flex',maxBarThickness:30}]},
    options:{indexAxis:'y',responsive:true,plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){return ' '+brl(c.parsed.x)+' ('+pct(c.parsed.x/tot*100)+')';}}}},
      scales:{x:moneyAxis(),y:{grid:{display:false},border:{display:false},ticks:{color:t.ink,font:{weight:'700'}}}},
      onClick:function(e,els){if(els.length){isolate('cats',byCat[els[0].index].c,CATS);refresh();}}}});
  renderFinds();
}
function renderFinds(){
  var tot=LEAD.tot,items={};ROWS.forEach(function(r){items[r.desc]=(items[r.desc]||0)+r.v;});
  var arr=Object.keys(items).map(function(k){return {k:k,v:items[k]};}).sort(function(a,b){return b.v-a.v;});
  var cum=0,n80=0;for(var i=0;i<arr.length;i++){cum+=arr[i].v;if(cum/tot>=0.8){n80=i+1;break;}}
  var rs=[0,0,0,0,0,0];ROWS.forEach(function(r){if(r.desc==='Restaurante')rs[r.m]+=r.v;});
  var a1=(rs[0]+rs[1])/2,a2=(rs[2]+rs[3]+rs[4]+rs[5])/4;
  var ele=sum(ROWS.filter(function(r){return r.desc==='Eletrônico';}).map(function(r){return r.v;}));
  var early=sum(ROWS.filter(function(r){return r.d<=10;}).map(function(r){return r.v;}));
  var F_=L.finds({rec:pct(LEAD.recShare),ev:pct(LEAD.eShare),contr:brl(LEAD.contrM),contrPct:pct(LEAD.contrM/BASE*100,0),base:brl(BASE),n80:n80,n:arr.length,rent:pct(items['Aluguel']/tot*100),a1:brl(a1),a2:brl(a2),diff:brl(a2-a1),grow:pct((a2/a1-1)*100,0),ele:brl(ele),early:pct(early/tot*100)});
  $('#finds').innerHTML=F_.map(function(f){return '<li><div><b>'+f[0]+'</b><span>'+f[1]+'</span></div></li>';}).join('');
}

/* ---------- CATEGORIAS ---------- */
function catMonth(c){var v=[0,0,0,0,0,0];ROWS.forEach(function(r){if(r.cat===c)v[r.m]+=r.v;});return v.map(r2);}
function renderCategorias(){
  var t=T(),months=S.months,cats=CATS.filter(inC),labels=months.map(function(m){return L.M[m];}),pctMode=S.stack==='pct';
  var ds=cats.map(function(c){var v=catMonth(c);return {label:C(c),data:months.map(function(m){return pctMode?v[m]/DESP_M[m]*100:v[m];}),backgroundColor:COL[c],borderColor:t.surface,borderWidth:1,borderRadius:2};});
  mk('cStack',{type:'bar',data:{labels:labels,datasets:ds},options:{responsive:true,interaction:{mode:'index',intersect:false},
    plugins:{legend:{position:'bottom'},tooltip:{itemSort:function(a,b){return b.parsed.y-a.parsed.y;},callbacks:{label:function(c){return ' '+c.dataset.label+': '+(pctMode?pct(c.parsed.y):brl(c.parsed.y));}}}},
    scales:{x:{stacked:true,grid:{display:false}},y:{stacked:true,grid:{color:t.line},border:{display:false},max:pctMode?100:undefined,ticks:{callback:function(v){return pctMode?v+'%':nf0.format(v);}}}}}});
  document.querySelectorAll('.seg button').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-mode')===S.stack);});
  var h='<thead><tr><th scope="col">'+L.thCat+'</th>'+labels.map(function(l){return '<th scope="col">'+l+'</th>';}).join('')+'<th scope="col">'+L.thAvg+'</th></tr></thead><tbody>';
  cats.forEach(function(c){
    var v=catMonth(c),avg=mean(v);
    h+='<tr><td><span class="dot" style="background:'+COL[c]+'"></span>'+C(c)+'</td>';
    months.forEach(function(m){
      var d=avg?(v[m]/avg-1)*100:0,z=Math.abs(d)<0.5,a=Math.min(Math.abs(d)/60,1)*.62+(z?0:.06);
      var bg=z?'transparent':(d>0?'rgba(176,46,39,'+a.toFixed(2)+')':'rgba(11,122,102,'+a.toFixed(2)+')');
      h+='<td class="v" style="background:'+bg+';color:'+(a>.42?'#fff':'var(--ink)')+'" title="'+L.M[m]+': '+brl(v[m])+'">'+(z?'0%':(d>0?'+':'−')+Math.abs(d).toFixed(0)+'%')+'</td>';
    });
    h+='<td>'+brl0(avg)+'</td></tr>';
  });
  $('#heat').innerHTML=h+'</tbody>';
  if(!inC(S.cat))S.cat=cats[0];
  $('#catPick').innerHTML=cats.map(function(c){return '<button type="button" class="chip" data-pick="'+esc(c)+'" aria-pressed="'+(c===S.cat)+'"><i style="background:'+COL[c]+'"></i>'+C(c)+'</button>';}).join('');
  var c=S.cat,v=catMonth(c),avg=mean(v),cv=sd(v)/avg*100,iMax=v.indexOf(Math.max.apply(null,v));
  $('#catStats').innerHTML='<div><dt>'+L.stTot+'</dt><dd>'+brl(sum(v))+'</dd></div><div><dt>'+L.stAvg+'</dt><dd>'+brl(avg)+'</dd></div><div><dt>'+L.stMax+'</dt><dd>'+L.M[iMax]+' ('+brl0(v[iMax])+')</dd></div><div><dt>'+L.stCv+'</dt><dd>'+pct(cv,0)+'</dd></div>';
  mk('cCatLine',{type:'line',data:{labels:L.M,datasets:[
      {label:C(c),data:v,borderColor:COL[c],backgroundColor:alpha(COL[c],.15),fill:true,borderWidth:2.5,pointRadius:5,pointBackgroundColor:v.map(function(x,i){return inM(i)?COL[c]:t.line;}),tension:.3},
      {label:L.avg,data:v.map(function(){return avg;}),borderColor:t.ink2,borderDash:[5,5],borderWidth:1.5,pointRadius:0}
    ]},options:{responsive:true,plugins:{legend:{display:false},tooltip:{callbacks:{label:function(x){return ' '+x.dataset.label+': '+brl(x.parsed.y);}}}},scales:{x:{grid:{display:false}},y:Object.assign(moneyAxis(),{beginAtZero:true})}}});
  var it={};ROWS.forEach(function(r){if(r.cat===c&&inM(r.m))it[r.desc]=(it[r.desc]||0)+r.v;});
  var ia=Object.keys(it).map(function(k){return {k:k,v:r2(it[k])};}).sort(function(a,b){return b.v-a.v;});
  mk('cCatItems',{type:'bar',data:{labels:ia.map(function(x){return IT(x.k);}),datasets:[{data:ia.map(function(x){return x.v;}),backgroundColor:alpha(COL[c],.85),borderRadius:5,maxBarThickness:22}]},
    options:{indexAxis:'y',responsive:true,plugins:{legend:{display:false},tooltip:{callbacks:{label:function(x){return ' '+brl(x.parsed.x);}}}},scales:{x:moneyAxis(),y:{grid:{display:false},border:{display:false},ticks:{color:t.ink}}}}});
  var top=ia[0],itot=sum(ia.map(function(x){return x.v;}));
  $('#rCat').innerHTML=top?rd(L.rCat(C(c),IT(top.k),pct(top.v/itot*100,0),cv>25?2:cv>10?1:0)):'';
}

/* ---------- LANÇAMENTOS ---------- */
function renderLancamentos(){
  var t=T(),D=F(),tot=sum(D.map(function(r){return r.v;}));
  var it={};D.forEach(function(r){it[r.desc]=(it[r.desc]||0)+r.v;});
  var arr=Object.keys(it).map(function(k){return {k:k,v:r2(it[k]),c:ROWS.filter(function(r){return r.desc===k;})[0].cat};}).sort(function(a,b){return b.v-a.v;});
  var cum=0,cumArr=arr.map(function(x){cum+=x.v;return r2(cum/tot*100);});
  var n80=cumArr.findIndex(function(x){return x>=80;})+1;
  $('#cPareto').parentElement.style.setProperty('--pareto-width',Math.max(720,arr.length*34)+'px');
  mk('cPareto',{type:'bar',data:{labels:arr.map(function(x){return IT(x.k);}),datasets:[
      {label:L.spend,data:arr.map(function(x){return x.v;}),backgroundColor:arr.map(function(x,i){return alpha(COL[x.c],i<n80?.9:.35);}),borderRadius:4,yAxisID:'y',order:2},
      {label:L.cum,type:'line',data:cumArr,borderColor:t.ink,borderWidth:2,pointRadius:0,pointHoverRadius:5,yAxisID:'y2',order:1,tension:.2},
      {label:'80%',type:'line',data:arr.map(function(){return 80;}),borderColor:t.brass,borderDash:[6,5],borderWidth:1.5,pointRadius:0,yAxisID:'y2',order:0}
    ]},options:{responsive:true,interaction:{mode:'index',intersect:false},plugins:{legend:{display:false},tooltip:{filter:function(i){return i.datasetIndex<2;},callbacks:{label:function(c){return c.datasetIndex===0?' '+brl(c.parsed.y)+' ('+C(arr[c.dataIndex].c)+')':' '+L.cumTip+pct(c.parsed.y);}}}},
      scales:{x:{grid:{display:false},ticks:{autoSkip:false,maxRotation:60,minRotation:50,font:{size:10.5}}},y:moneyAxis(),y2:{position:'right',min:0,max:100,grid:{display:false},border:{display:false},ticks:{callback:function(v){return v+'%';}}}}}});
  $('#rPareto').innerHTML=arr.length?rd(L.rPareto(n80,arr.length,IT(arr[0].k),pct(arr[0].v/tot*100))):'';
  var k={c:0,r:0,e:0};D.forEach(function(r){k[r.k]+=r.v;});
  mk('cMix',{type:'doughnut',data:{labels:[L.K.c,L.K.r,L.K.e],datasets:[{data:[r2(k.c),r2(k.r),r2(k.e)],backgroundColor:[t.brass,'#4F6BD8',t.neg],borderColor:t.surface,borderWidth:3,hoverOffset:6}]},
    options:{responsive:true,cutout:'62%',plugins:{legend:{position:'bottom'},tooltip:{callbacks:{label:function(c){return ' '+c.label+': '+brl(c.parsed)+' ('+pct(c.parsed/tot*100)+')';}}}}}});
  $('#rMix').innerHTML=tot?rd(L.rMix(pct(k.e/tot*100))):'';
  var b=[0,0,0];D.forEach(function(r){b[r.d<=10?0:r.d<=20?1:2]+=r.v;});
  mk('cDays',{type:'bar',data:{labels:L.days,datasets:[{data:b.map(r2),backgroundColor:[t.brass,alpha('#8A97AB',.7),alpha('#8A97AB',.7)],borderRadius:6,maxBarThickness:56}]},
    options:{responsive:true,plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){return ' '+brl(c.parsed.y)+' ('+pct(c.parsed.y/tot*100)+')';}}}},scales:{x:{grid:{display:false}},y:moneyAxis()}}});
  $('#rDays').innerHTML=tot?rd(L.rDays(pct(b[0]/tot*100))):'';
  renderTable();
}
function renderTable(){
  var D=F(),q=S.q.trim().toLowerCase();
  if(q)D=D.filter(function(r){return (IT(r.desc)+' '+r.desc+' '+C(r.cat)+' '+r.cat+' '+L.K[r.k]).toLowerCase().indexOf(q)>=0;});
  var s=S.sort,key={date:function(r){return r.m*100+r.d;},desc:function(r){return IT(r.desc);},cat:function(r){return C(r.cat);},k:function(r){return r.k;},v:function(r){return r.v;}}[s.k];
  D.sort(function(a,b){var x=key(a),y=key(b);return (x>y?1:x<y?-1:a.id-b.id)*s.dir;});
  var cols=['date','desc','cat','k','v'];
  var h='<thead><tr>'+cols.map(function(c,i){return '<th scope="col" tabindex="0" data-sort="'+c+'" aria-sort="'+(s.k===c?(s.dir>0?'ascending':'descending'):'none')+'">'+L.th[i]+'</th>';}).join('')+'</tr></thead><tbody>';
  h+=D.map(function(r){return '<tr><td>'+L.date(r.d,r.m)+'</td><td>'+esc(IT(r.desc))+'</td><td><span class="dot" style="background:'+COL[r.cat]+'"></span>'+C(r.cat)+'</td><td><span class="tag '+r.k+'">'+L.K[r.k]+'</span></td><td>'+brl(r.v)+'</td></tr>';}).join('');
  h+='</tbody><tfoot><tr><td colspan="4">'+L.nTx(D.length)+'</td><td>'+brl(sum(D.map(function(r){return r.v;})))+'</td></tr></tfoot>';
  $('#tbl').innerHTML=h;
  $('#tCount').textContent=L.count(D.length,ROWS.length);
}

/* ---------- DIAGNÓSTICO ---------- */
function renderDiagnostico(){
  var t=T(),al=[];
  CATS.forEach(function(c){var v=catMonth(c);for(var i=3;i<6;i++){var a=(v[i-1]+v[i-2]+v[i-3])/3;if(v[i]>=a*1.2)al.push({t:L.alCat(C(c),L.MF[i]),d:L.alCatD(brl(v[i]),brl(a)),x:'+'+num((v[i]/a-1)*100,0)+'%',w:false,o:i});}});
  al.sort(function(a,b){return a.o-b.o;});
  var neg=[0,1,2,3,4,5].filter(function(m){return REC[m]<DESP_M[m];});
  al.push({t:L.alNeg(neg.length),d:L.alNegD(neg.map(function(m){return L.M[m];}).join(', '),brl(sum(REC)-sum(DESP_M))),x:neg.length+'×',w:false});
  var low=[0,1,2,3,4,5].filter(function(m){return (REC[m]-DESP_M[m])/REC[m]*100<GOAL;});
  al.push({t:L.alLow(low.length),d:L.alLowD(L.MF[5],pct(rHA((REC[5]-DESP_M[5])/REC[5]*100,1))),x:low.length+'×',w:true});
  $('#alSub').textContent=L.alSub(al.length-2+neg.length+low.length);
  $('#alerts').innerHTML=al.map(function(a){return '<li><span class="sev'+(a.w?' w':'')+'"></span><div><b>'+a.t+'</b><span>'+a.d+'</span></div><em class="'+(a.w?'':'neg')+'">'+a.x+'</em></li>';}).join('');
  var lim=BASE*0.8;
  var bars=[[L.struct[0],LEAD.media,t.neg],[L.struct[1],LEAD.semE,alpha('#B02E27',.55)],[L.struct[2],BASE,t.pos],[L.struct[3],lim,t.brass]];
  mk('cStruct',{type:'bar',data:{labels:bars.map(function(b){return b[0];}),datasets:[{data:bars.map(function(b){return r2(b[1]);}),backgroundColor:bars.map(function(b){return b[2];}),borderRadius:6,maxBarThickness:64}]},
    options:{responsive:true,plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){return ' '+brl(c.parsed.y);}}}},scales:{x:{grid:{display:false},ticks:{color:t.ink,font:{weight:'700'}}},y:Object.assign(moneyAxis(),{min:4000})}}});
  $('#rStruct').innerHTML=rd(L.rStruct(brl(r2(r2(LEAD.semE)-BASE)),brl(LEAD.media-lim),brl0(4000)));
  var it={};ROWS.forEach(function(r){if(r.k==='r'){(it[r.desc]=it[r.desc]||[0,0,0,0,0,0])[r.m]+=r.v;}});
  var cv=Object.keys(it).map(function(k){var v=it[k].filter(function(x){return x>0;});return {k:k,cv:sd(v)/mean(v)*100,c:ROWS.filter(function(r){return r.desc===k;})[0].cat};}).sort(function(a,b){return b.cv-a.cv;}).slice(0,10);
  mk('cCv',{type:'bar',data:{labels:cv.map(function(x){return IT(x.k);}),datasets:[{data:cv.map(function(x){return r2(x.cv);}),backgroundColor:cv.map(function(x,i){return alpha(COL[x.c],i===0?.95:.6);}),borderRadius:5,maxBarThickness:20}]},
    options:{indexAxis:'y',responsive:true,plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){return ' '+L.varTip+pct(c.parsed.x);}}}},scales:{x:{grid:{color:t.line},border:{display:false},ticks:{callback:function(v){return v+'%';}}},y:{grid:{display:false},border:{display:false},ticks:{color:t.ink}}}}});
  $('#rCv').innerHTML=rd(L.rCv(IT(cv[0].k),pct(cv[0].cv,0)));
  $('#qa').innerHTML=L.qa.map(function(q){return '<li class="'+(q[2]?'w':'')+'"><div><b>'+q[0]+'</b><small>'+q[1]+'</small></div></li>';}).join('');
}

/* ---------- textos fixos da página ---------- */
function norm(t){return String(t).replace(/\s+/g,' ').trim();}
function swap(orig){var k=norm(orig);return orig.match(/^\s*/)[0]+STATIC_EN[k]+orig.match(/\s*$/)[0];}
STATIC_EN['Em telas pequenas, deslize o gráfico para os lados para ver todos os itens.']='On small screens, scroll the chart sideways to see all items.';
var ATTRS=['aria-label','placeholder','title'];
function applyStatic(){
  var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),n;
  while((n=w.nextNode())){
    var p=n.parentNode;if(!p||p.nodeName==='SCRIPT'||p.nodeName==='STYLE')continue;
    if(n.__pt===undefined){if(!STATIC_EN[norm(n.nodeValue)])continue;n.__pt=n.nodeValue;}
    var nv=lang==='en-US'?swap(n.__pt):n.__pt;if(n.nodeValue!==nv)n.nodeValue=nv;
  }
  document.querySelectorAll('[aria-label],[placeholder],[title]').forEach(function(el){
    ATTRS.forEach(function(a){
      if(!el.hasAttribute(a))return;el.__pa=el.__pa||{};
      if(el.__pa[a]===undefined){if(!STATIC_EN[norm(el.getAttribute(a))])return;el.__pa[a]=el.getAttribute(a);}
      el.setAttribute(a,lang==='en-US'?STATIC_EN[norm(el.__pa[a])]:el.__pa[a]);
    });
  });
  document.documentElement.lang=lang;document.title=L.title;
}

/* ---------- seletor de idioma ---------- */
var FLAG={
  'pt-BR':'<svg class="flag" viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" fill="#009C3B"/><path d="M10 1.5 18.4 7 10 12.5 1.6 7z" fill="#FFDF00"/><circle cx="10" cy="7" r="3.3" fill="#002776"/><path d="M6.8 6.1c2.1-.7 4.6-.3 6.4 1" stroke="#fff" stroke-width=".75" fill="none"/></svg>',
  'en-US':'<svg class="flag" viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" fill="#fff"/><g fill="#B22234"><rect y="0" width="20" height="1.077"/><rect y="2.154" width="20" height="1.077"/><rect y="4.308" width="20" height="1.077"/><rect y="6.462" width="20" height="1.077"/><rect y="8.615" width="20" height="1.077"/><rect y="10.769" width="20" height="1.077"/><rect y="12.923" width="20" height="1.077"/></g><rect width="8.4" height="7.54" fill="#3C3B6E"/><g fill="#fff"><circle cx="1.4" cy="1.3" r=".42"/><circle cx="4.2" cy="1.3" r=".42"/><circle cx="7" cy="1.3" r=".42"/><circle cx="2.8" cy="3" r=".42"/><circle cx="5.6" cy="3" r=".42"/><circle cx="1.4" cy="4.6" r=".42"/><circle cx="4.2" cy="4.6" r=".42"/><circle cx="7" cy="4.6" r=".42"/><circle cx="2.8" cy="6.2" r=".42"/><circle cx="5.6" cy="6.2" r=".42"/></g></svg>'
};
var langToggle=$('#langToggle');
function renderLang(){
  langToggle.setAttribute('data-active',lang);
  langToggle.innerHTML=LANGS.map(function(l){var on=l.id===lang;
    return '<button type="button" class="lt" role="radio" data-lang="'+l.id+'" lang="'+l.id+'" aria-checked="'+on+'" tabindex="'+(on?0:-1)+'" aria-label="'+l.label+'">'+FLAG[l.id]+'<span class="lcode" aria-hidden="true">'+l.code+'</span></button>';
  }).join('');
}
function setLang(id,focus){
  if(id===lang||!I18N[id])return;lang=id;L=I18N[lang];try{localStorage.setItem('rf-lang',lang);}catch(err){}
  setFormatters();applyStatic();refresh();renderLang();
  if(focus){var t=langToggle.querySelector('[data-lang="'+lang+'"]');if(t)t.focus();}
}
langToggle.addEventListener('click',function(e){var t=e.target.closest?e.target.closest('.lt'):null;if(t)setLang(t.getAttribute('data-lang'),false);});
langToggle.addEventListener('keydown',function(e){
  if(['ArrowRight','ArrowLeft','ArrowDown','ArrowUp'].indexOf(e.key)<0)return;e.preventDefault();
  var i=LANGS.findIndex(function(l){return l.id===lang;}),n=(i+((e.key==='ArrowRight'||e.key==='ArrowDown')?1:LANGS.length-1))%LANGS.length;
  setLang(LANGS[n].id,true);
});

/* ---------- roteamento e eventos ---------- */
var TABS=['o-case','visao-geral','categorias','lancamentos','diagnostico','metodo'];
function route(){
  var h=(location.hash||'').replace('#','');S.tab=TABS.indexOf(h)>=0?h:'o-case';
  TABS.forEach(function(x){document.getElementById('p-'+x).classList.toggle('on',x===S.tab);});
  document.querySelectorAll('.tabs a').forEach(function(a){a.setAttribute('aria-current',a.getAttribute('href')==='#'+S.tab?'page':'false');});
  refresh();
  var active=document.querySelector('.tabs a[aria-current="page"]');
  if(active)active.scrollIntoView({block:'nearest',inline:'nearest'});
}
function refresh(){
  renderFilters();setDefaults();
  if(S.tab==='visao-geral')renderOverview();
  else if(S.tab==='categorias')renderCategorias();
  else if(S.tab==='lancamentos')renderLancamentos();
  else if(S.tab==='diagnostico')renderDiagnostico();
}
document.addEventListener('click',function(e){
  var b=e.target.closest?e.target.closest('button,th[data-sort]'):null;if(!b)return;
  if(b.hasAttribute('data-m')){toggle(S.months,+b.getAttribute('data-m'));refresh();}
  else if(b.hasAttribute('data-c')){var c=b.getAttribute('data-c'),i=S.cats.indexOf(c);if(i>=0){if(S.cats.length>1)S.cats.splice(i,1);}else{S.cats.push(c);S.cats.sort(function(x,y){return CATS.indexOf(x)-CATS.indexOf(y);});}refresh();}
  else if(b.id==='resetBtn'){S.months=[0,1,2,3,4,5];S.cats=CATS.slice();refresh();}
  else if(b.hasAttribute('data-mode')){S.stack=b.getAttribute('data-mode');renderCategorias();}
  else if(b.hasAttribute('data-pick')){S.cat=b.getAttribute('data-pick');renderCategorias();}
  else if(b.hasAttribute('data-sort')){var k=b.getAttribute('data-sort');S.sort=S.sort.k===k?{k:k,dir:-S.sort.dir}:{k:k,dir:k==='v'?-1:1};renderTable();}
  else if(b.id==='themeBtn'){var root=document.documentElement,cur=root.getAttribute('data-theme');
    var dark=cur?cur==='dark':(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);
    var next=dark?'light':'dark';root.setAttribute('data-theme',next);try{localStorage.setItem('rf-theme',next);}catch(err){}refresh();}
  else if(b.id==='printBtn'){window.print();}
  else if(b.id==='fToggle'){var tp=$('#top'),op=tp.getAttribute('data-fopen')==='1';tp.setAttribute('data-fopen',op?'0':'1');b.setAttribute('aria-expanded',String(!op));}
});
document.addEventListener('keydown',function(e){var th=e.target.closest?e.target.closest('th[data-sort]'):null;if(th&&(e.key==='Enter'||e.key===' ')){e.preventDefault();th.click();}});
$('#q').addEventListener('input',function(){S.q=this.value;renderTable();});
window.addEventListener('hashchange',route);
document.addEventListener('pointermove',function(e){
  var el=e.target.closest?e.target.closest('#p-o-case .card,.pipe li'):null;if(!el)return;
  var r=el.getBoundingClientRect();el.style.setProperty('--mx',(e.clientX-r.left)+'px');el.style.setProperty('--my',(e.clientY-r.top)+'px');
},{passive:true});
if(window.matchMedia){var mq=window.matchMedia('(prefers-color-scheme: dark)');if(mq.addEventListener)mq.addEventListener('change',function(){refresh();});}
/* A altura real acompanha idioma, filtros e mudanças de orientação. */
var header=$('#top');
function updateHeaderHeight(){document.documentElement.style.setProperty('--header-height',header.getBoundingClientRect().height+'px');}
if(window.ResizeObserver){new ResizeObserver(updateHeaderHeight).observe(header);}
else window.addEventListener('resize',updateHeaderHeight);
applyStatic();renderLang();route();updateHeaderHeight();
})();
