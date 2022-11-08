import { diary, enable, info, warn, error } from "diary";

// 1️⃣ Choose to enable the emission of logs, or not.
enable("*");

const logger = {
  info,
  warn,
  error,
  grpcLogger: diary("grpc"),
  apiLogger: diary("express-api"),
};

export default logger;
