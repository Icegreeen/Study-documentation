// Tratamento de Erro 

// ( Try/Catch/Throw)

function tratarErroELancar(erro) {
    throw new Error('Ocorreu um erro...')
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!') 
    // bloco de código que pode pontencialmente gerar um tipo de error
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { name: 'Roberto'} // aqui forcei um erro colocando o nome do atributo do objeto errado para simular um tratamento de erro.
imprimirNomeGritando(obj)

//---------------------------------------------------------------------------------------------