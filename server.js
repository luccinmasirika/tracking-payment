const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
const methodOverride = require('method-override');
const moment = require('moment');
const session = require('express-session');
const { config } = require('./src/config/config');
const flash = require('./src/middlewares/flash');

/**
 * ALL ROUTES
 */

const formRouter = require('./src/routes/form');
const pagesRouter = require('./src/routes/pages');
const userRouter = require('./src/routes/user');
const authRouter = require('./src/routes/auth');
const instructionRouter = require('./src/routes/instruction');
const fonctionRouter = require('./src/routes/fonction');
const fonctionnaireRouter = require('./src/routes/fonctionnaire');
const paiementRouter = require('./src/routes/paiement');
const paiementAutreRouter = require('./src/routes/paiementAutre');
const cartographeRouter = require('./src/routes/cartographe');

// PAGES
const adminRouter = require('./src/routes/admin');

/**
 * START EXPRESS APPLICATION
 */
const app = express();

/**
 * SET VIEWS ENGINE EJS
 */
app.set('views', './views');
app.set('view engine', 'ejs');
app.locals.moment = moment;

/**
 * SET STATIC FILES
 */
app.use('/assets', express.static(path.join(__dirname, 'public')));
app.use(
  '/images',
  express.static(path.join(__dirname, 'public/images/upload'))
);

/**
 * CONNECTION WITH MONGODB || MONGOOSE
 */
const option = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(config.database.uri, option)
  .then(() => console.log('Server connected to the database'))
  .catch((err) => console.log(err));

/**
 * APPLICATION MIDLLEWARES
 * */
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(
  session({
    secret: config.secret.signedTokenString,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(flash);

/**
 * APPLICATION ROUTES MIDLLEWARES
 */
app.use(formRouter);
app.use(pagesRouter);
app.use(userRouter);
app.use(authRouter);
app.use(adminRouter);
app.use(cartographeRouter);
app.use(fonctionRouter);
app.use(fonctionnaireRouter);
app.use(instructionRouter);
app.use(paiementRouter);
app.use(paiementAutreRouter);

/**
 * SERVER LISTEN
 */
app.listen(config.server.port, () => {
  console.log(
    `Application listen on port ${config.server.port} and run on ${config.server.host}`
  );
});
