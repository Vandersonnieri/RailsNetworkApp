const { environment } = require('@rails/webpacker')

//after stalling jquery and bootstrap with yarn, include it in envir.
//bootstap custom javascript lib
const webpack = require('webpack') 
environment.plugins.prepend('Provide',
    new webpack.ProvidePlugin({
        $: 'jquery/src/jquery',
        jQuery: 'jquery/src/jquery'
    })
)

module.exports = environment
