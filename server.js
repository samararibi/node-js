const http= require('http')

const server= http.createServer((req,res)=>{
   
if(req.url=='/home'){
    res.statusCode=200
    res.write('welcome from home')
}
if(req.url=='/contact'){    
    res.statusCode=200
res.write('welcome from contact')
}
if(req.url=='/about'){
    res.statusCode=200
    res.write('welcome from about')
}
else { res.statusCode=200
    res.write('not found')}
res.end()

})
server.listen(5000,()=>{console.log('server running')})