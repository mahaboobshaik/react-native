const variables = {
    development: {
        googleApiKey: 'AIzaSyB1JegOZ1SJhd2_wqHmPugLaeWtOkwIML0'
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