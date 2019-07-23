import { ThemeManager } from '@mozaik/ui'

import {
    miniTheme,
    miniKuroTheme,
    nightBlueTheme,
    snowTheme,
    solarizedDarkTheme,
    wineTheme,
} from '@mozaik/themes'

import lokiTheme from './loki-theme'

ThemeManager.add(lokiTheme)
ThemeManager.add(miniTheme)
ThemeManager.add(miniKuroTheme)
ThemeManager.add(nightBlueTheme)
ThemeManager.add(snowTheme)
ThemeManager.add(solarizedDarkTheme)
ThemeManager.add(wineTheme)

ThemeManager.defaultTheme = lokiTheme.name
