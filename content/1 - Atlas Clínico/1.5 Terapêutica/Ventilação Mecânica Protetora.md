---
date: 2026-11-01T19:10:00
área:
  - Terapia Intensiva
  - Pneumologia
  - Medicina de Emergência
tipo: Procedimento Cirúrgico
tipo de exame:
tipo de doença:
classe de medicamentos:
prevalência:
aliases:
  - Ventilação Protetora
  - Ventilação Mecânica Invasiva
  - Estratégia Protetora
  - Baixo Volume Corrente
  - Lung Protective Ventilation
  - Protocolo ARDSNet
card:
---

# Ventilação Mecânica Protetora

> [!abstract] Resumo de Uma Linha
> Estratégia de ventilação invasiva que aceita trocas gasosas **piores** para entregar ao pulmão um volume e uma pressão que ele tolera: **volume corrente de 4–8 mL/kg de peso predito** e **pressão de platô < 30 cmH₂O**. É a única intervenção ventilatória na [[Síndrome do Desconforto Respiratório Agudo (SDRA)|SDRA]] com redução de mortalidade de certeza alta — e o motivo é que o ventilador, mal ajustado, é ele próprio uma causa de lesão pulmonar.

> [!tip] Onde esta nota se encaixa
> A síndrome que a justifica: [[Síndrome do Desconforto Respiratório Agudo (SDRA)]] · [[Insuficiência Respiratória]].
> O decúbito que se soma a ela na SDRA moderada-grave: [[Posição Prona]].
> Antes do tubo: [[Oxigenoterapia]] · [[Cateter Nasal de Alto Fluxo (CNAF)]] · [[Ventilação Não Invasiva (VNI)]]. O tubo: [[Intubação Orotraqueal]].
> Como medir o que se está fazendo: [[Mecânica Ventilatória Básica]].

## 📋 Indicações e Seleção de Paciente

- **Indicação obrigatória:** todo paciente com [[Síndrome do Desconforto Respiratório Agudo (SDRA)|SDRA]] em ventilação invasiva — recomendação **forte, certeza alta** (ESICM 2023, a partir do ARMA/ARDSNet 2000).
- **Indicações de Emergência (aplicar desde o primeiro ajuste, não depois):** [[Pneumonia]] grave, [[Sepse]] com disfunção pulmonar, [[Contusão Pulmonar|contusão pulmonar]], [[Lesão Inalatória|lesão inalatória]], [[Pancreatite Aguda|pancreatite grave]], [[COVID-19]].
- **Uso fora da SDRA:** limitar volume corrente e pressão de platô é prática padrão em qualquer paciente ventilado, ainda que a certeza da evidência seja menor que na SDRA. O raciocínio é simétrico: não há benefício conhecido em ventilar com volume alto.
- **Critério prático de inclusão:** basta a decisão de intubar. O ajuste protetor é feito **no momento da primeira programação** do ventilador, não como resgate quando o paciente piora.

## ⛔ Contraindicações

- **Absolutas:** nenhuma. O que existe são situações em que o alvo é relaxado temporariamente.
- **Relativas / exceções ao alvo:**
	- **Acidose grave e refratária** (pH < 7,15 apesar de frequência maximizada): o protocolo ARDSNet permite subir o volume corrente em passos de 1 mL/kg até o pH passar de 7,15, **mesmo excedendo** a pressão de platô de 30 cmH₂O.
	- **Hipertensão intracraniana** ([[Hipertensão Intracraniana]]): a hipercapnia permissiva é mal tolerada, porque a PaCO₂ elevada vasodilata e aumenta a pressão intracraniana.
	- **Doença obstrutiva grave com auto-PEEP**: a prioridade passa a ser tempo expiratório longo, e o alvo de volume compete com o de esvaziamento pulmonar.

## 🔪 Técnica e Princípios (Passo a Passo)

### **1. Calcular o peso predito — este é o passo que mais se erra**

O volume corrente é prescrito por **peso predito (PBW)**, que depende **apenas de altura e sexo**. Não se usa peso real, peso seco, peso ideal estimado "a olho" nem peso de balança.

- **Homens:** PBW (kg) = 50 + 0,91 × (altura em cm − 152,4)
- **Mulheres:** PBW (kg) = 45,5 + 0,91 × (altura em cm − 152,4)

*(formulação equivalente do protocolo original, em polegadas: 50 ou 45,5 + 2,3 × (altura em polegadas − 60))*

> [!danger] Por que peso real é lesivo
> O pulmão de um obeso não é maior que o de um magro da mesma altura — o que aumentou foi a parede e o tecido adiposo. Prescrever 6 mL/kg de **peso real** em um paciente de 120 kg e 1,65 m entrega mais que o dobro do volume que aquele pulmão suporta. O erro é invisível na tela do ventilador e aparece como mortalidade.

### **2. Programar o volume corrente**

- **Início:** 8 mL/kg PBW.
- **Redução:** 1 mL/kg a cada **2 horas ou menos**, até **6 mL/kg PBW** (o alvo).
- **Faixa aceitável:** 4–8 mL/kg PBW.
- **Modo ventilatório não é o que protege:** a proteção vem do **volume e da pressão**, não da escolha entre volume controlado e pressão controlada. Em volume controlado monitora-se a pressão resultante; em pressão controlada monitora-se o volume resultante. Qualquer um dos dois protege se os alvos forem respeitados, e qualquer um dos dois lesa se não forem.

### **3. Vigiar a pressão de platô**

- **Alvo: Pplat ≤ 30 cmH₂O.**
- **Como medir:** pausa inspiratória de **0,5 s**; verificar ao menos a cada **4 h** e após **qualquer** mudança de PEEP ou de volume corrente.
- **Se Pplat > 30:** reduzir o volume corrente em passos de 1 mL/kg, até o mínimo de **4 mL/kg**.
- **Se Pplat < 25 com volume corrente abaixo de 6 mL/kg:** subir o volume em 1 mL/kg até Pplat passar de 25 ou o volume chegar a 6 mL/kg.
- **Se Pplat < 30 mas há empilhamento de ciclos (*breath stacking*) ou assincronia:** pode-se subir o volume corrente em passos de 1 mL/kg até 7–8 mL/kg, desde que Pplat permaneça < 30.
- **Driving pressure (Pplat − PEEP):** fisiologicamente é a pressão que de fato distende o pulmão e é melhor preditor de desfecho que o volume corrente ou o platô isolados — mas **não é alvo com recomendação graduada**: tanto a ATS/ESICM/SCCM 2017 quanto a ESICM 2023 a classificam como questão de pesquisa. Monitorar sim; titular por ela, ainda sem respaldo formal.

### **4. Ajustar oxigenação com o mínimo necessário**

- **Alvo:** **PaO₂ 55–80 mmHg** ou **SpO₂ 88–95%**. Note que são alvos **mais baixos** que no doente agudo em geral ([[Oxigenoterapia|94–98%]]) — hiperóxia não traz benefício e tem dano mensurável.
- **PEEP mínimo: 5 cmH₂O.**
- **Combinações FiO₂/PEEP do protocolo ARDSNet** (escada, não receita isolada):

| Estratégia | Escalonamento |
|---|---|
| **PEEP mais baixo / FiO₂ mais alta** | FiO₂ 0,3→0,4→0,4→0,5→0,5→0,6→0,7→0,7→0,7→0,8→0,9→0,9→0,9→1,0 <br> PEEP 5→5→8→8→10→10→10→12→14→14→14→16→18→18–24 |
| **PEEP mais alto / FiO₂ mais baixa** | FiO₂ 0,3→0,3→0,3→0,3→0,3→0,4→0,4→0,5→0,5→0,5–0,8→0,8→0,9→1,0→1,0 <br> PEEP 5→8→10→12→14→14→16→16→18→20→22→22→22→24 |

- **Qual das duas escadas usar?** A **ESICM 2023 não faz recomendação** entre PEEP alto e PEEP baixo, com certeza **alta de que não há diferença de mortalidade** — e o mesmo vale para titulação guiada por mecânica *versus* tabela. Ou seja: escolha pela resposta individual (oxigenação, complacência, hemodinâmica), não pela crença de que mais PEEP é melhor. **⚠️ Atualizado em 2026-11-13:** a **ATS 2024 sugere a escada de PEEP mais alto, sem recrutamento, na SDRA moderada-grave** (condicional) e não recomenda nada na leve — ver o bloco no fim da nota.
- **Manobras de recrutamento prolongadas (≥ 35 cmH₂O por ≥ 1 min): recomendação forte contra** (ESICM 2023). Manobras breves: sugestão fraca contra uso rotineiro.

### **5. Aceitar a hipercapnia — e saber até onde**

- **Frequência respiratória:** ajustada à ventilação-minuto basal, **máximo 35 irpm**.
- **Alvo de pH: 7,30–7,45.**
- **pH 7,15–7,30:** subir a frequência até pH > 7,30 ou PaCO₂ < 25 mmHg, respeitando o teto de 35 irpm.
- **pH < 7,15:** frequência a 35 irpm; se persistir, subir volume corrente em passos de 1 mL/kg até pH > 7,15 (**a meta de platô pode ser excedida aqui**); bicarbonato de sódio pode ser usado.
- **pH > 7,45:** reduzir a frequência.
- A [[Hipercapnia|hipercapnia]] e a [[Acidose Respiratória|acidose respiratória]] resultantes são o **preço planejado** da estratégia, não uma complicação.

---

## 🎯 PIVÔS DE DECISÃO E RISCOS

- **Decisão Tática (Pivô):** o par de números que governa cada visita ao leito é **volume corrente em mL/kg PBW** e **pressão de platô**. Se o platô subiu, a pergunta não é "aumento a sedação?" e sim "o pulmão piorou ou o volume está grande demais?".
- **Pivô de escalonamento:** PaO₂/FiO₂ < 150 com PEEP ≥ 5 em paciente já em ventilação protetora = indicação de [[Posição Prona|prona]], não de mais FiO₂.
- **Pivô de resgate:** hipoxemia refratária apesar de protetora + prona otimizadas = avaliar [[ECMO]].
- **Complicações durante a ventilação:**
	- [[Pneumotórax|Pneumotórax]] e enfisema intersticial (barotrauma) — suspeitar em toda deterioração súbita
	- Hipotensão por aumento de pressão intratorácica e queda do retorno venoso, sobretudo com PEEP elevado
	- Sobrecarga de ventrículo direito e cor pulmonale agudo
	- [[Atelectasia|Atelectasia]] por absorção com FiO₂ alta; atelectrauma por PEEP insuficiente
	- Assincronia e empilhamento de ciclos, que levam à necessidade de sedação mais profunda
- **Complicações tardias:** fraqueza muscular adquirida na UTI, delirium, pneumonia associada à ventilação, fibrose pulmonar residual nos casos arrastados.

---

## 🩹 Cuidados Durante e Após o Procedimento

- **Sedação e analgesia:** a mínima que permita manter os alvos; metas de sedação leve e interrupção diária quando seguro.
- **Bloqueio neuromuscular contínuo:** **recomendação forte contra** uso **rotineiro** na SDRA moderada-grave não COVID (ESICM 2023). Reserva-se para assincronia grave que impede a ventilação protetora. **⚠️ Divergência (2026-11-13):** a ATS 2024 *sugere* bloqueio na SDRA **grave precoce** (PaO₂/FiO₂ < 100, < 48 h, infusão ≤ 48 h) — detalhes em [[Síndrome do Desconforto Respiratório Agudo (SDRA)]].
- **Estratégia hídrica:** conservadora depois da estabilização hemodinâmica — aumenta dias livres de ventilação (FACTT, 2006).
- **Prevenção:** cabeceira elevada, higiene oral, profilaxia de tromboembolismo, [[Fisioterapia Respiratória|fisioterapia]] e mobilização precoce.
- **Desmame:** avaliação diária de prontidão e teste de respiração espontânea assim que a causa de base cede e a oxigenação permite.

---

## 💡 Pontos de Aprendizado

- **O princípio em uma frase:** o alvo da ventilação na SDRA não é normalizar a gasometria — é **não lesar o pulmão enquanto a causa é tratada**.
- **Erro Comum de Iniciante 1:** calcular volume corrente por peso real ou por peso de balança. É o erro mais frequente e o mais danoso.
- **Erro Comum de Iniciante 2:** acreditar que pressão controlada "protege de barotrauma" por si. O modo é indiferente; os alvos é que protegem.
- **Erro Comum de Iniciante 3:** perseguir PaO₂ de 90–100 mmHg. O alvo é 55–80 mmHg / SpO₂ 88–95%.
- **Erro Comum de Iniciante 4:** subir PEEP por protocolo mental ("SDRA = PEEP alto") em vez de titular pela resposta.
- **Pérola de Prova:** PBW depende de **altura e sexo**, nunca de peso.
- **Pérola de Prova:** a única situação do protocolo em que se **permite** exceder o platô de 30 é a acidose com pH < 7,15 após esgotar a frequência.
- **Pérola de Prova:** pausa inspiratória de 0,5 s é o que transforma pressão de pico em pressão de platô — pico alto com platô normal indica problema de **resistência** (via aérea), não de complacência.

---

## 📚 Referências
*Consultado em 2026-11-01*

1. **[ARMA / ARDSNet 2000]** The Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome. N Engl J Med. 2000;342(18):1301-1308. PMID 10793162
2. **[Protocolo ARDSNet — cartão de ventilação, NIH/NHLBI ARDS Network]** fórmulas de peso predito, escada de volume corrente, metas de platô, oxigenação, pH e tabelas FiO₂/PEEP — https://www.adventhealth.com/sites/default/files/assets/ventilator_protocol_2008-07ardsnet-table.pdf
3. **[ESICM 2023]** Grasselli G, Calfee CS, Camporota L, et al. ESICM guidelines on acute respiratory distress syndrome: definition, phenotyping and respiratory support strategies. Intensive Care Med. 2023;49(7):727-759. PMID 37326646 — https://doi.org/10.1007/s00134-023-07050-7
4. **[ATS/ESICM/SCCM 2017]** Fan E, Del Sorbo L, Goligher EC, et al. Mechanical Ventilation in Adult Patients with Acute Respiratory Distress Syndrome. Am J Respir Crit Care Med. 2017;195(9):1253-1263 — https://www.thoracic.org/statements/resources/cc/ards-guidelines.pdf
5. **[FACTT 2006]** Wiedemann HP, Wheeler AP, Bernard GR, et al. Comparison of two fluid-management strategies in acute lung injury. N Engl J Med. 2006;354(24):2564-2575. PMID 16714767
6. Mecanismos de VILI (volutrauma, barotrauma, atelectrauma, biotrauma) e intolerância da hipercapnia permissiva na hipertensão intracraniana: **conhecimento consolidado de fisiopatologia, sem diretriz aberta que os normatize**.
7. **UpToDate** — "Mechanical ventilation of adults in acute respiratory distress syndrome: Ventilator settings" — *(pendente: consultar e anotar)*

---

### ➕ Novas Anotações / Insights
*- (Espaço livre para updates futuros)*
-

### 🔗 Volume ou pressão? Driving pressure, PEEP alto e recrutamento — o que os estudos de fato mostraram
**Data:** 2026-11-13
**Contexto:** [[Síndrome do Desconforto Respiratório Agudo (SDRA)]] — processamento de `Síndrome do Desconforto Respiratório Aguda - Anotações`

**Características específicas:**
- ❌ **Correção a uma anotação do Albert:** *"não podemos pensar em meta de volume, temos que pensar em meta de pressão com driving pressure controlada"*. É o contrário do que a evidência hierarquiza. O **volume corrente por peso predito** é o único componente com **ensaio randomizado** mostrando redução de mortalidade (ARMA, 2000); platô e driving pressure são os números de **vigilância**. A conduta certa é **as duas coisas**: volume limitado **e** pressões dentro do alvo.
- **Driving pressure (Amato, NEJM 2015) — o que o estudo é e o que não é:** análise de mediação com dados individuais de **3.562 pacientes de 9 ensaios** — é **observacional**, não um ensaio que testou titular pela ΔP. Um aumento de **1 desvio-padrão (~7 cmH₂O)** na ΔP associou-se a mortalidade **RR 1,41** (IC 95% 1,31–1,51), inclusive em quem já tinha platô e volume "protetores" (**RR 1,36**; 1,17–1,58). Mudanças de volume ou de PEEP só se associaram a sobrevida **quando reduziam a ΔP**.
	- ⚠️ **Card: "cada 1 cmH₂O aumenta a mortalidade em ~4%".** Esse número **não está no artigo**, que reporta o efeito por desvio-padrão; é extrapolação linear (distribuindo o RR 1,41 por 7 cmH₂O dá ~5% por cmH₂O). Útil como intuição, não como dado.
	- ⚠️ **Card: "driving pressure < 15 cmH₂O".** Limiar prático muito usado, mas **nem a ATS (2017 e 2024) nem a ESICM 2023 o graduam** como alvo.
	- A ΔP (platô − PEEP) só reflete a distensão pulmonar no paciente **passivo**; com esforço inspiratório, o número da tela subestima o estresse real.
- **ART (JAMA 2017) — o estudo brasileiro que o card cita:** 1.010 pacientes com SDRA moderada-grave; **manobra de recrutamento + PEEP titulada pela melhor complacência** × PEEP baixo. Mortalidade em 28 dias **55,3% × 49,3%** (HR 1,20; 1,01–1,42); pneumotórax com drenagem **3,2% × 1,2%**; barotrauma **5,6% × 1,6%**. ✅ O card está certo — e este é o ensaio que sustenta a recomendação **forte contra** recrutamento prolongado.
- **PEEP alto — o corpo desta nota está desatualizado num ponto:** a **ATS 2024 sugere PEEP mais alto, sem manobra de recrutamento, na SDRA moderada-grave** (condicional, certeza baixa a moderada; mortalidade RR 0,77 em metanálise em rede de 4 ensaios/1.162 pacientes). Na **leve** houve sinal de **possível dano** (RR ajustado 1,29; 0,91–1,83) e não há recomendação. A ESICM 2023 continua sem recomendar nenhum dos dois. Na prática: na moderada-grave, inclinar para a escada de **PEEP mais alto**, sem manobras.
- **Recrutamento prolongado** (> 35 cmH₂O por > 60 s): ATS 2024 **contra, forte** — mortalidade RR 1,37 (1,04–1,81). Manobras breves e PEEP guiado por pressão esofágica: sem consenso.
- ⚠️ **Card: "a maior preocupação é o barotrauma".** Impreciso: a preocupação é a **lesão induzida pelo ventilador inteira**, em que o **volutrauma** é o mecanismo dominante; o barotrauma (vazamento de ar) é só a face visível. Card: "geralmente se faz PCV para evitar barotrauma" — já corrigido acima: o modo não protege (o próprio ART ventilou todos em volume assistido-controlado).

**Relevância clínica:** a frase "pense em pressão, não em volume" soa moderna e leva ao erro clássico — volume corrente alto escondido atrás de uma ΔP aceitável num pulmão que acabou de recrutar. Primeiro o volume por peso predito; depois platô e ΔP.
**Fonte:** Amato MBP, Meade MO, Slutsky AS, et al. Driving pressure and survival in the acute respiratory distress syndrome. N Engl J Med. 2015;372(8):747-55. PMID 25693014 — https://doi.org/10.1056/NEJMsa1410639 · Writing Group for the ART Investigators (Cavalcanti AB et al.). JAMA. 2017;318(14):1335-1345. PMID 28973363 — https://doi.org/10.1001/jama.2017.14171 · Qadir N et al. (ATS 2024). Am J Respir Crit Care Med. 2024;209(1):24-36. PMID 38032683 — https://doi.org/10.1164/rccm.202311-2011ST

---
