module.exports = {
    presets: [
        [
            "@babel/env",
            {
                targets: 'last 2 versions, >0.01% in NL and not dead and supports css-variables',
                useBuiltIns: 'usage',
                corejs: '3.16',
                shippedProposals: true,
                bugfixes: true
            }
        ]
    ],
    sourceType: 'unambiguous'
}
