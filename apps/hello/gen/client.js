const { ProtoClient } = require("proto-client");

/**
 * Configured protoClient used for client shortcuts
 */
const protoClient = module.exports.protoClient = new ProtoClient({
  protoSettings: {
    files: __dirname + "/raw-protos.json",
    parseOptions: {
      keepCase: false,
    },
    conversionOptions: {
      longs: undefined,
    },
  }
});

module.exports.helloworld = {

	Greeter: {
		/**
		 * Unary Request to helloworld.Greeter.SayHello
		 * @param data Data to be sent as part of the request
		 * @param requestOptions Optional AbortController or request options for this specific request
		 */
		SayHello: async (data, requestOptions) =>
			protoClient.makeUnaryRequest("helloworld.Greeter.SayHello", data, requestOptions),
	},
};