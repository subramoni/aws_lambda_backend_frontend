const jwt = require('jsonwebtoken');

function generateToken(userInformation){
    if(!userInformation){
        return null;
    }

        user = {
        username: userInformation.username,
        name: userInformation.name
    };

    return jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: '1h'
    } )
}
function verifyToken(username,token){
      
    return jwt.verify(token, process.env.JWT_SECRET, (error, response) => {
        if(error){
            return{
                verified: false,
                message: 'invalid token',
            }
        }
        if(response.username === username){
            return {
                
                message : 'verified',
                verified_username : true
            }
        }
        return{
            
            message: 'invaild user',
            verified_username : false
        }
    })
}

module.exports.generateToken = generateToken;
module.exports.verifyToken = verifyToken;