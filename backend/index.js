aws lambda 1st checking

const users = '/users';
const user = '/user';
const signup = '/signup';
const login = '/login';

exports.handler = async (event) => {
    console.log('Request Event: ', event);
    let response;
    switch(true){
        case event.httpMethod === 'GET' && event.path === users:
            response = buildResponse(200);
            break;
        case event.httpMethod === 'GET' && event.path === user:
            response = buildResponse(200);
            break;
        case event.httpMethod === 'POST' && event.path === signup:
            response = buildResponse(200);
            break;
        case event.httpMethod === 'POST' && event.path === login:
            response = buildResponse(200);
            break;
        default:
            response = buildResponse(404, '404 not found')
    }
    return response;
};

function buildResponse(statusCode, body){
    return {
        statusCode: statusCode,
        headers:{
            'Access-Control-Allow-Origin':'*',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    }
}






















const registerService = require('./service/register');
const loginService = require('./service/login');
const verifyService = require('./service/verify');
const util = require('./utils/util');

const sbsPath = '/sbs';
const registerPath = '/register';
const loginPath = '/login';
const verifyPath = '/verify';


exports.handler = async(event) => {
   console.log('Request Event: ', event);
   let response;
   switch (true) {
        case event.httpMethod === 'GET' && event.path === sbsPath:
           response = util.buildResponse(200);
           break;
        case event.httpMethod === 'POST' && event.path === registerPath:
           const registerBody = JSON.parse(event.body);
           response = await registerService.register(registerBody);
           break;
        case event.httpMethod === 'POST' && event.path === loginPath:
            const loginBody = JSON.parse(event.body);
           response = await loginService.login(loginBody);
           break;
        case event.httpMethod === 'POST' && event.path === verifyPath:
            const verifyBody = JSON.parse(event.body);
           response = verifyService.verify(verifyBody);
           break;
       default:
            response = util.buildResponse(404, '404 Not Found');
   }
   
   return response;
};
