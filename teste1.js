const alunos = [
    {
        nome: 'Ana',
        nota: 5,
        turma: '1b',
    },
    {
        nome: 'Meire',
        nota: 10,
        turma: '1b',
    },
    {
        nome: 'Cza',
        nota: 6,
        turma: '2c',
    },
    {
        nome: 'Doug',
        nota: 4,
        turma: '1b',
    },
    {
        nome: 'Bruno',
        nota: 2,
        turma: '2c',
    },
];
function alunosAprovados(arr, media) {
    let aprovados = [];
    for (let i = 0; i < arr.length; i++) {
        const {nota, nome} = arr[i];
        if (nota >= media) {
            aprovados.push(nome);
        }      
    }
    return aprovados;
}
console.log(alunosAprovados(alunos, 5))