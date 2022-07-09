const express = require('express');
const app = express();

// sino llamamos a esto no nos van a apareces las imagenes ni el stylee
app.use(express.static('public')) // importante que este este al principio


app.get('/', (req, res, next) => { // Es como un if, si hay un get a esta url ejecuta esto y no sigue
    console.log(__dirname)
    res.sendFile(__dirname + '/views/index.html')
})
// res es la respuesta que estamos mandando


// /marco es si ponemos eso nos imprime ese mensaje
app.get('/marco', (req, res, next) => { 
    res.send('Esta chupao')
})

app.use((req, res, next) => { // No depende de una url o un metodo
    res.status(404).sendFile(__dirname + '/views/notFound.html')
}) 

// estamos mandando el status de una pagina a al directorio (donde esta la carpeta en mi compu) y el + view es donde lo encontramos

app.listen(3000, () => { // este va al final siempre
    console.log('Listening on port 3000')
})

// cuando aranque el node para abrir el puerto
