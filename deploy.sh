#!/bin/bash
set -e
VAULT="/Users/albertfilho/Library/Mobile Documents/iCloud~md~obsidian/Documents/Medicina"
echo "🧹 Limpando conteúdo antigo..."
rm -rf "content/1 - Atlas Clínico" "content/3 - Fonte e Estudo"
echo "📋 Copiando notas frescas do vault..."
cp -R "$VAULT/1 - Atlas Clínico" content/
# "3 - Fonte e Estudo" (aulas, anotações Osler, transcrições) não é publicado no site.
echo "🚀 Publicando no GitHub..."
git add .
git commit -m "Atualiza notas $(date '+%Y-%m-%d %H:%M')" || echo "Nada novo para publicar."
git push
echo "✅ Pronto! O site vai atualizar em 2-4 minutos."
