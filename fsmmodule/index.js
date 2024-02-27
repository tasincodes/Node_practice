 var fsm = require("fs")//file system module import
 var http = require("http")//http module import
const { escape } = require("querystring")

 var server = http.createServer(function(req,res){

    if(req.url="/"){
        // fs read file asynchronous

        // fsm.readFile('home.html',function(error,data){
        //     // res.writeHead(200,{'content-type':'text/html'})
        //     // res.write(data)
        //     // res.end()
        // })

        // ||fs read file synchronous
        
        // let rdfilsyn = fsm.readFileSync('home.html')
        // res.writeHead(200,{'content-type':'text/html'})//getting error for this line
        // res.write(rdfilsyn)
        // res.end()

    //|| fs write file Asynchronous    

    //     fsm.writeFile('demo.txt','hello world',function(error){
    //         if (error){
    //             res.writeHead(200,{'content-type':'text/html'})
    //             res.write("error occured while writtiin")
    //             res.end()
    //         }
    //         else{
    //             res.writeHead(200,{'content-type':'text/html'})
    //             res.write("file write successful")
    //             res.end()
    //         }

    //     }
    // )

    //|| fs write file synchronous
    // let error= fsm.writeFileSync('demosyn.txt','welcome to file syn')
    // if (error){
    //                 res.writeHead(200,{'content-type':'text/html'})
    //                 res.write("error occured while writtiin")
    //                 res.end()
    //             }
    // else{
    //                 res.writeHead(200,{'content-type':'text/html'})
    //                 res.write("file write successful")
    //                 res.end()
    //             }

    // File Rename Async

    // fsm.rename('demo.txt','demonew.txt',function(error){
    //     if(error){
    //         res.writeHead(200,{'content-type':'text/html'})
    //         res.write("error occured while renaming")
    //         res.end()
    //     }
    //     else{
    //         res.writeHead(200,{'content-type':'text/html'})
    //         res.write("file renaming success")
    //         res.end()

    //     }
    // })
    
    //fs rename file synchronous
    // let error= fsm.renameSync('demonew.txt','demon.txt')
    // if (error){
    //                 res.writeHead(200,{'content-type':'text/html'})
    //                 res.write("error occured while renaming")
    //                 res.end()
    //             }
    // else{
    //                 res.writeHead(200,{'content-type':'text/html'})
    //                 res.write("file rename successful")
    //                 res.end()
    //             }
    
    // File delete Async

    // fsm.unlink('demon.txt',function(error){
    //     if(error){
    //         res.writeHead(200,{'content-type':'text/html'})
    //         res.write("error occured while deleting")
    //         res.end()
    //     }
    //     else{
    //         res.writeHead(200,{'content-type':'text/html'})
    //         res.write("file delete success")
    //         res.end()

    //     }
    // })
    // || file delete synch
//    let error =  fsm.unlinkSync('demosyn.txt')
//        if(error){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write("error occured while deleting")
//         res.end()
        
//        }
//        else{
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write("file delete success")
//         res.end()

//        }

//   let result = fsm.existsSync('home.html')
//   if(result){
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write("true")
//     res.end()
//   } 
//   else{
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write("false")
//     res.end()

//   }

fsm.access('homea.html',function(result){
    if(result){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("true")
        res.end()
         
    }
    else{
        res.writeHead(200,{'content-type':'text/html'})
        res.write("false")
        res.end()

    }
})


}

 })
 server.listen(5050)
 console.log("server running successful")