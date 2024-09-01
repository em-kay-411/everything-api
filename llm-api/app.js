const express = require('express');
const app = express();
const apiData = require('./apiData');
const topics = ['NEWS', 'ARITHMETIC', 'STRING'];
const axios = require('axios');
const modelName = 'llmapi:latest'; //Model Name
app.use(express.json());

let response;

const llmApiService = async (req, res) => {
    const prompt = req.body.prompt;

    try{
        // Step 1 : Get the topic - News, Arithmetic Operations and String Manipulation        
        response = await axios.post('http://localhost:11434/api/generate', {
            model : modelName,
            prompt : `Respond to the following user prompt strictly in the form of a valid and complete JSON object. Ensure that the JSON response includes all necessary opening and closing braces {}, square brackets [], quotation marks "", and commas ,. The JSON must be properly formatted and syntactically correct with no missing brackets or other elements. Do not include any additional text, comments, or explanations outside the JSON format. The response should only contain a valid and complete JSON object. To which topic out of ${topics} does the statement given belongs to? The statement - \'${prompt}\'. Return the response as a JSON object only with single attribute named topic.`,
            stream : false
        })
        // console.log(response.data.response.replace('\n', ""));
        console.log(response.data);
        const topic = JSON.parse(response.data.response).topic.toUpperCase();
        console.log(topic);
        
        // Get all the API endpoints
        const relevantAPIs = apiData.filter(element => element.topic === topic);
        const apiEndpoints = relevantAPIs.map(element => element.apiEndpoint);
        const queryParams = relevantAPIs.map(element => element.queryParams);


        // Send the API endpoints with function descriptions
        response = await axios.post('http://localhost:11434/api/generate', {
            model : modelName,
            prompt : `Respond to the following user prompt strictly in the form of a valid and complete JSON object. Ensure that the JSON response includes all necessary opening and closing braces {}, square brackets [], quotation marks "", and commas ,. The JSON must be properly formatted and syntactically correct with no missing brackets or other elements. Do not include any additional text, comments, or explanations outside the JSON format. The response should only contain a valid and complete JSON object. Analyse the statement \'${prompt}\' and find one API endpoint strictly out of the array \'${apiEndpoints}\' that satisfies the user prompt request. The corresponding query parameters for each endpoint are \'${queryParams}\' Send the response in JSON format only consisting of fields, one as endpoint and an array of query parameters as queryParams which correspond to that specific endpoint in the form of an array of objects, where each object consists of the query parameter variable name and its value, with their values populated by identifying from the prompt. Do not include a query parameter for which a value can not be identified (assign it to null). Strictly populate only those query parameters that are directly obtained from the prompt and assign others as null`,
            stream : false
        })

        console.log(JSON.parse(response.data.response));
        const apiEndpointData = JSON.parse(response.data.response);
        const queryParameters = apiEndpointData.queryParams;

        // Construct the endpoint
        let endpointString = '';
        endpointString += apiEndpointData.endpoint + '?';
        const addedQuery = {};
        for(const param of queryParameters){
            if(param !== null && param.value && !addedQuery[param.name]){
                console.log('added', param.name);
                endpointString += `${param.name}=${param.value}&`
            }
        }
        endpointString = endpointString.slice(0, -1);
        console.log(endpointString);

        // Hit onto the endpoint
        response = await axios.get(encodeURI(endpointString));

        res.status(200).send({message : 'success', data : response.data});
    }
    catch (err){
        res.status(500).send({message : err});
    }  
    
}

app.post('/llm', llmApiService);

app.listen(8081, () => {
    console.log('Server started on port 8081');
})