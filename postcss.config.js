module.exports = {
    plugins: [
        require('import-postcss')(),
        require('postcss-normalize')(),
        require('postcss-preset-env')({
            stage: 0
        }),
        require('cssnano')({
            preset: 'default',
        })
    ]
}
