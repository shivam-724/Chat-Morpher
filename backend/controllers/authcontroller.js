export const signup = async (req,res) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({message: "Password do not match"});
        }

        const user = await User.findOne({username});
        if (user) {
            return res.status(400).json({message: "User already exists"});
        }
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        });
        
    } catch (error) {
        
    }
}
export const login = (req,res) => {
    console.log("Login User");
}
export const logout = (req,res) => {
    console.log("Logout User");
}