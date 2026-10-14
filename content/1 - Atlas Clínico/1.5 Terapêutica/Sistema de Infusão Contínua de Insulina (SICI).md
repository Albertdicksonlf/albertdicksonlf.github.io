---
aliases:
  - SICI
  - Bomba de Insulina
  - Bomba de Infusão de Insulina
  - AHCL
  - Sistema Automatizado de Infusão de Insulina
  - AID
  - Alça Fechada Híbrida
card: null
classe de medicamentos:
  - Insulina
  - Dispositivo de Infusão
date: 2026-10-13T22:50:00
prevalência: null
tipo: Medicamento
tipo de doença: null
tipo de exame: null
área:
  - Endocrinologia
---

# Sistema de Infusão Contínua de Insulina (SICI)

> [!abstract] Resumo de Uma Linha
> A "bomba de insulina" infunde análogo rápido no subcutâneo por cânula, em microdoses basais programáveis e bólus. Integrada a um sensor de glicose e a um algoritmo, vira um **sistema automatizado (AID)**.
>
> O **sistema híbrido avançado de alça fechada (AHCL)** é hoje a terapia com maior chance de atingir as metas no [[Diabetes Mellitus Tipo 1|DM1]]. A SBD 2026 o coloca como **opção de 1ª linha em qualquer idade**.

## ⚙️ Mecanismo de Ação e Farmacologia
- **Ação:**
	- **SICI convencional:** basal programada em blocos ao longo do dia + bólus calculados pelo usuário.
	- **AID:** o algoritmo ajusta a basal (e, no AHCL, aplica **microbólus de correção automáticos**) conforme o [[Monitorização Contínua de Glicose (CGM)|CGM em tempo real]].
- **Evolução das classes (SBD 2026, Tabela 1):**
	1. **SICI:** bomba isolada.
	2. **SAP:** bomba + sensor.
	3. **LGS:** suspende a basal quando a glicose está baixa.
	4. **PLGS:** suspende a basal quando **prevê** glicose baixa.
	5. **HCL:** basal automatizada.
	6. **AHCL:** basal + correções automáticas.
	7. **FCL:** alça totalmente fechada.
	- **No Brasil (2026):** só há **AHCL** registrados (MiniMed 780G e TouchCare Nano). Não há comparação direta entre eles. Em modo manual, funcionam como SAP/PLGS ou como SICI.
- **Farmacocinética Relevante:**
	- Usa **apenas insulina de ação rápida ou ultrarrápida**. **Não há depósito de insulina basal no corpo.**
	- Se a infusão parar (cânula dobrada, desconexão, falha), a cetose começa **em poucas horas**.

## 📋 Indicações Principais (SBD 2026)

| Recomendação | Classe/Nível |
|---|---|
| **AHCL como 1ª linha** no DM1, em qualquer idade, se a pessoa ou o cuidador estiver motivado | **I-A** |
| Na impossibilidade de usar AHCL, outras estratégias com maior eficácia e incorporação tecnológica | I-B |
| Sistema automatizado se o paciente estiver **fora da meta há 1 ano** apesar de equipe, análogos e CGM | I-A |
| Sistema automatizado se houver **hipoglicemia grave, noturna recorrente, assintomática ou incapacitante** após 3 meses de CGM | I-A |
| **1ª opção** quando são necessárias doses muito baixas: crianças pequenas (até ~7 anos) ou bólus < 0,5 U | I-B |
| Considerar para reduzir o *diabetes distress* e melhorar a qualidade de vida | IIa-A |
| **Não** restringir o AHCL a quem conta carboidratos com precisão (doses fixas ou "anúncio de refeição" funcionam) | III-B |
| Prescrever **plano de contingência**: insulina basal + bólus em caneta + glicosímetro | I-C |

- **Uso em Populações Especiais:** gestantes e pessoas com fenômeno do alvorecer exacerbado eram indicações clássicas da SICI convencional (SBD 2026, Tabela 1).

## 💊 Posologia e Apresentação
- **Apresentações:** bomba + reservatório + cânula (troca periódica do conjunto de infusão) + sensor compatível (rtCGM, R6 do capítulo de CGM).
- **Dose Típica:** parametrizada a partir da DTD prévia. Nos AHCL, os alvos de glicose são programáveis (no 780G: 100, 110 ou 120 mg/dL).
- **Ajuste Renal/Hepático:** o algoritmo se adapta. Cuidado com hipoglicemia na DRC avançada.

---

## 🎯 ACHADOS-CHAVE (PIVÔS) E PÉROLAS
- **Pivô Clínico:** DM1 motivado → **AHCL é 1ª linha**, e não último recurso.
- **Segurança/Risco:**
	- **Hiperglicemia inexplicada > 250 mg/dL no usuário de bomba = suspeitar de falha de infusão** (SBD 2023, dias de doença).
	- **Cetonemia negativa:** fazer o bólus sugerido pela bomba e reavaliar em 1 h. Se não houver queda > 50 mg/dL, dar o bólus **por caneta ou seringa** e trocar o conjunto de infusão.
	- **Cetonemia positiva:** dar **imediatamente** o bólus por caneta, trocar o conjunto (e a insulina) e religar em outro local, com basal temporária de 110–120% por 4 h.
	- **CAD em usuários de bomba:** é mais frequente por erro de manejo e infecção do que por defeito do aparelho (ADA 2024).
- **Evidência (SBD 2026):** no 780G, adultos vindos de MDI atingiram tempo no alvo de 85% em ensaio clínico, com tempo abaixo do alvo caindo de 8,7% para 2,1%. Em dados de mundo real na América Latina, o tempo no alvo foi de 76,5%.
- **Interações:** algoritmos de código aberto (*DIY*) existem e têm estudos, mas o suporte é só da comunidade de usuários (SBD 2026).

---

## ⚠️ Efeitos Adversos
- **Comuns:** problemas no local da cânula (irritação, lipo-hipertrofia, infecção) e oclusão do conjunto.
- **Graves:** **[[Cetoacidose Diabética|CAD]] por interrupção da infusão** e hipoglicemia por erro de programação.
- **Monitorização:**
	- métricas de CGM (tempo no alvo, tempo abaixo do alvo, CV) e relatórios do dispositivo;
	- **cetonemia capilar disponível em casa** (SBD 2026, R7);
	- revisão da técnica e do plano de contingência.

---

## 📚 Referências
*Consultado em 2026-10-13*

1. **[SBD 2026]** Marino EC, Gabbay MAL, Silva Júnior WS, et al. Sistemas de infusão contínua de insulina. Diretriz Oficial da Sociedade Brasileira de Diabetes (2026). DOI 10.29327/5937208.2026-1 — https://diretriz.diabetes.org.br/sistemas-de-infusao-continua-de-insulina/
2. **[SBD 2023]** Rodrigues MLD, Calliari LE, Rodacki M. Manejo dos dias de doença no DM1 (usuários de SICI). DOI 10.29327/5238993.2023-1 — https://diretriz.diabetes.org.br/manejo-dos-dias-de-doenca-no-dm1/
3. **[ADA/EASD/JBDS/AACE/DTS 2024]** Umpierrez GE, et al. Hyperglycemic Crises in Adults With Diabetes: A Consensus Report. Diabetes Care. 2024;47(8):1257-1275. PMID 39052901

---

### ➕ Novas Anotações / Insights
*- 2026-10-13: nota criada a partir da revisão de DM1 e insulinoterapia (SBD 2026).*
-
