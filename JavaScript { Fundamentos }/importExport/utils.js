//

const estudar = (texto) => { console.log(texto); };

const elogiar = (elogio) => { console.log(elogio); };

// Existem dois tipos de exportação para as funções constantes

// A exportação com uso de default , em geral, é para a função principal, ou única, existente no arquivo (módulo)

export default estudar;

// Mais funções no módulo, usa-se a exportação com uso de chaves {}.
// Declara-se o nome das funções separadas por vírgula; por exemplo: {elogiar , criticar , reclamar}.

export { elogiar }; 