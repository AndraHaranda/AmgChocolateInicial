const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./src/routes');

app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://andra:123456@cluster0-ntyvb.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use.express.json();
app.use(cors());


const data = [];

app.get('/', (req, res) => {
    return res.json({ data });
  });

  app.post('/add', (req, res) => {
    const result = req.body;
    
    if (!result) {
        return res.status(400).end();
      }
    
      data.push(result);
      return res.json({ result });
    });
    

app.listen(3000)