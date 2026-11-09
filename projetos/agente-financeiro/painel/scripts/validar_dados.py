"""Confere data/lancamentos.csv contra os totais das abas de resumo da planilha original.

Uso:  python scripts/validar_dados.py
"""
import csv, pathlib, collections

ROOT = pathlib.Path(__file__).resolve().parent.parent
MESES = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"]

# Valores da aba "Gastos por Categoria" e da aba "Resumo Mensal" (financas_pessoais_2024.xlsx)
REF_CATEGORIAS = {
    "Moradia": [2425.19, 2440.21, 2487.09, 2414.78, 2459.29, 2495.90],
    "Alimentação": [1141.44, 1314.99, 1236.40, 1353.51, 1273.18, 1215.46],
    "Transporte": [688.92, 820.19, 736.79, 706.06, 648.12, 663.03],
    "Saúde": [485.36, 641.15, 734.25, 720.35, 528.86, 751.81],
    "Lazer": [789.72, 337.58, 537.18, 408.20, 774.85, 456.76],
    "Educação": [414.46, 286.00, 334.53, 286.00, 423.29, 286.00],
    "Assinaturas": [141.00] * 6,
    "Outros": [63.90, 372.78, 532.75, 788.32, 420.22, 379.96],
}
REF_RECEITAS = [5800, 5800, 6200, 5800, 5800, 6800]

def main():
    desp = collections.defaultdict(float); rec = [0.0] * 6; chaves = collections.Counter(); n = 0
    with open(ROOT / "data" / "lancamentos.csv", encoding="utf-8") as f:
        for r in csv.DictReader(f):
            n += 1
            m = int(r["data"][5:7]) - 1; v = float(r["valor"])
            chaves[(r["data"], r["descricao"], r["valor"])] += 1
            if r["tipo"] == "Despesa": desp[(r["categoria"], m)] += v
            else: rec[m] += v
    erros = [f"{c} em {MESES[i]}: {round(desp[(c, i)], 2)} ≠ {ref}"
             for c, vals in REF_CATEGORIAS.items() for i, ref in enumerate(vals)
             if abs(desp[(c, i)] - ref) > 0.005]
    erros += [f"Receita de {MESES[i]}: {rec[i]} ≠ {ref}" for i, ref in enumerate(REF_RECEITAS) if abs(rec[i] - ref) > 0.005]
    dup = [k for k, c in chaves.items() if c > 1]
    print(f"{n} lançamentos lidos.")
    print("Duplicatas:", dup or "nenhuma")
    print("Tudo confere com a planilha." if not erros else "Diferenças:\n- " + "\n- ".join(erros))
    raise SystemExit(1 if erros or dup else 0)

if __name__ == "__main__":
    main()
