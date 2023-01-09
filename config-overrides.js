const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@constants': 'src/constants',
        '@containers': 'src/containers/',
        '@hoc': 'src/hoc',
        '@styles': 'src/styles',
        '@helpers': 'src/helpers',
        '@utils': 'src/utils',
        '@routes': 'src/routes',
        '@static': 'src/static',
        '@hooks': 'src/hooks'
    })(config)

    return config
}