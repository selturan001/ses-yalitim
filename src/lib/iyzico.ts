import Iyzipay from 'iyzipay';

const iyzipay = new Iyzipay({
    apiKey: process.env.IYZICO_API_KEY || 'dummy',
    secretKey: process.env.IYZICO_SECRET_KEY || 'dummy',
    uri: process.env.IYZICO_BASE_URL || 'https://sandbox-api.iyzipay.com'
});

export default iyzipay;
