const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const Branch=require("./models/branch.js");

const resourceroute=require("./routes/resourceRout.js");
const { uploadToR2 } = require("./r2");

const cors=require("cors");
;


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

app.use("/api/resources", resourceroute);
app.use(cors())

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
