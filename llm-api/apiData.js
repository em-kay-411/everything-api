const apiData = [
    {
        apiEndpoint : 'http://localhost:8080/news/top-headlines',
        topic : 'NEWS',
        function : 'Get top headlines with query parameters as country, category and \'q\' which means any query string',
        queryParams : ['country', 'category']
    },
    {
        apiEndpoint : 'http://localhost:8080/news/everything',
        topic : 'NEWS',
        function : 'Get all the available articles worldwide articles for query parameters as apiKey, q as any query, language, sources, and from a certain date to a certain date',
        queryParams : ['sources', 'language']
    },
    {
        apiEndpoint : 'http://localhost:8080/arithmetic-operations/addition',
        topic : 'ARITHMETIC',
        function : 'Add two numbers in the query paramaeters',
        queryParams : ['a', 'b']
    },
    {
        apiEndpoint : 'http://localhost:8080/arithmetic-operations/subtraction',
        topic : 'ARITHMETIC',
        function : 'Subtract two numbers in the query paramaeters',
        queryParams : ['a', 'b']
    },
    {
        apiEndpoint : 'http://localhost:8080/arithmetic-operations/multiplication',
        topic : 'ARITHMETIC',
        function : 'Multiply two numbers in the query paramaeters',
        queryParams : ['a', 'b']
    },
    {
        apiEndpoint : 'http://localhost:8080/arithmetic-operations/division',
        topic : 'ARITHMETIC',
        function : 'Divide two numbers in the query paramaeters',
        queryParams : ['a', 'b']
    },
    {
        apiEndpoint : 'http://localhost:8080/string-manipulation/check-palindrome',
        topic : 'STRING',
        function : 'Check if the string in the query parameters is a palindrome',
        queryParams : ['string']
    },
    {
        apiEndpoint : 'http://localhost:8080/string-manipulation/lowercase',
        topic : 'STRING',
        function : 'Convert the entire string in query parameters to lowercase',
        queryParams : ['string']
    },
    {
        apiEndpoint : 'http://localhost:8080/string-manipulation/uppercase',
        topic : 'STRING',
        function : 'Conver the entire string in query parameters to uppercase',
        queryParams : ['string']
    }
]

module.exports = apiData;