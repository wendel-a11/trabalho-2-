
// Função para pesquisar alunos
function pesquisarAluno() {

    // Captura o texto digitado
    let campo = document.getElementById("campoPesquisa");

    let pesquisa = campo.value.toLowerCase().trim();

    // Captura as linhas da tabela
    let tabela = document.getElementById("tabelaAlunos");

    let linhas = tabela.getElementsByTagName("tr");

    let encontrados = 0;

    // Percorre os alunos cadastrados
    for (let i = 0; i < linhas.length; i++) {

        let nome = linhas[i].getElementsByTagName("td")[0];
        let cpf = linhas[i].getElementsByTagName("td")[1];

        if (nome && cpf) {

            let textoNome = nome.textContent.toLowerCase();
            let textoCpf = cpf.textContent.toLowerCase();

            if (
                textoNome.includes(pesquisa) ||
                textoCpf.includes(pesquisa)
            ) {
                linhas[i].style.display = "";
                encontrados++;
            } else {
                linhas[i].style.display = "none";
            }
        }
    }

    // Exibe mensagem quando não encontrar alunos
    let mensagem = document.getElementById("mensagemPesquisa");

    if (encontrados === 0) {
        mensagem.textContent = "Nenhum aluno encontrado.";
    } else {
        mensagem.textContent = encontrados + " aluno(s) encontrado(s).";
    }
}
