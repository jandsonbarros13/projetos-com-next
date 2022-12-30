module.exports = {
    trailingSlash: true,
    async redirecs() {
        return [
            {
                source: '/perguntas',
                destination: '/faq/',
                permanent: true,
            },
        ]
    },
}