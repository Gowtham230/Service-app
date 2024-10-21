import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://vercel-node-vyhj.vercel.app/gmail/sent',
  params: {
    adminMail: 'gowthamwork00@gmail.com',
    passcode: '192.168.29.154',
    to: '["gowthamd2305@gmail.com"]',
    subject: 'Say somthing 🍻',
    from: 'santhoshvellingiri100@gmail.com',
    html: '<h1>Hello I am Error!</h1>',
    ispasscode: 'false'
  },
  headers: {'User-Agent': 'insomnia/10.0.0'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
export default options;