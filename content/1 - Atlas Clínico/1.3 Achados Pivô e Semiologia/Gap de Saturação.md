---
date: 2026-10-18T12:50:00
área:
  - Medicina de Emergência
  - Pneumologia
  - Toxicologia
tipo: Achado-Pivô
tipo de exame: null
tipo de doença: null
classe de medicamentos: null
prevalência: null
aliases:
  - Saturation Gap
  - Hiato de Saturação
  - Gap SpO₂-SaO₂
card: null
---

# Gap de Saturação

> [!abstract] O que é?
> Discordância **> 5 pontos percentuais** entre uma saturação **esperada** e uma saturação **medida** de verdade. Aponta para hemoglobina que **não transporta oxigênio** apesar de a PaO₂ ser normal — as **disemoglobinemias**: [[Metemoglobinemia]] e carboxi-hemoglobinemia ([[Intoxicação por Monóxido de Carbono]]). É o achado que separa disemoglobinemia de **shunt** no paciente cuja hipoxemia não responde ao oxigênio.

## 🖐️ Técnica de Exame (Como fazer?)

1. **Colha [[Gasometria arterial]] e anote a SpO₂ do [[Oximetria de Pulso|oxímetro]] no mesmo momento.**
2. **Confira de onde vem a "SaO₂" do laudo** — este é o passo que quase todo mundo pula:
	- **Calculada** a partir da PaO₂ (a maioria dos gasômetros sem co-oxímetro): o aparelho **presume** hemoglobina normal e lê a curva de dissociação. Na disemoglobinemia, ela sai **falsamente normal**.
	- **Medida por co-oximetria** (espectrofotometria com vários comprimentos de onda): mede de fato oxi-Hb, desoxi-Hb, **meta-Hb** e **carboxi-Hb**. É o padrão-ouro.
3. **Compare os pares e aplique o critério de positividade (diferença > 5%):**

| Par comparado | Na metemoglobinemia | Na intoxicação por CO |
|---|---|---|
| **SaO₂ calculada** (pela PaO₂) × **SpO₂** | **Gap presente** — SaO₂ calculada ~98% × SpO₂ travada perto de 85% | **Sem gap** — as duas saem "normais" ⚠️ |
| **SaO₂ calculada** × **SaO₂ co-oximetria** | **Gap presente** | **Gap presente** |
| **SpO₂** × **SaO₂ co-oximetria** | Variável (depende do nível de MetHb) | **Gap presente** — SpO₂ superestima |

> [!danger] A armadilha do CO
> O oxímetro de pulso comum lê carboxi-hemoglobina como se fosse oxi-hemoglobina, e o gasômetro sem co-oxímetro calcula a SaO₂ pela PaO₂ (que é normal). Resultado: **SpO₂ normal, SaO₂ calculada normal, nenhum gap — e o paciente intoxicado**. Na suspeita de CO, **só a co-oximetria** (ou o oxímetro de múltiplos comprimentos de onda, que mede SpCO) responde.

## 🌪️ Mecanismo Fisiopatológico

- O oxímetro convencional usa **dois comprimentos de onda** (660 nm e 940 nm) e só "conhece" oxi-Hb e desoxi-Hb. Qualquer outra espécie de hemoglobina distorce a razão de absorção:
	- **Carboxi-Hb** absorve em 660 nm como a oxi-Hb → é contada como saturada → **SpO₂ superestima**.
	- **Meta-Hb** absorve muito nos dois comprimentos → a razão converge para ~1 → leitura **trava perto de 85%**, seja a saturação real 70% ou 95%.
- A **PaO₂** mede o O₂ **dissolvido** no plasma — não depende de a hemoglobina estar funcional. Por isso ela fica normal enquanto o **conteúdo** de O₂ despenca.
- Por que **não responde ao O₂ suplementar**: o problema não é a chegada de oxigênio ao sangue, é a hemoglobina incapaz de carregá-lo. Aumentar a FiO₂ sobe a PaO₂, mas não converte meta-Hb em Hb funcional.

---

## 🎯 PODER DIAGNÓSTICO (O PIVÔ)

- **Significado Clínico:** no algoritmo de hipoxemia que **não responde** ao O₂ e **sem** lesão pleuroparenquimatosa que a explique, o gap decide o ramo:
	- **Gap presente** → disemoglobinemia → [[Metemoglobinemia]] ou [[Intoxicação por Monóxido de Carbono]] → co-oximetria confirma e quantifica.
	- **Gap ausente** → **shunt direita-esquerda** verdadeiro (intracardíaco ou intrapulmonar) → ecocardiograma com microbolhas, angio-TC.
- **Acurácia (LR+/LR−):** não há estudos de acurácia com LR para o gap como teste isolado; seu valor é **fisiológico e de classificação**, e o diagnóstico definitivo é a co-oximetria.
- **Associação Clássica:** [[Cianose Central]] cinza-azulada que **não melhora com O₂** + PaO₂ normal + SpO₂ ~85% + sangue **"cor de chocolate"** + uso recente de [[Dapsona]], anestésico tópico (benzocaína) ou nitrato = [[Metemoglobinemia]].
- **Onde isso entra no raciocínio:** passo final do algoritmo de IRpA hipoxêmica em [[Abordagem da Dispneia Aguda]] e do Grupo C de [[Abordagem da Hipoxemia]].

---

## ⚠️ Pitfalls e Falsos

- **Falsos Positivos** (gap sem disemoglobinemia):
	- Má perfusão periférica, movimento, luz ambiente intensa, esmalte azul/preto → SpO₂ errada por artefato.
	- **Azul de metileno** recém-infundido → SpO₂ cai transitoriamente (o corante absorve em 660 nm).
	- Amostra venosa ou mista confundida com arterial.
	- Gasometria e oximetria colhidas em momentos diferentes, com FiO₂ diferente.
- **Falsos Negativos:**
	- **Intoxicação por CO quando a comparação é SpO₂ × SaO₂ calculada** (ver acima).
	- Meta-Hb baixa (< ~10%) — o gap pode não passar de 5%.
- **Viés de pigmentação:** em pele escura o oxímetro superestima a saturação; uma discordância modesta com a gasometria pode ser viés e não disemoglobinemia — mais um motivo para usar co-oximetria quando a dúvida importa.
- **Erro Comum de Execução:** confiar na "SatO₂" impressa no laudo da gasometria sem saber se o aparelho **mediu** ou **calculou**.

---

### 🖼️ Imagem / Esquema

![[5 - Sistema/Arquivos/Imagens/gap-de-saturacao.jpg]]
*TODO: Adicionar esquema com as três leituras (SpO₂, SaO₂ calculada, SaO₂ co-oximetria) lado a lado na metemoglobinemia e na intoxicação por CO*

**Onde buscar:**
- Derangedphysiology.com — "Pulse oximetry and the saturation gap"
- Iolascon A, et al. Am J Hematol. 2021 — figura de diagnóstico da metemoglobinemia

---

## 📚 Referências
*Consultado em 2026-10-18*

1. **[EHA/EuroBloodNet 2021]** Iolascon A, Bianchi P, Andolfo I, et al. Recommendations for diagnosis and treatment of methemoglobinemia. Am J Hematol. 2021;96(12):1666-1678. PMID 34467556 — co-oximetria como padrão diagnóstico; limitação do oxímetro de pulso.
2. **[Fonte-base]** Araujo JPN, Vasconcelos JM. Dispneia no Pronto-Socorro. Guia Tá de Clinicagem, jun/2026 — posição do gap no algoritmo de IRpA hipoxêmica — https://www.tadeclinicagem.com.br/guia/594/dispneia-no-pronto-socorro/
3. Parr NJ, Beech EH, Young S, Valley TS. Racial and Ethnic Disparities in Occult Hypoxemia Prevalence and Clinical Outcomes Among Hospitalized Patients. J Gen Intern Med. 2024;39(13):2543-2553. PMID 39020232
4. Princípio de dois comprimentos de onda, leitura travada em ~85% e distinção SaO₂ calculada × medida: **conhecimento consolidado de fisiologia e física da oximetria, sem diretriz que os normatize**.

---

### ➕ Novas Anotações / Insights
*- (Espaço livre para updates futuros)*
-
