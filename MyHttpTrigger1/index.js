module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger1 function processed a request.');

    context.bindings.outputBlob = context.bindings.req;
}