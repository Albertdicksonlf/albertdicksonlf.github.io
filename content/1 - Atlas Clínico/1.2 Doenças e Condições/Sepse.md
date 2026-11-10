---
aliases:
  - Sepsis
  - Septicemia
  - Sepsis-3
card: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdM_mt-gSmgR1AiSEbwsbuYeUbgPYOD4Wtw&s
classe de medicamentos: null
date: 2026-11-08T15:20:00
prevalência: Comum
tipo: Doença
tipo de doença: Infecciosa
tipo de exame: null
área:
  - Emergência
  - Infectologia
  - Terapia Intensiva
---
# Sepse

> [!abstract] Resumo de Uma Linha
> **Disfunção orgânica ameaçadora à vida causada por resposta desregulada do hospedeiro a uma infecção** (Sepsis-3, 2016). Não é sinônimo de bacteremia nem de "infecção grave": o que define é a **disfunção orgânica**, operacionalizada como aumento agudo **≥ 2 pontos** no [[Escore SOFA|SOFA]]. Emergência tempo-dependente: mortalidade hospitalar acima de 10% — e acima de 40% quando evolui para [[Choque Séptico|choque séptico]].

## 🧬 Etiologia
- **Causa(s) Principal(is):** por definição, sempre uma **infecção suspeita ou confirmada**. Quadros inflamatórios estéreis (pancreatite, queimadura, trauma) podem imitar sepse, mas não preenchem a definição.
	- **Bactérias** — a grande maioria. A proporção Gram-positivo × Gram-negativo depende do cenário: o deck traz Gram-positivos ~50% e Gram-negativos ~35% (epidemiologia americana); em UTIs do mundo todo (EPIC III, 2017), entre os pacientes com cultura positiva, **Gram-negativos 67%**, Gram-positivos 37% e fungos 16%.
	- **Vírus** — [[Influenza]], VSR, SARS-CoV-2 e, no Brasil, [[Dengue]]; subdiagnosticados.
	- **Fungos** — raros; ligados a imunossupressão, nutrição parenteral, cateteres e foco abdominal.
	- **Sepse cultura-negativa** — em cerca de **metade** dos casos nenhum patógeno é isolado.
- **Focos mais frequentes:** pulmão ([[Pneumonia]]), abdome ([[Colangite Aguda]], [[Diverticulite Aguda]], [[Peritonite Bacteriana Espontânea (PBE)]]), trato urinário ([[Infecção do Trato Urinário (ITU)]]), pele e partes moles ([[Erisipela]], [[Fasciíte Necrosante]]) e dispositivos (cateter).
- **Fatores de Risco / Gatilhos:**
	- **Idade ≥ 65 anos** (60–85% dos casos; a idade é preditor independente de mortalidade) e crianças < 4 anos, sobretudo neonatos
	- Comorbidades: [[Diabetes Mellitus]], [[Obesidade]], neoplasia, imunossupressão ([[Neutropenia Febril]], [[AIDS]], transplante, corticoide) — ~50% das mortes ocorrem com comorbidade subjacente
	- **Hospitalização recente** — antibióticos alteram a microbiota; risco ~3× maior de sepse nos 90 dias seguintes à alta
	- **Internação em UTI** e dispositivos invasivos — infecção nosocomial, germes mais resistentes
- **Classificação Etiológica:** **comunitária** × **relacionada à assistência** (nosocomial). As nosocomiais matam mais — atenção a corrente sanguínea por [[Staphylococcus aureus]], fungos e [[Pseudomonas aeruginosa]].

## 🌪️ Fisiopatologia

> [!info]- 🔄 Base Fisiológica Relembrada
> *Qual estrutura/função normal está sendo acometida? Recupere o baseline ANTES de explicar o desvio.*
> - **Fisiologia normal:** a inflamação é um programa de **contenção local**. Componentes do micro-organismo (PAMPs) e de tecido lesado (DAMPs) ativam receptores de reconhecimento (ex.: Toll-like), que liberam citocinas para recrutar leucócitos, aumentar a permeabilidade **no foco** e ativar a coagulação **local**, isolando o patógeno. Os mediadores ficam confinados ao interstício do tecido infectado e são freados por sinais anti-inflamatórios (IL-4, IL-10, TGF-β).
> - **O que se quebra:** a resposta escapa do foco e vai para o sangue. A imagem do deck (UpToDate) resume bem — **inflamação intravascular maligna**: *inflamação* (exagero da resposta normal), *intravascular* (o sangue espalha mediadores que deveriam ficar no interstício), *maligna* (descontrolada e autossustentável). O que separa sepse de infecção grave é o acometimento de **tecidos distantes** do foco.

- **Mecanismo Basal:**
	1. **Gatilho:** componentes estruturais (parede, LPS) ou toxinas → receptores → citocinas pró-inflamatórias — **TNF-α e IL-1** (as clássicas; infundidas, reproduzem o quadro séptico), IL-6, IL-2 e IFN-γ (ligado a quadros virais). Anti-inflamatórias: IL-4, IL-10 e TGF-β.
	2. **Complemento** ativado em excesso → lesão endotelial e aumento de permeabilidade.
	3. **Endotélio:** óxido nítrico e prostaciclina → vasodilatação arterial e venosa difusa (queda da resistência vascular sistêmica) + vazamento capilar → hipovolemia relativa → **hipotensão**.
	4. **Microcirculação** (considerada pivotal): fluxo mal distribuído (áreas com óxido nítrico demais e outras de menos; arteríolas perdem a resposta adrenérgica), **microtrombos**, edema intersticial (aumenta a distância de difusão e comprime capilares) e hemácias menos deformáveis, que se agregam.
	5. **Coagulação:** macrófagos produzem **fator tecidual** ativamente → trombos na micro e na macrocirculação → consumo de fatores → [[Coagulação Intravascular Disseminada (CIVD)|CIVD]], com trombose **e** sangramento. Sepse e trauma grave respondem por quase todas as CIVD.
	6. **Célula:** isquemia + lesão direta (toxinas, mediadores) + **disfunção mitocondrial** + ativação de vias de morte celular → disfunção orgânica.
	7. **Imunossupressão simultânea:** a ideia de uma fase pró-inflamatória seguida de outra anti-inflamatória (CARS) é histórica — hoje se sabe que as duas **coexistem desde o início**. Quando persiste, evolui para **PICS** (inflamação persistente, imunossupressão e catabolismo), com infecções secundárias recorrentes.
- **Repercussão por sistema (é o que o SOFA mede):**

| Sistema | Consequência principal | Mecanismo |
|---|---|---|
| Circulatório | Hipotensão → [[Choque Séptico\|choque distributivo]] | Óxido nítrico e prostaciclina derrubam a resistência; vazamento capilar reduz o volume efetivo |
| Pulmonar | Edema de permeabilidade → [[Síndrome do Desconforto Respiratório Agudo (SDRA)\|SDRA]] | Permeabilidade aumentada + neutrófilos lesando o alvéolo |
| Renal | [[Insuficiência Renal Aguda\|Injúria renal aguda]] | **Não é só hipoperfusão**: o fluxo renal global pode estar normal ou alto; predominam disfunção microcirculatória e mitocondrial tubular |
| Neurológico | Encefalopatia séptica — [[Delirium]], rebaixamento | Quebra da barreira hematoencefálica, citocinas e leucócitos no SNC |
| Gastrointestinal / hepático | Translocação bacteriana; colestase | Perda da barreira intestinal; fígado deixa de depurar bactérias e toxinas portais |
| Hematológico | [[Plaquetopenia]], [[Coagulação Intravascular Disseminada (CIVD)\|CIVD]] | Fator tecidual, consumo |
| Metabólico | Hiperglicemia; [[Lactato arterial elevado\|hiperlactatemia]] | Catecolaminas, cortisol e glucagon; glicólise acelerada e hipóxia tecidual |

## 🤒 Apresentação Clínica
- **Quadro Típico:** sinais do **foco** (o principal determinante da clínica: tosse e dispneia → pulmão; disúria e dor lombar → urinário; dor abdominal → abdome) + sinais **sistêmicos** + sinais de **disfunção orgânica**. No idoso, confusão e queda do estado geral podem ser os únicos achados.
- **Sintomas Principais:**
	- [[Febre]] — ou **hipotermia**; a ausência de febre é sinal de **pior prognóstico** (resposta inflamatória insuficiente)
	- [[Taquicardia]]
	- [[Taquipneia]] — precoce: citocinas estimulam o centro respiratório, somam-se acidose e hipoxemia (PaCO₂ baixa = está hiperventilando)
	- [[Hipotensão]]
	- [[Confusão Mental]] / [[Rebaixamento do nível de consciência]]
	- [[Oligúria]]
	- [[Dispneia]]
- **Sinais de Alerta (Red Flags):**
	- **Choque instável** (SSC 2026): PA muito baixa, pele mosqueada, aspecto acinzentado, cianose ou SpO₂ baixa, taquicardia e alteração mental → vasopressor **junto** com o volume
	- Lactato > 2 mmol/L, [[Tempo de Enchimento Capilar (TEC) > 3s|TEC > 3 s]], oligúria
	- [[Plaquetopenia]] < 100.000 (marcador precoce de mortalidade em 28 dias, segundo o deck) e sangramento (CIVD)
	- **Leucopenia** e hipotermia — mau prognóstico pelo mesmo motivo da ausência de febre

---

## 🎯 ACHADOS-CHAVE (PIVÔS)
*Dados que mudam a probabilidade pré-teste.*

- **Exame Físico:**
	- [[Tempo de Enchimento Capilar (TEC) > 3s]]
	- [[Livedo Reticular]] (pele mosqueada)
	- [[Pressão Arterial Média]] < 65 mmHg
- **Laboratoriais:**
	- [[Lactato arterial elevado]] (> 2 mmol/L = 18 mg/dL)
	- [[Plaquetopenia]]
	- [[Hipoxemia]] (queda da PaO₂/FiO₂)
	- Elevação de creatinina e bilirrubina; hiperglicemia de estresse
- **Escores** *(estratificam e operacionalizam — nenhum diagnostica infecção):*
	- [[Escore SOFA]] — define a disfunção orgânica (Δ ≥ 2)
	- [[Escore NEWS]] — rastreio à beira-leito, preferido ao qSOFA
- **Imagem** (dirigida ao foco suspeito):
	- [[Raio-X de Tórax]], [[Ultrassonografia Pulmonar]], [[Tomografia Computadorizada de Abdome]]

---

## 🔍 Diagnósticos Diferenciais
(O que parece mas não é? O que mata se eu deixar passar?)
- Pancreatite aguda e outras inflamações estéreis (queimadura, trauma, pós-operatório)
- Choque cardiogênico (infarto, miocardite)
- Tromboembolismo pulmonar maciço
- Choque hipovolêmico ou hemorrágico (hemorragia digestiva oculta)
- Anafilaxia
- Insuficiência adrenal aguda
- Crise tireotóxica
- Cetoacidose diabética
- Intoxicações (salicilato, simpatomiméticos), síndrome neuroléptica maligna, síndrome serotoninérgica
- Infecção grave sem disfunção orgânica — que não é sepse

---

## 🔬 Investigação e Diagnóstico
- **O diagnóstico é clínico.** SSC 2026: nenhum biomarcador ou teste isolado confirma ou exclui sepse. Muitas vezes é feito de forma empírica na admissão — ou retrospectivamente, com culturas e resposta ao antibiótico.
- **Critérios Diagnósticos (Sepsis-3):**
	- **Sepse** = infecção suspeita ou confirmada + aumento agudo **≥ 2 pontos** no SOFA (basal presumido 0 se não se conhece disfunção prévia)
	- **[[Choque Séptico]]** = vasopressor para PAM ≥ 65 mmHg **e** lactato > 2 mmol/L (18 mg/dL) apesar de volume adequado
	- **qSOFA ≥ 2** (FR ≥ 22, PAS ≤ 100, alteração mental) → **prognóstico**, não diagnóstico
- **Graduação de probabilidade (SSC 2026):** sepse **possível, provável ou definitiva** (ou improvável) — é ela, junto com a presença de choque, que define a urgência do antibiótico.
- **Rastreio:** SSC 2026 **recomenda** usar [[Escore NEWS|NEWS, NEWS2]], MEWS ou SIRS em vez do qSOFA como ferramenta única (forte, certeza moderada).
- **Exames Iniciais (Screening):**
	- [[Hemocultura]] — o quanto antes, idealmente antes do antibiótico, sem atrasá-lo
	- [[Lactato]] — sugerido pela SSC 2026; seriado se elevado
	- [[Hemograma]], [[Creatinina]], bilirrubinas, coagulação, [[Gasometria arterial]] — os exames que alimentam o SOFA (o **INR não entra** no SOFA)
	- Culturas do foco ([[Urocultura]], escarro, líquidos) e imagem dirigida
- **[[Procalcitonina]]:** **não** usar para decidir **iniciar** antibiótico (SSC 2026 — clínica isolada); usar **com** a clínica para decidir **suspender**.
- **Padrão-Ouro (Gold Standard):** não existe exame definitivo — a cultura confirma infecção e guia o antibiótico, mas até 50% são negativas.

---

## 💊 Tratamento e Manejo

### **1. Medidas Gerais e Suporte**
- Começar **imediatamente** — pacote inicial em [[Bundle da Primeira Hora (Sepse)]].
- **Volume:** cristaloide — preferir balanceado ([[Ringer Lactato]]) — **≥ 30 mL/kg nas primeiras 3 h** se hipoperfusão ou choque (peso ideal ou ajustado se IMC > 30), em bolus (~500 mL) com reavaliação antes e depois de cada um. Depois disso, guiar por medidas **dinâmicas** ([[Elevação Passiva das Pernas]]), [[Lactato]] seriado e [[Tempo de Enchimento Capilar (TEC) > 3s|TEC]]. [[Albumina Humana|Albumina]] só como suplemento após grandes volumes ou na cirrose; soro fisiológico (não balanceado) no TCE.
- **Pressão:** PAM-alvo 65 mmHg (60–65 se ≥ 65 anos) → se hipotensão persiste, [[Noradrenalina]], que pode começar em veia periférica → detalhes em [[Choque Séptico]].
- UTI em até 6 h, quando indicada.
- **Suporte:** insulina se glicemia ≥ 180 mg/dL; transfusão restritiva; profilaxia de TEV com heparina de baixo peso ([[Enoxaparina]]) em vez de não fracionada; IBP se risco de sangramento digestivo; nutrição enteral nas primeiras 72 h; **não** usar antitérmico com a finalidade de melhorar desfecho.

### **2. Tratamento Específico (Antimicrobiano)**
- **Quando (SSC 2026):**

| Cenário | Antibiótico |
|---|---|
| Choque possível, provável ou definitivo | **Imediato**, idealmente < 1 h |
| Sepse provável ou definitiva **sem** choque | **Imediato**, idealmente < 1 h |
| Sepse **possível** sem choque | Investigação rápida; se a suspeita persistir, em até **3 h** |
| Baixa probabilidade de infecção, sem choque | Adiar e monitorar de perto |

- **Qual:** individualizado — foco, comunidade × hospital, colonização, uso prévio de antibiótico e epidemiologia local → [[Abordagem da Escolha do Antimicrobiano]].
	- Cobrir germe multirresistente **só** se alto risco (colonização ou infecção prévia por ele, antibiótico prolongado, internação longa em unidade com alta prevalência).
	- Cobrir **anaeróbio só** se foco abdominal, ginecológico profundo, infecção necrotizante, cabeça e pescoço ou abscesso no SNC.
	- O deck (UpToDate) sugere como esquema empírico amplo [[Vancomicina]] + betalactâmico ([[Ceftriaxona]], [[Piperacilina-Tazobactam]] ou [[Meropenem]]).
- **Como:**
	- Com vários antibióticos, o **betalactâmico vai primeiro** (efeito tempo-dependente e espectro amplo).
	- **Infusão prolongada** de betalactâmico após dose de ataque — recomendação **forte** da SSC 2026.
	- Antifúngico empírico: SSC 2026 **sugere contra** de rotina; considerar caso a caso (imunossupressão, antibiótico ou internação prolongados, foco abdominal).
- **Depois:** descalonar com cultura e antibiograma (forte), descalonar mesmo com culturas negativas (sugestão), preferir cursos curtos com foco controlado e usar [[Procalcitonina]] + clínica para suspender.

### **3. Intervenção (Controle do Foco)**
- Avaliar logo se há foco anatômico que exige intervenção; controle **idealmente em até 6 h** — drenar abscesso, desbridar necrose, desobstruir via biliar, **trocar acesso infectado** (obter outro e retirar o suspeito).

---

## 💡 Pontos de Aprendizado e Heurísticas
- **Heurística:** bacteremia e sepse são eixos independentes — há bacteremia sem sepse (transitória após procedimento dentário) e sepse sem bacteremia (pneumonia com culturas negativas).
- **Heurística:** "SIRS + infecção = sepse" é a definição antiga (Sepsis-1/2) — inespecífica. O Sepsis-3 trocou SIRS por **disfunção orgânica**.
- **Heurística:** o jovem compensa — a taquicardia sustenta a PA até o colapso súbito. Não espere a hipotensão para suspeitar.
- **Erro Comum:** atrasar antibiótico, volume ou vasopressor esperando acesso central ou resultado de exame.
- **Erro Comum:** usar qSOFA para **excluir** sepse — foi criado para prognóstico e tem baixa sensibilidade.
- **Pérola de Prova:** lactato 2 mmol/L = 18 mg/dL · PAM 65 · 30 mL/kg em 3 h · INR fora do SOFA · procalcitonina para **parar**, não para começar.

> [!warning] Correções e atualizações sobre o material-fonte
> - **Infusão prolongada de betalactâmico** — o deck chama a recomendação de "bem controversa"; a SSC 2026 a tornou **forte** (certeza moderada). O BLING III isolado não atingiu significância na mortalidade (24,9% × 26,8%; OR 0,91; P = 0,08), mas melhorou cura clínica (55,7% × 50,0%), e a metanálise de 2024 (18 ensaios, 9.108 pacientes) estimou **RR 0,86** para mortalidade em 90 dias. O MERCY, com meropenem contínuo, foi neutro.
> - **Antifúngico empírico** — a SSC 2021 sugeria nos pacientes de alto risco; a SSC 2026 passou a **sugerir contra** de rotina, deixando o uso caso a caso.
> - **Gram-positivos × Gram-negativos** — o predomínio de Gram-positivos vale para dados americanos; nas UTIs do mundo (EPIC III) predominam Gram-negativos.
> - **"Bundle da 1ª hora da SSC 2026"** — o pacote de 5 itens vem da atualização de **2018** (Levy); a diretriz de 2026 revisa cada item, mas não publica um novo bundle.
> - Nota antiga dizia "NTA por hipoperfusão": a injúria renal da sepse ocorre mesmo com fluxo renal global normal ou alto — o mecanismo é microcirculatório e mitocondrial.

---

## 📚 Referências
*Consultado em 2026-11-08*

1. **[SSC 2026]** Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2026. Crit Care Med. 2026. doi:10.1097/CCM.0000000000007075. PMID 41869847 — publicação simultânea: Intensive Care Med. 2026, doi:10.1007/s00134-026-08361-1, PMID 41870560 — recomendações filtráveis: https://sccm.org/survivingsepsiscampaign/guidelines-and-resources/surviving-sepsis-campaign-adult-guidelines
2. **[Sepsis-3]** Singer M, Deutschman CS, Seymour CW, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA. 2016;315(8):801-810. PMID 26903338
3. **Seymour CW, et al.** Assessment of Clinical Criteria for Sepsis. JAMA. 2016;315(8):762-774. PMID 26903335
4. **Ranzani OT, Singer M, Salluh JIF, et al.** Development and Validation of the Sequential Organ Failure Assessment (SOFA)-2 Score. JAMA. 2025;334(23):2090-2103. PMID 41159833
5. **Vincent JL, Sakr Y, Singer M, et al.** Prevalence and Outcomes of Infection Among Patients in Intensive Care Units in 2017 (EPIC III). JAMA. 2020;323(15):1478-1487. PMID 32207816
6. **Dulhunty JM, et al.** Continuous vs Intermittent β-Lactam Antibiotic Infusions in Critically Ill Patients With Sepsis: The BLING III Randomized Clinical Trial. JAMA. 2024;332(8):629-637. PMID 38864155
7. **Abdul-Aziz MH, Hammond NE, Brett SJ, et al.** Prolonged vs Intermittent Infusions of β-Lactam Antibiotics in Adults With Sepsis or Septic Shock: A Systematic Review and Meta-Analysis. JAMA. 2024;332(8). PMID 38864162
8. **Monti G, et al.** Continuous vs Intermittent Meropenem Administration in Critically Ill Patients With Sepsis: The MERCY Randomized Clinical Trial. JAMA. 2023;330(2):141-151. PMID 37326473
9. **Levy MM, Evans LE, Rhodes A.** The Surviving Sepsis Campaign Bundle: 2018 Update. Crit Care Med. 2018;46(6):997-1000. PMID 29767636
10. **UpToDate** — "Sepsis syndromes in adults: Epidemiology, definitions, clinical presentation, diagnosis, and prognosis" e "Pathophysiology of sepsis" — citados no deck Osler trazido pelo Albert (dados de epidemiologia, risco pós-hospitalização e plaquetopenia < 100 mil); não acessados pelo assistente

---

### ➕ Novas Anotações / Insights
*- Nota reescrita em 2026-11-08 (template v3.5) a partir de `Sepse - Anotações` (deck Osler). A versão de jan/2026 tinha 7 links para notas inexistentes; foram trocados por filenames reais. O alias "Choque Séptico" saiu daqui porque agora há nota própria — [[Choque Séptico]].*
-
