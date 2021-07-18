const Image  = require('../model/image-scema.js');

class IMAGE {

    getImage = async(request,response) => {
        console.log('get image is runniing')
        try{
            let images= await Image.find();
            response.json(images)
        }catch(error){
            response.json(
                {message:error.message}
                );
        }
    }  

    getImageByID = async(request,response) => {
        try{
            let image = await Image.findById(request.params.id)
            response.status(200).json(image)
        } catch(error){
            response.json(
                {message:error.message}
            )
        }
    }
    

    addImage = async(request,response) => {
        console.log('add image runnnig')
        console.log(request.body)
        const image = request.body;
        const newImage = new Image(image);
        try {
            await newImage.save();
            response.status(201).json(newImage)
            
        }catch(error){
            response.json(
            {message:error.message}
            );
        
        }
    }
    
}
/* 
const getImage = (request,response) => {
    response.send('there are images')
    console.log('getImage running');
}

const addImage = async(request,response) => {
    console.log('add image runnnig')
    const image = request.body;
    const newImage = new Image(image);

    try {
        await newImage.save();
        response.json(newImage)
        
    }catch(error){
        response.json(
        {message:error.message}
        );
    
    }
} */

module.exports = IMAGE;