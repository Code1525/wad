const express = require('express') ;

const app = express() ;
const port = 3000 ;

app.use(express.static('public')) ;



app.listen(port, (req,res)=>{
    console.log(`listening on port ${port}`);
})