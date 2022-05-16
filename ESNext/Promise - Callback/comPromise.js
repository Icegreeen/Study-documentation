
// Com promise

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

let nomes = []



Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
    .then(turmas => [].concat(...turmas)) // concatenando tudo em uma array só
    .then(alunos => alunos.map(aluno => aluno.nome)) // pegando a lista e depois apenas os nomes dos alunos
    .then(nomes => console.log(nomes))

    .catch(e => console.log(e.message)) // sempre trate o reject quando se usa promise
 

getTurma('D').catch(e => console.log(e.message))