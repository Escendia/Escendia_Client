var config : any = {};

//config.AXIOS_URL = "https://api.escendia.com/";
config.AXIOS_URL = "http://192.168.0.28:5000/";

//config.WEBSITE_URL = "https://escendia.com/";
config.WEBSITE_URL = "https://localhost:5000/";

/* 
    "http-equiv": "Content-Security-Policy",
    content: "upgrade-insecure-requests",
    "Access-Control-Allow-Origin": "*",
*/
config.AXION_HEADER = {
  header: {
    "Content-Type": "application/json",
  },
};

config.AXION_ROUTE_DATA = config.AXIOS_URL + "api/data";
config.AXION_ROUTE_DATA_NUMBER = config.AXION_ROUTE_DATA + "/number";
config.AXION_ROUTE_DATA_PLACES = config.AXION_ROUTE_DATA + "/places?";
config.AXION_ROUTE_DATA_COMMITS = config.AXION_ROUTE_DATA + "/commits";

config.AXION_ROUTE_AUTH = config.AXIOS_URL + "api/auth";
config.AXION_ROUTE_AUTH_LOGIN = config.AXION_ROUTE_AUTH + "/login";
config.AXION_ROUTE_AUTH_TOKEN = config.AXION_ROUTE_AUTH + "/token";

config.AXION_ROUTE_AUTH_REGISTER = config.AXION_ROUTE_AUTH + "/register";
config.AXION_ROUTE_AUTH_PASSWORDRESET =
  config.AXION_ROUTE_AUTH + "/passwordreset";
config.AXION_ROUTE_AUTH_FORGOTPASSWORD =
  config.AXION_ROUTE_AUTH + "/forgotpassword";

module.exports = config;
