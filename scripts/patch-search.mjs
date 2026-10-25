// Ajuste de desempenho da busca do Quartz (plugin @quartz-community/search).
// Roda depois de `npx quartz plugin install` e altera o arquivo já compilado do plugin.
//
// O que muda:
//  1. A janela de busca é ativada na hora; o índice é montado em segundo plano
//     (quando o navegador estiver ocioso) e, se a pessoa digitar antes, a busca espera por ele.
//  2. O texto das notas é indexado por palavra inteira ("strict"); os títulos continuam
//     aceitando busca pelo começo da palavra ("forward"). Isso reduz muito o tempo e a
//     memória gastos para montar o índice em computadores lentos.
//
// Se o plugin for atualizado e algum trecho não for encontrado, o script avisa e não
// altera nada daquele trecho: o site continua publicando, só sem o ajuste.

import fs from "node:fs"
import path from "node:path"

const file = path.join(".quartz", "plugins", "search", "dist", "components", "index.js")

if (!fs.existsSync(file)) {
  console.warn(`[patch-search] Arquivo não encontrado: ${file} — nada foi alterado.`)
  process.exit(0)
}

const MARKER = "/*orca-search-leve*/"
let src = fs.readFileSync(file, "utf8")

if (src.includes(MARKER)) {
  console.log("[patch-search] Ajuste já aplicado.")
  process.exit(0)
}

const patches = [
  {
    name: "índice montado uma única vez, mesmo com chamadas simultâneas",
    from: "async function Ti(){Rt||(Z=await bi(),await ki(),Rt=!0)}",
    to: `${MARKER}var Tp=null;function Ti(){return Tp||(Tp=(async()=>{Rt||(Z=await bi(),await ki(),Rt=!0)})())}`,
  },
  {
    name: "janela de busca ativada antes do índice",
    from: "async function Mn(){Ai(),await Ti(),await wi(),Li()}",
    to: "async function Mn(){Ai(),await wi(),Li();(window.requestIdleCallback||(f=>setTimeout(f,1500)))(()=>{Ti()})}",
  },
  {
    name: "busca aguarda o índice se a pessoa digitar antes dele ficar pronto",
    from: "let K;S.query?K=await le.searchAsync(",
    to: "let K;await Ti();S.query?K=await le.searchAsync(",
  },
  {
    name: "texto das notas indexado por palavra inteira",
    from: '{field:"content",tokenize:"forward"}',
    to: '{field:"content",tokenize:"strict"}',
  },
]

let applied = 0
for (const p of patches) {
  const count = src.split(p.from).length - 1
  if (count !== 1) {
    console.warn(`[patch-search] Trecho não encontrado (${count}x): ${p.name} — pulado.`)
    continue
  }
  src = src.replace(p.from, p.to)
  applied++
  console.log(`[patch-search] OK: ${p.name}`)
}

if (applied === 0) {
  console.warn("[patch-search] Nenhum ajuste aplicado (o plugin pode ter sido atualizado).")
  process.exit(0)
}

fs.writeFileSync(file, src)
console.log(`[patch-search] ${applied}/${patches.length} ajustes aplicados.`)
