import Url from "../model/urlModel.js";
import generateCode from "../utils/generateCode.js";

const createUrl = async(req,res) => {
    try {
        const {url} = req.body;
        if(!url){
            return res.status(400).json({
                error:"please enter a URL"
            })
        }
        if((url.startsWith("http://") == false && url.startsWith("https://") == false)){
            return res.status(400).json({
                error:"please enter a valid URL starting with http or https"
            })
        }
        if(url.length > 2048) {
            return res.status(400).json({
                error:"URL is too long"
            })
        }
        const code = generateCode();
        const newUrl = await Url.create({
            originalUrl:url,
            shortCode:code
        })

        return res.status(201).json({
            message:"URL shortend successfully",
            data:{
                originalUrl:newUrl.originalUrl,
                shortCode:newUrl.shortCode
            }
        })

    } catch (error) {
        res.status(500).json({
            error:"server error "
        })
    }
}

const getAllUrl = async(req,res) => {
    try {
        const allUrl = await Url.find();
        return res.status(200).json({
            message:"url fetch successfully",
            data:{
                allUrl
            }
        })
    } catch (error) {
        res.status(500).json({
            error:"Internal server error"
        })
    }
}

const directedUrl = async(req,res) => {
    try {
        const {code} = req.params
        const url = await Url.findOne({ shortCode:code })
        if(!url) {
            return res.status(404).json({error:"URL not found"})
        }
        await Url.findOneAndUpdate({ shortCode:code },{ $inc:{clicks:1} })
        res.redirect(302, url.originalUrl)
    } catch (error) {
        res.status(500).json({ error:"Internal server error" })
    }
}

const deleteUrl = async(req,res) => {
    const {id} = req.params

    const url = await Url.findById(id);
    if(!url){
        return res.status(404).json({
            message:"URL not found"
        })
    }
    await Url.findByIdAndDelete(id);
    return res.status(200).json({
        message:"URL deleted Successfully"
    })

}

export {createUrl,getAllUrl,directedUrl,deleteUrl};