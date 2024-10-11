const SaludoIdiomas = ({ nombre, idioma }) => {
    const traductor = {
        es: 'Hola',
        en: 'Hello',
        fr: 'Bonjour',
        it: 'Ciao',
        de: 'Hallo',
        pt: 'Olá',
        ja: 'Konnichiwa',
        ko: 'Annyeonghaseyo'
    }
    return (
        <h1>{traductor[idioma]} {nombre}</h1>
    )
}

export default SaludoIdiomas