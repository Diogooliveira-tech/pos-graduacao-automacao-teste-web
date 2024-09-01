https://devfinance-agilizei.netlify.app/

# CSS Selectors

- Tag: `table` (Tags são do html: main, header, section, h2, a, table... Algumas tags tem abertura e fechamento e algumas somente abertura).

- ID: `#balance` posso ser mais assertivo usando o nome da minha tag + o ID(section#balance, section#transaction ou apenas #transaction)

- Classe: `.button.new` (para classes, sempre precisamos usar o ponto . para fazer o mapeamento ".modal-overlay")

- Atributo: `[onclick="Modal.open()"]` se tiver id que tem espaço.
             -[id=balance] (sempre vou abrir e fechar colchetes "[]",[nome-Do-Atributo=valor-do-atributo] . por exemplo: [id=balance], [onclick="Modal.open()"] . Obs.: Se na hora de mapear, tiver caracteres especial, preciso passar ele dentro de aspas "" o valor do atributo. Nome do atributo = onclick="valor-atributo" que é "Modal.open()". Ele completo fica Assim: [onclick="Modal.open()"])

## Coringas

- `^` inicia com valor: `[onclick^="Modal.o"]` 
- `$` termina com valor: `[onclick$="open()"]`
- `*` contém o valor: `[id*=cadastrar]` (Se tiver uma aplicação que tem Id dinaminco, posso usar o * contem o valor, nesse caso cadastrar. Ou qualquer um dos outros coringas para localizar)

    ## Botões

    - `16273362-cadastrar-hdayjdsh`
    - `73812939-cadastrar-heuwajss`
    - `38219382-cadastrar-ayujdksi`

    ### Seletores de ID

    - `[id^=cadastrar]` -> inicia com valor
    - `[id$=cadastrar]` -> termina com valor
    - `[id*=cadastrar]` -> contém o valor

## Dedicados à testes

- `[test-id="tst-login-button"]` (exemplo: https://front.serverest.dev/login)


# XPath Selectors

- `//` - nós de um documento
- `*` - tudo ou 
- `//*` - pega todos os nós
- `[@nome_atributo="valor_atributo"]` - sintaxe para atributos
- `//*[@id="balance"]` - como ler: eu tenho o meu "//" nó e quero mapear todos "*" ou qualquer elemento que tenha o atributo @id="balance"
- `/html/body/main/section[2]` - caminho absoluto (menos recomendada)

### Exemplo de XPath Funções:

- `//*[text() = "Transações"]` - procura um texto exato
- `//*[contains(text(), "Saídas")]` - procura um elemento que contenha parte de um texto (Procura em todos os nós, algum nó que contenha o texto "Saídas" )
- `//*[contains(text(), "Nova")][1]` - selecionar um item dentro de uma lista, onde passo o numero da posição.


O ideal para padronizar o nomes dos elementos é colocar o tipo do elemento abreviado e a sua ação. Por exemplo (btn-cancel, modal-confirmation...)