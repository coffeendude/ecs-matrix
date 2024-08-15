import express, { Router, static } from 'express';
const app = express();
const router = Router();

const path = __dirname + '/views/';
const port = 8080;

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/sharks', function(req,res){
  res.sendFile(path + 'sharks.html');
});

app.use(static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})