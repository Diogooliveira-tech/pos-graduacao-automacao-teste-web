class Selectors {
    static get nome() {
        return '[data-qa="name"]';
    }

    static get email() {
        return '[data-qa="email"]';
    }

    static get assunto() {
        return '[data-qa="subject"]';
    }

    static get mensagem() {
        return '[data-qa="message"]';
    }

    static get botaoEnviar() {
        return '[data-qa="submit-button"]';
    }

    static get arquivoUpload() {
        return 'input[name="upload_file"]';
    }
}

export default Selectors;