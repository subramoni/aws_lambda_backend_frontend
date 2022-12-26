
function buildResponse(statusCode, body){
    console.log(statusCode);
    return {
        statusCode : statusCode,
        headers : {
            'Access-Control-Allow-Origin' : '*',
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(body)
    }
}

module.exports.buildResponse = buildResponse;