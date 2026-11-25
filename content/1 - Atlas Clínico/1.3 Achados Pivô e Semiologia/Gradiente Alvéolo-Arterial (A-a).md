---
date: 2026-09-27T16:45:00
área:
  - Pneumologia
  - Terapia Intensiva
  - Medicina de Emergência
tipo: Achado-Pivô
tipo de exame:
tipo de doença:
classe de medicamentos:
prevalência:
aliases:
  - Gradiente A-a
  - Gradiente Alvéolo-Arterial de Oxigênio
  - P(A-a)O2
  - Diferença Alvéolo-Arterial
card:
---

# Gradiente Alvéolo-Arterial (A-a)

> [!abstract] O que é?
> A diferença entre a pressão parcial de oxigênio **dentro do alvéolo** (PAO₂, calculada) e a que **chegou ao sangue arterial** (PaO₂, medida na [[Gasometria arterial]]). É a medida da **eficiência da travessia alvéolo-capilar** — e, na prática, o único parâmetro que separa hipoxemia por doença do **pulmão** de hipoxemia por falha do **fole** ou por ar pobre em oxigênio.

## 🖐️ Técnica de Exame (Como fazer?)

1. **Colha a gasometria arterial registrando a FiO₂.** Sem FiO₂ anotada o cálculo não existe — e é o erro mais comum.
2. **Calcule a PAO₂** pela equação do gás alveolar:

	PAO₂ = FiO₂ × (P<sub>atm</sub> − P<sub>H₂O</sub>) − (PaCO₂ / R)

	- Ao nível do mar, em ar ambiente: P<sub>atm</sub> = 760 mmHg, P<sub>H₂O</sub> = 47 mmHg, FiO₂ = 0,21, R (quociente respiratório) = 0,8.
	- **Atalho de beira de leito:** PAO₂ ≈ **150 − (PaCO₂ / 0,8)**, ou ainda **150 − (PaCO₂ × 1,25)**.
3. **Subtraia:** Gradiente = PAO₂ − PaO₂.
4. **Critério de positividade (gradiente alargado):**
	- Jovem saudável em ar ambiente: **< 10–15 mmHg**.
	- **Corrigido pela idade — use este:** valor esperado ≈ **(idade / 4) + 4**.
	- Em FiO₂ elevada o gradiente normal sobe muito (o critério da idade **não** se aplica); nesse cenário prefira a relação **PaO₂/FiO₂**.

> [!example] Exemplo trabalhado
> Homem de 60 anos, ar ambiente, PaO₂ 58 e PaCO₂ 30.
> PAO₂ ≈ 150 − (30 × 1,25) = **112,5**. Gradiente = 112,5 − 58 = **54,5 mmHg**.
> Esperado para a idade = (60/4) + 4 = **19**. Gradiente muito alargado **com hipocapnia** → o pulmão é o problema, e o padrão (hipoxemia desproporcional com radiografia pobre) aponta [[Tromboembolismo Pulmonar (TEP)|TEP]].

## 🌪️ Mecanismo Fisiopatológico

- Em pulmão saudável, o equilíbrio entre gás alveolar e sangue capilar é praticamente completo: a diferença residual vem apenas do **shunt fisiológico** (circulação brônquica e coronária mínima) e da leve heterogeneidade V/Q ápice-base. Daí o gradiente pequeno.
- **Qualquer mecanismo que degrade a troca alarga o gradiente:** alteração V/Q, shunt verdadeiro, distúrbio de difusão e aumento de espaço morto.
- **Dois mecanismos NÃO alargam o gradiente**, porque não têm nada de errado com a troca:
	- **Hipoventilação alveolar** — o alvéolo recebe menos ar, a PAO₂ cai junto com a PaO₂, e a diferença entre elas permanece normal. O CO₂ sobe.
	- **Baixa PO₂ inspirada** (altitude, mistura hipóxica) — a PAO₂ cai na origem. O CO₂ é normal ou baixo.
- É exatamente essa assimetria que faz do gradiente um **discriminador**, e não apenas um número descritivo.

---

## 🎯 PODER DIAGNÓSTICO (O PIVÔ)

- **Significado Clínico — a bifurcação central de [[Abordagem da Hipoxemia]]:**

| Gradiente | PaCO₂ | Interpretação | O que investigar |
|---|---|---|---|
| **Normal** | **Alta** | Hipoventilação alveolar | Drive (opioide, [[Lorazepam\|benzodiazepínico]], [[Traumatismo Cranioencefálico (TCE)\|TCE]]), nervo e músculo ([[Miastenia Gravis]], [[Síndrome de Guillain-Barré]], [[Botulismo]]), caixa torácica, obesidade |
| **Normal** | Normal ou baixa | Baixa PO₂ inspirada | Altitude, ambiente confinado |
| **Alargado, corrige com O₂** | Variável | V/Q baixo ou difusão | [[Asma]], [[Doença Pulmonar Obstrutiva Crônica (DPOC)\|DPOC]], [[Pneumonia]], doença intersticial |
| **Alargado, NÃO corrige com O₂** | Variável | Shunt verdadeiro | [[Edema Agudo de Pulmão]], consolidação preenchida, atelectasia, shunt anatômico |
| **Alargado com radiografia pobre** | Baixa | Espaço morto | [[Tromboembolismo Pulmonar (TEP)\|TEP]] |

- **Associação Clássica:** gradiente alargado + [[Raio-X de Tórax]] normal ou pouco alterado + [[Dispneia]] súbita = **TEP até prova em contrário**.
- **Acurácia:** o gradiente **não é teste diagnóstico de doença** — é classificador de mecanismo. Especificamente para TEP, um gradiente normal **não exclui** o diagnóstico (a sensibilidade é insuficiente, sobretudo em jovens com êmbolo pequeno), e por isso ele não entra em nenhum algoritmo validado de exclusão como escore de Wells + [[D-dímero]]. Seu valor é fisiológico e de triagem de mecanismo.
- **Onde muda conduta de verdade:** gradiente normal com hipercapnia desvia toda a investigação do parênquima para o **fole** — e desvia o tratamento de "mais oxigênio" para **reverter a causa da hipoventilação** ou **ventilar** (ver [[Insuficiência Respiratória]] e [[Ventilação Não Invasiva (VNI)|VNI]]).

---

## ⚠️ Pitfalls e Falsos

- **Falsos "alargados":**
	- Não corrigir pela idade — 25 mmHg é patológico aos 20 anos e esperado aos 80.
	- Calcular com FiO₂ elevada e comparar com o corte de ar ambiente.
	- Amostra colhida logo após mudança de FiO₂, antes do equilíbrio (aguarde ~20–30 min).
	- Grande altitude sem ajustar a pressão barométrica.
- **Falsos "normais":**
	- **Hipoventilação e doença pulmonar coexistentes** (o caso comum do retentor de CO₂ que aspira): a hipoventilação puxa o gradiente para baixo e mascara o dano parenquimatoso.
	- TEP pequeno em paciente jovem.
- **Erro Comum de Execução:** usar **gasometria venosa** — ela não serve para oxigenação, só para pH e PaCO₂.
- **Armadilha conceitual cobrada em prova:** **distúrbio de difusão CORRIGE** com oxigênio (a FiO₂ alta aumenta o gradiente de pressão que empurra o gás pela membrana). O que **não** corrige é **shunt**.

---

### 🖼️ Imagem / Esquema

![[5 - Sistema/Arquivos/Imagens/gradiente-alveolo-arterial.jpg]]
*TODO: Adicionar esquema do alvéolo com PAO₂ calculada × PaO₂ medida, e as quatro combinações gradiente/PaCO₂ da tabela acima*

**Onde buscar:**
- West JB, *Respiratory Physiology: The Essentials* — capítulo de troca gasosa
- Derangedphysiology.com: "The alveolar-arterial gradient"

---

## 📚 Referências
*Consultado em 2026-09-27*

1. Equação do gás alveolar, correção do valor normal pela idade e a lógica de discriminação entre hipoventilação e doença de troca são **conhecimento consolidado de fisiologia respiratória, sem diretriz de sociedade que os normatize** — não há recomendação formal com ano/versão a citar aqui.
2. **[ERS/ATS 2017]** Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines: noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017;50(2):1602426 — usada para o desfecho prático do gradiente normal com hipercapnia (indicação de VNI com pH ≤ 7,35).
3. **[BTS 2017]** O'Driscoll BR, Howard LS, Earis J, Mak V. BTS guideline for oxygen use in adults in healthcare and emergency settings. BMJ Open Respir Res. 2017;4(1):e000170 — alvos de saturação e obrigação de registrar a FiO₂.

---

### ➕ Novas Anotações / Insights
*- (Espaço livre para updates futuros)*
-

### 🔗 Três armadilhas de mecanismo (e um atalho que não serve em Natal)
**Data:** 2026-11-13
**Contexto:** [[Abordagem da Hipoxemia]] · [[Hipóxia]] · [[Tromboembolismo Pulmonar (TEP)]] — processamento de `Insuficiencia respiratória Aguda - Anotações` (deck da Osler sobre medidas de oxigenação e mecanismos de hipoxemia)

**Características específicas:**
1. ❌ **Card: "a redução da PiO₂ prejudica a difusão ao reduzir o gradiente alvéolo-arterial".** Confunde duas coisas com o mesmo nome. Na altitude cai a **pressão motriz** da difusão (PAO₂ − PO₂ do sangue venoso que chega ao capilar); a **diferença A-a** (PAO₂ − PaO₂) permanece **normal**, porque PAO₂ e PaO₂ caem juntas. É exatamente por isso que a baixa PO₂ inspirada está na linha "gradiente normal" da tabela acima. A própria revisão do Lung India chama o termo de impróprio: o correto seria **diferença** alvéolo-arterial, já que ela não é um gradiente de difusão.
2. ⚠️ **Card: TEP → "área ventilada e mal perfundida → espaço morto" como explicação da hipoxemia. Incompleto.** A unidade de V/Q alto quase não altera a oxigenação; o que derruba a PaO₂ é o sangue **desviado** dela para o pulmão restante, que fica **superperfundido → V/Q baixo**, somado a atelectasia, queda do débito e, às vezes, shunt por forame oval aberto. O espaço morto em si cobra outro preço: mais ventilação-minuto para lavar o CO₂. Por isso a linha "espaço morto — TEP" da tabela acima deve ser lida como **efeito de redistribuição**.
	- **Números que justificam o "gradiente normal não exclui TEP":** numa série, **25%** dos pacientes com TEP sem doença cardiopulmonar prévia tinham **PaO₂ > 80 mmHg**, e **12% de 280** tinham gradiente A-a **< 20 mmHg** (Stein, citado em Sarkar 2017).
3. ❌ **Card: "aumento da extração tecidual → PAO₂ normal e PaO₂ baixa, mesmo com troca alveolar perfeita".** Em pulmão normal, o sangue capilar equilibra com o gás alveolar — há folga no tempo de trânsito (ver [[Hipoxemia]]) — e uma SvO₂ baixa é corrigida na passagem. O sangue venoso pobre só derruba a PaO₂ quando parte dele passa **sem trocar** (shunt, V/Q baixo) e se mistura ao arterial. É um **amplificador** de hipoxemia preexistente, não um mecanismo que funciona sozinho. No choque cardiogênico com congestão pulmonar, o débito baixo piora um shunt que já existia.
- **Atalho do card para São Paulo — "GAA ≈ 130 − (PaO₂ + PaCO₂)" — não use em Natal.** Ele embute a pressão barométrica de ~760 m de altitude e simplifica o quociente respiratório para 1. Ao nível do mar, fique com o desta nota: **PAO₂ ≈ 150 − 1,25 × PaCO₂**. Com PaCO₂ 40 a diferença é pequena; no hipercápnico, cresce.

**Relevância clínica:** as três armadilhas têm a mesma raiz — atribuir hipoxemia a um processo que não mexe na passagem do oxigênio para o sangue que efetivamente troca. Perguntar "onde está o sangue que não está trocando?" resolve as três.
**Fonte:** Sarkar M, Niranjan N, Banyal PK. Mechanisms of hypoxemia. Lung India. 2017;34(1):47-60. PMID 28144061 — https://doi.org/10.4103/0970-2113.197116 (texto integral via PMC: unidade de V/Q alto no TEP, desvio de fluxo para regiões de V/Q baixo, dados de Stein). O papel da SvO₂ baixa como amplificador apenas na presença de shunt: **conhecimento consolidado de fisiologia respiratória, sem diretriz aberta**.

---
