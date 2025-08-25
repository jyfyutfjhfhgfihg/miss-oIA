const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual o principal sonho do Luffy?",
        alternativas: [
            "Se tornar o Rei dos Piratas",
            "Morar em uma ilha deserta"
        ]
    },
    {
        enunciado: "Qual a habilidade principal do Luffy?",
        alternativas: [
            "Controlar o fogo",
            "Deixar o corpo elástico"
        ]
    },
    {
        enunciado: "Quem é o espadachim do bando?",
        alternativas: [
            "Um pirata com três espadas",
            "Um ninja invisível"
        ]
    },
    {
        enunciado: "Qual o nome do navio do grupo?",
        alternativas: [
            "Um navio de madeira comum",
            "O Going Merry"
        ]
    },
    {
        enunciado: "Onde o tesouro One Piece está escondido?",
        alternativas: [
            "No mar de Grand Line",
            "Em uma ilha do céu"
        ]
    }
];

let atual = 0;
let PerguntaAtual; 

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = PerguntaAtual.enunciado;
}

mostraPergunta();