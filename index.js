import express from "express";
import pureimage from "pureimage";
import fs from 'fs';
const app=express();
const PORT=process.env.PORT||5432;
app.
all('/login',r=>{
    r.res.send('itmo2021');
})
.get('/makeimage',(req,res)=>{
    const { width ,height  } = req.query;
console.log(req.query);
    // make image
    const img = pureimage.make(width, height);
  
    // get canvas context
    const ctx = img.getContext("2d");
  
    // fill with black
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 100, 100);
     /*encodePNGToStream(bitmap: Bitmap, outstream: Stream): Promise<void>

        Encode the PNG image to output stream */
    pureimage.encodePNGToStream(img, fs.createWriteStream("makeimage.png"))
      .then(() => {
        res.download("makeimage.png");
        console.log("wrote out the makeimage.png png file");
      })
      .catch(e => {
        console.log("there was an error writing");
      });

})
.listen(PORT,()=>console.log(`SERVER is listening on port ${PORT}`))