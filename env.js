const variables = {
    development: {
        googleApiKey: ''
    },
    production: {
        googleApiKey: ''
    }
};
 
const getEnvVariables = () => {
    if (__DEV__) {
        return variables.development; 
    }
    return variables.production; 
};
 
export default getEnvVariables; 