# Correção da abertura e vídeo flutuante — Gomes Studio

## Objetivo
Corrigir a estabilidade da headline no primeiro carregamento e transformar o vídeo existente em um card flutuante premium integrado à área inicial, preservando textos, identidade, navegação e demais seções.

## Alterações
- Estabilizar as métricas da tipografia antes da exibição da headline para impedir desalinhamento durante o carregamento inicial.
- Reintegrar o vídeo após o CTA na área inicial, mantendo a ordem visual: headline, subheadline, CTA e vídeo.
- Remover a dobra separada atualmente dedicada ao vídeo, sem alterar nenhuma outra seção.
- Usar o vídeo existente em autoplay silencioso, loop e reprodução inline, com imagem de capa e fonte alternativa para compatibilidade.
- Criar um card cinematográfico escuro com borda clara sutil, sombra profunda, glow discreto, leve profundidade e cantos contidos.
- Aplicar flutuação vertical lenta, entrada suave ao aparecer e interação mínima no desktop; respeitar preferência por movimento reduzido.
- Manter o card forte e levemente assimétrico no desktop, proporcional no tablet e abaixo do CTA, sem deslocamento excessivo, no celular.
- Corrigir a reprodução em tela cheia usando uma interação própria: ao abrir, o vídeo será exibido em uma camada responsiva sobre a página e continuará reproduzindo em desktop e mobile.

## Validação
- Conferir o primeiro carregamento e a recarga em desktop e celular para garantir headline estável.
- Conferir autoplay silencioso, loop, abertura e reprodução em tela cheia nos dois tamanhos.
- Verificar alinhamento, hierarquia, ausência de cortes e rolagem horizontal.
- Confirmar que textos, CTA, menu e seções restantes permanecem inalterados e sem erros.

## Detalhes técnicos
- Ajustes focados em `Hero.tsx`, `styles.css` e no carregamento da fonte existente.
- O modo ampliado usará a própria interface do site, evitando inconsistências do controle nativo de tela cheia entre navegadores móveis e desktop.
