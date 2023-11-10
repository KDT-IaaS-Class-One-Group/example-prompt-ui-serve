/**
 * ? ctrl + f navigate 
 * * #work- 기획하고 있는 작업
 * * #soon- 곧 해야할 작업
 * * #learn- 하다가 배운 사항
 * 
 * 
 * 
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


app.use(express.static('public'));
/**
 * ? #learn-express-static
 * * express.app().use(), use()를 사용하면
 * * 위의 코드기준 /public/ 경로에 있는 파일들을 가지고
 * * 문서에서 요청하는 GET 요청을 모두 '알아서' 해결한다.
 * * static 페이지만 사용할 것이라면, 이정도면 충분한 기능
 * * css 파일요청, js 파일요청 기타등등 트랜잭션을 알아서 처리해준다.
 */




// todo: #soon-work
// app.get('/', (req, res) => {
//   // res.send('initialize, GET');
// });

// todo: soon-work
// app.post('/', (req, res) => {XX
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