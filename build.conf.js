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
            accessKeyId: 'AKIAJCEXE5ML6CKW4I2Q',
            secretAccessKey: 'Mtqe9QlWWgRZvS8AXaZqJXaG98BR3qq8gbJqeEk+',
            region: 'us-west-1'
        },
    }
};