---
aliases:
  - NEWS
  - NEWS2
  - National Early Warning Score
  - Escore de Alerta Precoce
  - MEWS
card: null
classe de medicamentos: null
date: 2026-11-09T08:25:00
prevalência: null
tipo: Achado-Pivô
tipo de doença: null
tipo de exame: null
área:
  - Emergência
  - Terapia Intensiva
  - Clínica Médica
---
# Escore NEWS

> [!abstract] O que é?
> **National Early Warning Score** (Royal College of Physicians, Reino Unido): escore de alerta precoce que soma **6 sinais vitais** + uso de oxigênio para detectar deterioração clínica em adultos. A versão atual é o **NEWS2** (2017). Não foi criado para sepse — é prognóstico e de gravidade —, mas a SSC 2026 **recomenda** NEWS/NEWS2, MEWS ou SIRS em vez do qSOFA como ferramenta única de **rastreio de sepse**.

## 🖐️ Técnica de Exame (Como fazer?)
1. **Posicionamento:** aferir os sinais vitais rotineiros (abordagem ABCDE).
2. **Ação:** pontuar cada parâmetro de 0 a 3 e **somar 2 se o paciente usa oxigênio** suplementar.
3. **Critério de Positividade:** escore agregado (tabela de resposta abaixo).

| Parâmetro | 3 | 2 | 1 | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|---|
| **FR** (irpm) | ≤ 8 | | 9–11 | 12–20 | | 21–24 | ≥ 25 |
| **SpO₂ escala 1** (%) | ≤ 91 | 92–93 | 94–95 | ≥ 96 | | | |
| **Ar ou O₂?** | | O₂ | | Ar ambiente | | | |
| **PAS** (mmHg) | ≤ 90 | 91–100 | 101–110 | 111–219 | | | ≥ 220 |
| **FC** (bpm) | ≤ 40 | | 41–50 | 51–90 | 91–110 | 111–130 | ≥ 131 |
| **Consciência** | | | | Alerta | | | Confusão nova, V, P ou U |
| **Temperatura** (°C) | ≤ 35,0 | | 35,1–36,0 | 36,1–38,0 | 38,1–39,0 | ≥ 39,1 | |

- **SpO₂ escala 2** — **só** na insuficiência respiratória **hipercápnica confirmada** (alvo 88–92%, em geral DPOC) e por decisão médica: 88–92% (ou ≥ 93% em ar ambiente) = 0; 86–87 = 1; 84–85 = 2; ≤ 83 = 3; em O₂, 93–94 = 1, 95–96 = 2, ≥ 97 = 3.

| Escore | Risco | Resposta (RCP) |
|---|---|---|
| 0 | — | Monitorização a cada 12 h |
| 1–4 | Baixo | A cada 4–6 h; enfermagem avalia |
| **3 em um único parâmetro** | Baixo-médio | Horária; avaliação médica |
| **5–6** | Médio — **limiar de resposta urgente** | Horária; revisão médica urgente, ambiente monitorizado |
| **≥ 7** | **Alto** | Resposta de emergência; considerar equipe de terapia intensiva |

## 🌪️ Mecanismo Fisiopatológico
- A deterioração aguda quase sempre se anuncia horas antes nos sinais vitais (taquipneia, taquicardia, hipotensão, confusão). O NEWS agrega esses desvios — nos **dois sentidos** (bradicardia e taquicardia, hipo e hipertermia pontuam) — num número único que padroniza o acionamento da equipe.
- O **NEWS2** acrescentou a **confusão nova** à escala AVPU (virou ACVPU) e criou a escala 2 de SpO₂ para não "punir" o retentor crônico de CO₂ que está no alvo.

---

## 🎯 PODER DIAGNÓSTICO (O PIVÔ)
- **Significado Clínico:** escore alto num paciente com possível infecção → avaliar [[Sepse]] já ([[Abordagem da Sepse]]).
- **Evidência:** numa coorte de ~100 mil atendimentos com suspeita de infecção (Rhee, 2026), cada hora de atraso do antibiótico associou-se a mortalidade maior nos pacientes com NEWS2 ≥ 7 — **inclusive nos 86% deles que não estavam em choque** —, e não nos escores < 7. Sugere que o NEWS2 identifica quem precisa de antibiótico imediato além do critério "choque".
- **Associação Clássica:** [[Escore NEWS]] ≥ 7 + suspeita de infecção = sepse de alto risco → antibiótico sem demora + [[Bundle da Primeira Hora (Sepse)]].

---

## ⚠️ Pitfalls e Falsos
- **Falsos Positivos:** dor, ansiedade e febre isolada elevam FC e FR; uso crônico de O₂ soma 2 pontos.
- **Falsos Negativos:** betabloqueado sem taquicardia; idoso que não faz febre; deterioração que não mexe em sinais vitais (hipoglicemia, peritonite inicial). Um NEWS baixo **não exclui** gravidade.
- **Fora do escopo:** não validado para menores de 16 anos e gestantes; o RCP alerta para lesão medular alta (tetraplegia), em que a disautonomia distorce pulso, temperatura e PA.
- **Erro Comum de Execução:** usar a escala 2 de SpO₂ sem hipercapnia confirmada em gasometria; esquecer os 2 pontos do oxigênio.

---

### 🖼️ Imagem / Esquema
![[5 - Sistema/Arquivos/Imagens/news2-chart.jpg]]
*TODO: Adicionar o gráfico oficial do NEWS2 (RCP, 2017)*

**Onde buscar:**
- Royal College of Physicians — NEWS2 chart (rcp.ac.uk)

---

## 📚 Referências
*Consultado em 2026-11-09*

1. **[RCP 2017]** Royal College of Physicians. National Early Warning Score (NEWS) 2: Standardising the assessment of acute-illness severity in the NHS. London: RCP; 2017 — https://www.rcp.ac.uk/media/ctulqqbn/news2-executive-summary_0.pdf
2. **[SSC 2026]** Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2026. Crit Care Med. 2026. doi:10.1097/CCM.0000000000007075. PMID 41869847 — https://sccm.org/survivingsepsiscampaign/guidelines-and-resources/surviving-sepsis-campaign-adult-guidelines
3. **Rhee C, Singer M, Pak TR, et al.** NEWS2 versus shock status to stratify antibiotic urgency in patients with suspected sepsis: a retrospective, multicentre cohort study. Lancet Respir Med. 2026;14(10):849-858. PMID 42556377
4. **Smith GB, et al.** The ability of the National Early Warning Score (NEWS) to discriminate patients at risk of early cardiac arrest, unanticipated intensive care unit admission, and death. Resuscitation. 2013. PMID 23295778

---

### ➕ Novas Anotações / Insights
*- Nota criada em 2026-11-09 no processamento de `Sepse - Anotações`. O deck cita que o NEWS é a ferramenta preferida do UpToDate para rastreio.*
-
