import * as userModel from "../models/UserModels.js";


export const fetchuser = async (req, res) => {
    try {
        const user = await userModel.getuser();
        res.status(200).json({success: true, message: user});
    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}



export const Register = async (req, res) => {
    const { firstName,
        lastName,
        dob,
        address,
        course,
        major,
        status,
        email,
        password } = req.body;

    try {
        const userProfile = {firstName,
            lastName,
            dob,
            address,
            course,
            major,
            status};
        const userId = await userModel.createUser(userProfile, email, password);
        res.status(200).json({success: true, message: userId}); 
    } catch (e) {
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"})
    }
}



export const userLogin = async (req, res) => {
    const {email, password } = req.body;
    try {
        const token = await userModel.login(email, password);
        res.status(200).json({success: true, message: token});
    } catch (e) {
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"})
    }
}


