/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const helloworld = $root.helloworld = (() => {

    /**
     * Namespace helloworld.
     * @exports helloworld
     * @namespace
     */
    const helloworld = {};

    helloworld.Greeter = (function() {

        /**
         * Constructs a new Greeter service.
         * @memberof helloworld
         * @classdesc Represents a Greeter
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Greeter(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Greeter.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Greeter;

        /**
         * Callback as used by {@link helloworld.Greeter#sayHello}.
         * @memberof helloworld.Greeter
         * @typedef SayHelloCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {helloworld.HelloReply} [response] HelloReply
         */

        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof helloworld.Greeter
         * @instance
         * @param {helloworld.IHelloRequest} request HelloRequest message or plain object
         * @param {helloworld.Greeter.SayHelloCallback} callback Node-style callback called with the error, if any, and HelloReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Greeter.prototype.sayHello = function sayHello(request, callback) {
            return this.rpcCall(sayHello, $root.helloworld.HelloRequest, $root.helloworld.HelloReply, request, callback);
        }, "name", { value: "SayHello" });

        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof helloworld.Greeter
         * @instance
         * @param {helloworld.IHelloRequest} request HelloRequest message or plain object
         * @returns {Promise<helloworld.HelloReply>} Promise
         * @variation 2
         */

        return Greeter;
    })();

    helloworld.HelloRequest = (function() {

        /**
         * Properties of a HelloRequest.
         * @memberof helloworld
         * @interface IHelloRequest
         * @property {string|null} [name] HelloRequest name
         */

        /**
         * Constructs a new HelloRequest.
         * @memberof helloworld
         * @classdesc Represents a HelloRequest.
         * @implements IHelloRequest
         * @constructor
         * @param {helloworld.IHelloRequest=} [properties] Properties to set
         */
        function HelloRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloRequest name.
         * @member {string} name
         * @memberof helloworld.HelloRequest
         * @instance
         */
        HelloRequest.prototype.name = "";

        /**
         * Gets the default type url for HelloRequest
         * @function getTypeUrl
         * @memberof helloworld.HelloRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HelloRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/helloworld.HelloRequest";
        };

        return HelloRequest;
    })();

    helloworld.HelloReply = (function() {

        /**
         * Properties of a HelloReply.
         * @memberof helloworld
         * @interface IHelloReply
         * @property {string|null} [message] HelloReply message
         */

        /**
         * Constructs a new HelloReply.
         * @memberof helloworld
         * @classdesc Represents a HelloReply.
         * @implements IHelloReply
         * @constructor
         * @param {helloworld.IHelloReply=} [properties] Properties to set
         */
        function HelloReply(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloReply message.
         * @member {string} message
         * @memberof helloworld.HelloReply
         * @instance
         */
        HelloReply.prototype.message = "";

        /**
         * Gets the default type url for HelloReply
         * @function getTypeUrl
         * @memberof helloworld.HelloReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HelloReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/helloworld.HelloReply";
        };

        return HelloReply;
    })();

    return helloworld;
})();

module.exports = $root;
