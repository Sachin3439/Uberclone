const dotenv=require('dotenv');
const  express=require('express');
const cors=require('cors');
const app=express();
const cookieParser=require('cookie-parser');
const connectDB=require('./db/db');
const userRoutes=require('./routes/user.routes');
const captainRoutes=require('./routes/captain.routes');
const mapRoutes=require('./routes/maps.routes');
const rideroutes=require('./routes/ride.routes');

dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.send("hello world");
});


app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapRoutes);
app.use('/rides', rideroutes);

module.exports=app;