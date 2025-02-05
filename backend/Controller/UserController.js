import User from "../Model/UserModel";


export const login = async (req, res) => {
    try {
  
      let { email, password} = req.body;
  console.log(email);
  
      const user = await User.findOne({
        $and: [{ email }, { password}],
      });
  
      if (!user) {
  
        res.status(400).json({ errmsg: "Password and email is incorrect" });
      } else if (user.isBlocked) {
  
        res.status(403).json({ errmsg: "Account is blocked by admin" });
      } else if (user && reMail) {
  
        sendVerifyMail(user.name, user.email, user._id);
      } else if (!user.isVerified) {
  
        res.status(401).json({ errmsg: "Verify your mail" });
      } else {
  
        const token = generateToken(user._id, 'user')
        res.status(200).json({
          message: "user successfully login",
          name: user.name,
          userId: user._id,
          token,
          role: 'user'
        });
      }
    } catch (error) {
      res.status(500).json({ errmsg: "server error" });
      console.log(error)
    }
  };