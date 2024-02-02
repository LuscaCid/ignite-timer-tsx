import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

export type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

export type TaskStatusType = 'yellow-500' | 'red-500' | 'green-500'

/**
 * simplesmente eu redeclaro o modulo do styled-components
 * para atribuir a uma interface la dentro que ela vai extender da que eu criei
 * para que minha IDE possua conhecimento dentro do styled-components de qual propriedade
 * vem dentro da prop do theme, e isso eh top
 */
