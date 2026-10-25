import { PageFrame, PageFrameProps } from "./types"

/**
 * Moldura do Atlas Clínico: barra superior fixa (nome + busca + botões) e,
 * abaixo, as três colunas padrão do Quartz (navegação, conteúdo, sumário).
 *
 * Os componentes posicionados em `header` no quartz.config.yaml vão para a
 * barra superior; o resto segue igual à moldura "default".
 */
export const AtlasFrame: PageFrame = {
  name: "atlas",
  render({
    componentData,
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    left,
    right,
    footer: Footer,
  }: PageFrameProps) {
    return (
      <>
        <div class="atlas-topbar">
          <div class="atlas-topbar-inner">
            {header.map((HeaderComponent) => (
              <HeaderComponent {...componentData} />
            ))}
          </div>
        </div>
        <div class="left sidebar">
          {left.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        <div class="center">
          <div class="page-header">
            <div class="popover-hint">
              {beforeBody.map((BodyComponent) => (
                <BodyComponent {...componentData} />
              ))}
            </div>
          </div>
          <Content {...componentData} />
          <hr />
          <div class="page-footer">
            {afterBody.map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>
        </div>
        <div class="right sidebar">
          {right.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        <Footer {...componentData} />
      </>
    )
  },
}
