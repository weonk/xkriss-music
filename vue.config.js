module.exports = {
    devServer: {
        proxy: {
            '/music': {
                target: 'https://api.bzqll.com',
                changeOrigin: true
            }
        }
    } 
}