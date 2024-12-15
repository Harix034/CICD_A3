module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');

    // Construct the response
    context.res = {
        status: 200, // HTTP status code
        body: "Hello, World! This is my Azure Function."
    };
};
