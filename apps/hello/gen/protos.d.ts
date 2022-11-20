import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace helloworld. */
export namespace helloworld {

    /** Represents a Greeter */
    class Greeter extends $protobuf.rpc.Service {

        /**
         * Constructs a new Greeter service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls SayHello.
         * @param request HelloRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and HelloReply
         */
        public sayHello(request: helloworld.IHelloRequest, callback: helloworld.Greeter.SayHelloCallback): void;

        /**
         * Calls SayHello.
         * @param request HelloRequest message or plain object
         * @returns Promise
         */
        public sayHello(request: helloworld.IHelloRequest): Promise<helloworld.HelloReply>;
    }

    namespace Greeter {

        /**
         * Callback as used by {@link helloworld.Greeter#sayHello}.
         * @param error Error, if any
         * @param [response] HelloReply
         */
        type SayHelloCallback = (error: (Error|null), response?: helloworld.HelloReply) => void;
    }

    /** Properties of a HelloRequest. */
    interface IHelloRequest {

        /** HelloRequest name */
        name?: (string|null);
    }

    /** Represents a HelloRequest. */
    class HelloRequest implements IHelloRequest {

        /**
         * Constructs a new HelloRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IHelloRequest);

        /** HelloRequest name. */
        public name: string;

        /**
         * Gets the default type url for HelloRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HelloReply. */
    interface IHelloReply {

        /** HelloReply message */
        message?: (string|null);
    }

    /** Represents a HelloReply. */
    class HelloReply implements IHelloReply {

        /**
         * Constructs a new HelloReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: helloworld.IHelloReply);

        /** HelloReply message. */
        public message: string;

        /**
         * Gets the default type url for HelloReply
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
