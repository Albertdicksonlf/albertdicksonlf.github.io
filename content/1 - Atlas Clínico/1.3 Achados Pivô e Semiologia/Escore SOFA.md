---
aliases:
  - SOFA
  - qSOFA
  - quick SOFA
  - Sequential Organ Failure Assessment
  - SOFA-2
card: null
classe de medicamentos: null
date: 2026-11-09T08:20:00
prevalência: null
tipo: Achado-Pivô
tipo de doença: null
tipo de exame: null
área:
  - Terapia Intensiva
  - Emergência
  - Infectologia
---
# Escore SOFA

> [!abstract] O que é?
> **Sequential Organ Failure Assessment**: escore que quantifica a disfunção de **6 sistemas** (respiratório, coagulação, fígado, cardiovascular, neurológico e renal), cada um de 0 a 4 pontos. No Sepsis-3, um **aumento agudo ≥ 2 pontos** em paciente com infecção define [[Sepse]]. **Não diagnostica sepse** — mede disfunção orgânica de qualquer causa. O **qSOFA** é a versão de beira-leito, prognóstica.

## 🖐️ Técnica de Exame (Como fazer?)
1. **Posicionamento:** reunir os dados das últimas 24 h — exames: **[[Gasometria arterial]] (PaO₂/FiO₂), [[Hemograma]] (plaquetas), bilirrubinas e [[Creatinina]]**; clínica: PAM e vasopressores, [[Escala de Coma de Glasgow|Glasgow]] e diurese. *O INR **não** entra no SOFA.*
2. **Ação:** pontuar cada sistema pela tabela (pior valor do período).
3. **Critério de Positividade:** **Δ ≥ 2 pontos** em relação ao basal (presumir basal 0 se não há disfunção prévia conhecida) = disfunção orgânica.

| Sistema | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| **Respiratório** — PaO₂/FiO₂ (mmHg) | ≥ 400 | < 400 | < 300 | < 200 **com suporte ventilatório** | < 100 **com suporte ventilatório** |
| **Coagulação** — plaquetas (×10³/µL) | ≥ 150 | < 150 | < 100 | < 50 | < 20 |
| **Fígado** — bilirrubina (mg/dL) | < 1,2 | 1,2–1,9 | 2,0–5,9 | 6,0–11,9 | > 12,0 |
| **Cardiovascular** (doses em µg/kg/min, ≥ 1 h) | PAM ≥ 70 | PAM < 70 | Dopamina < 5 ou dobutamina (qualquer dose) | Dopamina 5,1–15, ou adrenalina ≤ 0,1, ou noradrenalina ≤ 0,1 | Dopamina > 15, ou adrenalina > 0,1, ou noradrenalina > 0,1 |
| **Neurológico** — Glasgow | 15 | 13–14 | 10–12 | 6–9 | < 6 |
| **Renal** — creatinina (mg/dL) ou diurese | < 1,2 | 1,2–1,9 | 2,0–3,4 | 3,5–4,9 ou < 500 mL/dia | > 5,0 ou < 200 mL/dia |

> [!tip] qSOFA — 1 ponto cada, ≥ 2 = alto risco
> - Frequência respiratória **≥ 22 irpm**
> - **Alteração do nível de consciência** (Glasgow < 15)
> - Pressão sistólica **≤ 100 mmHg**
>
> Nasceu para predizer mortalidade em infectados **fora da UTI**. A SSC 2026 **recomenda não usá-lo** como ferramenta única de rastreio (sensibilidade baixa) — prefira [[Escore NEWS|NEWS/NEWS2]], MEWS ou SIRS.

## 🌪️ Mecanismo Fisiopatológico
- Cada linha mede a falência de um órgão pelo marcador mais simples e disponível: oxigenação (pulmão), plaquetas (consumo e [[Coagulação Intravascular Disseminada (CIVD)|CIVD]]), bilirrubina (colestase e disfunção hepática), necessidade de vasopressor (vasoplegia), Glasgow (encefalopatia) e creatinina/diurese (injúria renal).
- Por ser **sequencial**, o valor está na variação: a tendência ao longo dos dias acompanha a resposta ao tratamento.

---

## 🎯 PODER DIAGNÓSTICO (O PIVÔ)
- **Significado Clínico:** infecção + ΔSOFA ≥ 2 = [[Sepse]], com mortalidade hospitalar acima de 10%. É a régua da definição; o choque é definido à parte ([[Choque Séptico]]).
- **Acurácia:** é preditor de mortalidade, não teste diagnóstico de infecção. O **SOFA-2** (2025) teve AUROC de 0,79 contra 0,77 do original para mortalidade em UTI.
- **Associação Clássica:** [[Escore SOFA]] Δ ≥ 2 + foco infeccioso = [[Sepse]]; + vasopressor e [[Lactato arterial elevado|lactato > 2]] apesar de volume = [[Choque Séptico]].

> [!info] SOFA-2 (JAMA, 2025)
> Primeira atualização em 30 anos, feita com dados de 3,3 milhões de pacientes em 9 países (incluindo o Brasil). Mantém os 6 sistemas — renomeados como cérebro, respiratório, cardiovascular, fígado, rim e hemostasia —, troca variáveis de suporte orgânico pelas terapias atuais, revisa cortes e cria alternativas para locais sem exames ou quando há limitação de suporte. Disfunção gastrointestinal e imune ficaram de fora por falta de dados. O deck **não cobra** o SOFA-2; o Sepsis-3 continua escrito sobre o SOFA original.

---

## ⚠️ Pitfalls e Falsos
- **Falsos Positivos:** o SOFA sobe em qualquer disfunção orgânica — trauma grave, pancreatite, cirurgia de grande porte. Sem infecção, não é sepse.
- **Falsos Negativos:** basal desconhecido em doente crônico (cirrose, doença renal) — o que importa é a **variação aguda**, não o valor absoluto.
- **Erro Comum de Execução:** incluir INR (não faz parte); pontuar o Glasgow de paciente sedado sem considerar a sedação; esquecer que o respiratório 3–4 exige suporte ventilatório.

---

### 🖼️ Imagem / Esquema
![[5 - Sistema/Arquivos/Imagens/escore-sofa.jpg]]
*TODO: Adicionar esquema dos 6 sistemas com o exame que alimenta cada um*

**Onde buscar:**
- Singer M, et al. JAMA. 2016 — Tabela 1 (SOFA)

---

## 📚 Referências
*Consultado em 2026-11-09*

1. **[Sepsis-3]** Singer M, Deutschman CS, Seymour CW, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA. 2016;315(8):801-810. PMID 26903338 — tabela do SOFA
2. **Seymour CW, et al.** Assessment of Clinical Criteria for Sepsis. JAMA. 2016;315(8):762-774. PMID 26903335 — derivação do qSOFA
3. **[SOFA-2]** Ranzani OT, Singer M, Salluh JIF, et al. Development and Validation of the Sequential Organ Failure Assessment (SOFA)-2 Score. JAMA. 2025;334(23):2090-2103. PMID 41159833
4. **Moreno R, Rhodes A, Ranzani O, et al.** Rationale and Methodological Approach Underlying the Development of the SOFA-2 Score: A Consensus Statement. JAMA Netw Open. 2025;8(10):e2545040. PMID 41159829
5. **[SSC 2026]** Prescott HC, Antonelli M, Alhazzani W, et al. Crit Care Med. 2026. doi:10.1097/CCM.0000000000007075. PMID 41869847 — qSOFA não recomendado como ferramenta única de rastreio

---

### ➕ Novas Anotações / Insights
*- Nota criada em 2026-11-09 no processamento de `Sepse - Anotações`. O alias "qSOFA" migrou para cá de [[Abordagem da Sepse]].*
- *Da anotação:* "SOFA avalia disfunção orgânica, dá para dividir em sistemas" — é exatamente a lógica da tabela: um exame por órgão.
