var express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var createError  = require('createerror');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');
var router = express.Router();


var indexRouter = require('./routes/index');
var atencionesRoutes = require('./routes/atencionesRoutes');
var datosDiagnosticoRoutes = require('./routes/datosDiagnosticoRoutes');
var datosAhorroRoutes = require('./routes/datosAhorroRoutes');
var datosFamiliaresRoutes = require('./routes/datosFamiliaresRoutes');
var trabajadoresRoutes = require('./routes/trabajadoresRoutes');
var empresaConvenioRoutes = require('./routes/empresaConvenioRoutes');
var empresaLaboralRoutes = require('./routes/empresaLaboralRoutes');
var etapasProcesoRoutes = require('./routes/etapasProcesoRoutes');
var servicioRoutes = require('./routes/serviciosRoutes');
var regionRoutes = require('./routes/regionRoutes');
var comunaRoutes = require('./routes/comunaRoutes');
var provinciaRoutes =  require('./routes/provinciaRoutes');
var usuarioRoutes = require('./routes/usuarioRoutes');

var app = express();

app.use( cors());
app.use(bodyParser.json());

// MongoDB conection

mongoose.connect('mongodb://localhost:27017/vivienda',{ useNewUrlParser: true });
mongoose.set('useCreateIndex', true)
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Conectado a la Base de Datos localhost:27017/vivienda');
});

app.use( cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');    
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Accept');      
  res.setHeader('Access-Control-Allow-Credentials', true);       
  next();  
}); 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());


app.use('/', indexRouter);
app.use('/atenciones', atencionesRoutes);
app.use('/trabajadores', trabajadoresRoutes);
app.use('/datosahorro', datosAhorroRoutes);
app.use('/datosdiagnostico', datosDiagnosticoRoutes);
app.use('/datosfamiliares', datosFamiliaresRoutes);
app.use('/empresaconvenio', empresaConvenioRoutes);
app.use('/empresalaboral', empresaLaboralRoutes);
app.use('/etapasproceso', etapasProcesoRoutes);
app.use('/servicios', servicioRoutes);
app.use('/region', regionRoutes);
app.use('/comuna', comunaRoutes);
app.use('/provincia', provinciaRoutes);
app.use('/usuario', usuarioRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
app.listen(3000, () => console.log('Express server running on port 3000'));




