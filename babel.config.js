module.exports = {
    presets: [
        [
            "@babel/env",
            {
                targets: 'last 2 versions, not dead and >0.2% in NL and supports css-variables',
                useBuiltIns: 'usage',
                corejs: '3.16',
                shippedProposals: true
            }
        ]
    ]
}
