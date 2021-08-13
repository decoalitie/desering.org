module.exports = {
    presets: [
        [
            "@babel/env",
            {
                targets: 'last 2 versions, >0.05% in NL, last 7 ios_saf version and not dead and supports css-variables',
                useBuiltIns: 'usage',
                corejs: '3.16',
                shippedProposals: true
            }
        ]
    ]
}
