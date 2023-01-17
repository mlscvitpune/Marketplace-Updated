import jwt from 'jsonwebtoken';

const authMiddleware=async (req,res)=>{
    const authHeader=req.headers['authorization'];
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(401).json({error:"Header not provided!"});
        return;
    }
    const token=authHeader.split(' ')[1];
    try{
        const decoded=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        const user = decoded;
        return res.status(200).json({message:"Authorized", user: user});
    }catch(err){
        res.status(401).json({message:"Not authorized to access this route"});
        return;
    }
}

export default authMiddleware;