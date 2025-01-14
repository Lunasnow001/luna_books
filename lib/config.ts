const config = {
    env: {
        apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
        imagekit: {
            publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
            urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
        },
        databaseUrl: process.env.DATABASE_URL!,
        upstash: {
            redisUrl: process.env.UPSTASH_REDIS_URL!,
            redisToken: process.env.UPSTASH_REDIS_TOKEN!,
            qstashUrl: process.env.QSTASH_URL!,
            qstashToken: process.env.QSTASH_TOKEN!,

        }
    },
};

export default config;


// QSTASH_URL="https://qstash.upstash.io"
// QSTASH_TOKEN="eyJVc2VySUQiOiI5ZGI2MWM1NS0yZTBiLTQ5YTgtOTUxOC0zMDNjNzliYTE0ZDMiLCJQYXNzd29yZCI6ImFlZmVkZGIxY2Q3ZDQ4MjA5M2M0MWM0M2Y5MTNiNjkxIn0="


// QSTASH_CURRENT_SIGNING_KEY="sig_6p3jcvRTe1yGaGUKjbxjCJRkBSpT"
// QSTASH_NEXT_SIGNING_KEY="sig_4oAZooDQt3VrnmkxePaNdKSkzLmo"