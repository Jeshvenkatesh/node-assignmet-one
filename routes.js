const fs = require('fs');

const requesthandler = (req,res) =>{
   if(req.url === '/'){
       res.write("<html>")
       res.write("<body>")
       res.write("<h1>Hello Please enter the username</h1>")
       res.write('<form action="/create-user" method="POST"><input type="text" name="username"/><button type="submit">submit</button></form>');
       res.write("</body>")
       res.write("</html>")
      return res.end();
   }
   if(req.url ==="/create-user" && req.method ==="POST"){
       const body = [];
       req.on('data',(chunk)=>{
           body.push(chunk);
       });
        return req.on('end',()=>{
           const parseBody = Buffer.concat(body).toString();
           const message = parseBody.split('=')[1];
           console.log(message);
           res.statusCode = 302;
            res.setHeader('Location', '/users');
            return res.end();
         });
   }

   if(req.url === '/users'){

    res.write("<html>")
    res.write("<body>")
    res.write("<h1>User list</h1>")
    res.write("<ul><li>User one</li><li>User two</li><li>User three</li></ul>");
    res.write("</body>")
    res.write("</html>")
        return res.end();
   }
}

module.exports = requesthandler;