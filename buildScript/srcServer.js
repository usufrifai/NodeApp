import express from 'express';
import path from 'path';
import open  from'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';


const port = 3000;
const app =  express();
const compiler = webpack(config);



app.use(require('webpack-dev-middleware')(compiler,{
noInfo:false,
publicPath : config.output.publicPath
}));
app.use('/static', express.static('public'));

app.get('/' , function(req ,res){
res.sendFile(path.join(__dirname ,'../public/index.html' ));
})

app.get('/users', function(req, res){
res.json([
{"id":"1" , "firstName":"usuf" ,"lastName":"rismi" ,"email":"rismi.usuf@gmail.com"},
{"id":"2" , "firstName":"fahma" ,"lastName":"awfer" ,"email":"fahma.usuf@gmail.com"},
]);
});

app.listen(port, function(err){
if(err){
  //console.log(err);
}
else{
  open('http://localhost:' + port);
}

})

