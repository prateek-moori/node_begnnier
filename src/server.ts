import * as http from "http"
import * as fs from "fs/promises"

const server= http.createServer(async (req:any, res)=>{
    console.log(req.url+" "+req.method);
    res.setHeader("Content-type","text/html");
    //send html file
    try {
        let fileread= await fs.readFile("./views/index.html");
        res.write(fileread);
    }
    catch (error:any)
    {
        console.log(error);
    }

   // res.write("<p>Hi</p>");
    res.end();
})

server.listen(3000,'localhost',()=>{
    console.log("listening for request on port 3000");
})

