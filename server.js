require("dotenv").config();
const fastify = require("fastify")({logger : true});

//declare a route
fastify.get("/", function(request, reply){
    reply.send({hello : "world"});
});

const start = async () => {
    try {
        await fastify.listen({port : process.env.PORT});
        fastify.log.info(`server is running at http://localhost:${process.env.PORT}`); //it doesn't concatenates, so, using backticks
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
