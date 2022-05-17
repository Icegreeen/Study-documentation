 //
 
 for (let letra of 'Cod3r') {
     console.log(letra) 
 }

 const assuntosEcma = ['Map', 'Set', 'Promise']


 // For in percorre a partir do indice

 for (let i in assuntosEcma) {
     console.log(i)
 }

 // For Of percorre exatamente os valores

 for (let assunto of assuntosEcma) {
     console.log(assunto)
 }

 //============================================================================

 const assuntosMap = new Map([
     ['Map', {abordado: true }],
     ['Set', { abordado: true }],
     ['Promise', {abordado: false }]
 ])


 // Percorrendo Chave e valor:

 for (let assunto of assuntosMap ) {
     console.log(assunto)
 }

 // Percorrendo somente chaves:

 for (let chave of assuntosMap.keys()) {
     console.log(chave)
 }

 // Percorrendo somente valores:

 for (let valor of assuntosMap.values()) {
     console.log(valor)
 }

