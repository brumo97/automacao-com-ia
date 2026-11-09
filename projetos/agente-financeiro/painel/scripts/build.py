"""Gera o painel pronto (index.html, arquivo único) a partir de src/, data/ e vendor/.

Uso:  python scripts/build.py
Saídas:
  data/data.js       dados no formato que o painel lê (gerado a partir de data/lancamentos.csv)
  data/lancamentos.json
  index.html         painel completo em um só arquivo, funciona offline e no GitHub Pages
"""
import csv, json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent

def ler_lancamentos():
    desp, rece, linhas = [], [], []
    with open(ROOT / "data" / "lancamentos.csv", encoding="utf-8") as f:
        for r in csv.DictReader(f):
            ano, mes, dia = (int(x) for x in r["data"].split("-"))
            valor = round(float(r["valor"]), 2)
            linhas.append({**r, "valor": valor})
            if r["tipo"] == "Despesa":
                desp.append([dia, mes - 1, r["descricao"], r["categoria"], valor])
            else:
                rece.append([dia, mes - 1, r["descricao"], valor])
    return desp, rece, linhas

def main():
    desp, rece, linhas = ler_lancamentos()
    data_js = ("var DESP=" + json.dumps(desp, ensure_ascii=False, separators=(",", ":")) +
               ";\nvar RECE=" + json.dumps(rece, ensure_ascii=False, separators=(",", ":")) + ";")
    (ROOT / "data" / "data.js").write_text(data_js + "\n", encoding="utf-8")
    (ROOT / "data" / "lancamentos.json").write_text(json.dumps(linhas, ensure_ascii=False, indent=1), encoding="utf-8")

    html = (ROOT / "src" / "index.html").read_text(encoding="utf-8")
    css = (ROOT / "src" / "css" / "styles.css").read_text(encoding="utf-8")
    app = (ROOT / "src" / "js" / "app.js").read_text(encoding="utf-8")
    chart = (ROOT / "vendor" / "chart.umd.js").read_text(encoding="utf-8")
    trocas = {
        '<link rel="stylesheet" href="css/styles.css">': "<style>\n" + css + "</style>",
        '<script src="../vendor/chart.umd.js"></script>': "<script>" + chart + "</script>",
        '<script src="../data/data.js"></script>': "<script>" + data_js + "</script>",
        '<script src="js/app.js"></script>': "<script>\n" + app + "</script>",
    }
    for marcador, conteudo in trocas.items():
        if html.count(marcador) != 1:
            raise SystemExit(f"Marcador não encontrado (ou repetido) em src/index.html: {marcador}")
        html = html.replace(marcador, conteudo)
    (ROOT / "index.html").write_text(html, encoding="utf-8")
    print(f"index.html gerado ({len(html) // 1024} KB) com {len(desp)} despesas e {len(rece)} receitas.")

if __name__ == "__main__":
    main()
