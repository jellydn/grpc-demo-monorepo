import { ProtoClient, ProtoRequest, RequestOptions, StreamWriterSandbox, StreamReader } from "proto-client";
import protos from "./protos";

/**
 * Configured protoClient used for client shortcuts
 */
export const protoClient: ProtoClient;

/** Namespace helloworld */
export namespace helloworld {

	namespace Greeter {
		/**
		 * Unary Request to helloworld.Greeter.SayHello
		 */
		function SayHello(): Promise<ProtoRequest<protos.helloworld.IHelloRequest, protos.helloworld.IHelloReply>>
		/**
		 * Unary Request to helloworld.Greeter.SayHello
		 * @param data Data to be sent as part of the request
		 */
		function SayHello(data: protos.helloworld.IHelloRequest): Promise<ProtoRequest<protos.helloworld.IHelloRequest, protos.helloworld.IHelloReply>>
		/**
		 * Unary Request to helloworld.Greeter.SayHello
		 * @param data Data to be sent as part of the request. Defaults to empty object
		 * @param abortController Abort controller for canceling the active request
		 */
		function SayHello(data: protos.helloworld.IHelloRequest | null, abortController: AbortController): Promise<ProtoRequest<protos.helloworld.IHelloRequest, protos.helloworld.IHelloReply>>
		/**
		 * Unary Request to helloworld.Greeter.SayHello
		 * @param data Data to be sent as part of the request. Defaults to empty object
		 * @param requestOptions Request options for this specific request
		 */
		function SayHello(data: protos.helloworld.IHelloRequest | null, requestOptions: RequestOptions): Promise<ProtoRequest<protos.helloworld.IHelloRequest, protos.helloworld.IHelloReply>>
	}
}