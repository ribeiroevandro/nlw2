const proffys = [
    { 
        name:"Diego Fernandes",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4 ",
        whatssap:"21980321607",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject:"Química",
        cost:"20",
        weekday:[0],
        time_from:[720],
        time_to:[1220]
     },
     { 
        name:"Daniele Evangelista",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4 ",
        whatssap:"21980321607",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject:"Química",
        cost:"20",
        weekday:[0],
        time_from:[720],
        time_to:[1220]
     } ,
     { 
        name:"Muhammad Ali",
        avatar:"https://upload.wikimedia.org/wikipedia/commons/8/89/Muhammad_Ali_NYWTS.jpg",
        whatssap:"21980321607",
        bio:"foi um desportista pugilista estadunidense. É considerado um dos melhores da história do esporte, eleito 'O Desportista do Século' pela revista estadunidense Sports Illustrated em 1999.",
        subject:"Artes",
        cost:"20",
        weekday:[0],
        time_from:[720],
        time_to:[1220]
     } 
]

console.log(proffys)


const subjects = [
"Artes",
"Biologia",
"Ciências",
"Educação Física",
"Física",
"Geografia",
"História",
"Matemática",
"Português",
"Química",
]


const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubjects(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}



function pageLanding (req, res) {
    return res.render("index.html")
}   

function pageStudy (req, res) {
    const filters = req.query

    return res.render("study.html" ,{proffys, filters, subjects, weekdays})
}

function pageGiveClasses (req, res) {
    const data = req.query




    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {

        data.subject = getSubjects(data.subject)

// adicionar objetos a coleção ou a lista de proffys
    proffys.push(data)

    return res.redirect("/study")

}

return res.render("give-classes.html" ,{subjects, weekdays})

}
const express = require ('express')
const server = express()


//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
// configurar arquicos estáticos (CSS, scriptsm imagens)
server.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get ("/study", pageStudy)
.get ("/give-classes", pageGiveClasses)
.listen(5500)

console.log(__dirname)