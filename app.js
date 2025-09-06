const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const Branch=require("./models/branch.js");

const resourceroute=require("./routes/resourceRout.js");
const exampreproute=require("./routes/examprepRoute.js");
const placementpreproute=require("./routes/placementprepRoute.js");
const registerloginroute=require("./routes/loginin.js");

const cookieParser = require('cookie-parser');



//
const {protect}=require("./middlewares/protectmiddleware.js");

const { uploadToR2 } = require("./r2");

const cors=require("cors");
const Subject=require("./models/subject.js");


dotenv.config();   // loads .env

const app = express();

// connect DB
connectDB();


const PORT = process.env.PORT 

// async function add(str) {
//     await Branch.create({
//         branchName: str
//     });
//     console.log("Branch added successfully!");
// }
// add("IT");y
// add("CSE");
// add("ECE");
// add("EEE");
// add("MECH");
// add("CIVIL");
// add("CSE-AIML");
// add("CSE-CS");
// add("CSE-IOT");
// add("CSE-DS");

// async function deleteAllBranches() {
//     try {
//         await Branch.deleteMany({});
//         console.log("All branches deleted successfully!");
//     } catch (err) {
//         console.error("Error deleting branches:", err);
//     }
// }
// deleteAllBranches();

// async function add(subname,subcode) {
//     await Subject.create({
//         subjectName:subname,
//         subjectCode:subcode,
//     });
//     console.log("Branch added successfully!");
// }
// add("DBMS","9FC04");

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/api/resources", resourceroute);
// app.use("api/examprep",);
app.use("/api/placementprep/", protect,placementpreproute);
app.use("/api/auth/",registerloginroute);

app.use("/api/examprep/" , exampreproute);


app.get("/", async (req, res) => {
  res.send(await Branch.find({}));
    
});

app.get("/upload",async (req,res)=>{
  await uploadToR2("test.txt","This is the file i have created");
  res.send("file is uploaded successfully");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
