import * as http from "http"
import * as fs from "fs/promises"

const server= http.createServer(async (req:any, res)=>{
    console.log(req.url+" "+req.method);
    let path:string="./views/";
    switch (req.url){
        case "/":
            path=path+"index.html";
            res.statusCode=200;
            break;
        case "/about":
            path=path+"about.html";
            res.statusCode=200;
            break;
        case "/about.me":
           res.setHeader("Location","/about");
            res.statusCode=301;
            break;
        default:
            path=path+"404.html";
            res.statusCode=404;
    }
    res.setHeader("Content-type","text/html");
    //send html file
    try {
        let fileread= await fs.readFile(path);
        res.write(fileread);
    }
    catch (error:any)
    {
        console.log(error);
    }

    res.end();
})

server.listen(3000,'localhost',()=>{
    console.log("listening for request on port 3000");
})

