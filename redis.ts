import Redis from "ioredis";

let redis = new Redis("rediss://default:3d113f6546634ce7b270b5618c3417b4@apn1-infinite-pigeon-34600.upstash.io:34600");

export default redis;
