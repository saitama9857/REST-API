const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static(path.resolve(__dirname, 'clieant')))

app.get('*',(req, res)=>{
     res.sendFile(path.resolve(__dirname, 'clieant', 'index.html'));

})
app.listen(PORT, ()=>{
     console.log('server is working 80 ...');
})


