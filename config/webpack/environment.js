const { environment } = require('@rails/webpacker')
const { webpack } = require('webpack')

const webpacker = require('webpack')
environment.plugin.append('Provide', new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
}))
module.exports = environment
