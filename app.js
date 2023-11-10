/**
 * #work-memo
 * todo : web server 제작
 * pseudo 1. express.js를 활용한다.
 * pseudo 2. GET 요청에 대응한다.
 * * 문서를 조립하는 route.js 구조
 * * 예상되는 요청 "/"
 * 
 * pseudo 3. POST 요청에 대응한다.
 * * action = "/mainPromptInputData"
 * * method = "POST"
 */

/**
 * import modules
 */

import express from "express";






/**
 * #work-app
 * app: application
 */

const app = express();


/**
 * 
 * #work-get
 * 
 * 
 */


app.get('/', (req, res) => {
  res.send('initialize, GET');
});

// app.post('/', (req, res) => {
//   res.send('initialize, POST');
// });

/**
 * ? Process ID 조회
 * * MacOS : lsof -i :portNumber
 * ? Process ID 강제 종료
 * * MacOS : kill -9 :processID
 */

app.listen(5033, () => {
  console.log('Running port : ', `http://localhost:5033`);
})


  
/**
 * todo : 찾아볼 기술
 * pseudo 4. express.js
 * * express.js의 기본적인 사용법
 * * express static 기능
 * * express router 기능
 * * express middleware 기능
 * * - body-parser 기능 유용한 것 찾아보기
 * * 찾아보면서 추가하기
 * 
 */