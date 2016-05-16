module.exports = {
    module: {
        name: 'pipCore',
        index: 'core'
    },
    build: {
        js: true,
        ts: true,
        html: false,
        css: false,
        lib: true,
        images: false
    },
    samples: {
        port: 8007,
        publish: {
            bucket: 'webui.pipdevs.com',
            accessKeyId: 'AKIAIEXTTAEEHYPHS3OQ',
            secretAccessKey: 'otMg2vQLZjF4Nkb90j1prtugoUCNm3XqLS/KkHyc',
            region: 'us-west-1'
        }
    }
};