'use strict'

module.exports = (Mozaik, configFile, config) => {
    Mozaik.registerApi('json', require('ext-loki-stats/es/client'))
}
