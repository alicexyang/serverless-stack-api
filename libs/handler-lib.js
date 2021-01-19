export default function handler(lambda) {
  return async function(event, context) {
    let body, statusCode;

    try {
      // Run the Lambda
      body = await lambda(event, context);
      console.log("body " + JSON.stringify(body));
      statusCode = 200;
    } catch (e) {
      console.log(e);
      body = { error: e.message };
      statusCode = 500;
    }

    // Return HTTP response
    return {
      statusCode,
      body: JSON.stringify(body)
    };
  };
}
