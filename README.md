# 이커머스 대시보드 REST API 개발
이 프로젝트는 가상 E-Commcerce 대시보드의 REST API 개발 repository입니다.
프론트엔드 Vue 이커머스 대시보드 개발 repository는 *https://github.com/decody/vue-ecommerce-dashboard* 입니다.

## 구현 API
> 총 개발기간은 6 weeks를 목표로 함
> decody, jinavely: 각자 전체 개발을 목표로 함
> 예시
> GET /api/dashboard
> GET /api/members/1
> POST /api/members
1. 인증
2. User 권한관리 
    - admin : 전체 카테고리 접근 
    - shopmaster : Dashboard / Order만 접근
2. Dashboard
3. Order (주문), Order Detail (주문 상세 모달)
4. Statistics (통계)

## 기술 스택
- express
- cors
- path
- sqlite3
- winston

## 프로젝트 폴더 (src 하위 폴더)
- controllers : REST API의 endpoint 역할, 클라이언트로 response와 request 
- db : 데이터베이스
- services : 비즈니스 로직 구현, SQL query 형태의 코드 없어야 함
- middlewares : logger 등의 미들웨어
- models : DB 엑세스
- utils
- config

** Express 기반 REST API 프로젝트 설명
- 견고한 node.js 프로젝트 설계하기 : *https://velog.io/@hopsprings2/%EA%B2%AC%EA%B3%A0%ED%95%9C-node.js-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90-%EC%84%A4%EA%B3%84%ED%95%98%EA%B8%B0*
- How to structure an Express.js REST API with best practices : *https://blog.treblle.com/egergr/*
- Node.js, Express and MongoDB Project Structure (github) : *https://github.com/MoathShraim/Nodejs-rest-api-project-structure-Express*

## DB 스키마 설계
- DB스키마 설계 : *https://velog.io/@tmdgusya/DB-%EC%8A%A4%ED%82%A4%EB%A7%88-%EC%84%A4%EA%B3%84*

## REST API 설계 가이드
- REST API 설계 가이드 : *https://velog.io/@couchcoding/%EA%B0%9C%EB%B0%9C-%EC%B4%88%EB%B3%B4%EB%A5%BC-%EC%9C%84%ED%95%9C-RESTful-API-%EC%84%A4%EA%B3%84-%EA%B0%80%EC%9D%B4%EB%93%9C*
- Express RESTful 설계: *https://velog.io/@smooth97/Node.js-Restful-API-wok2wqo7yu*
- REST API를 보다 RESTful하게 : *https://pronist.dev/146*

** Express 공식 문서
- *https://expressjs.com/en/guide/routing.html*

** logger 라이브러리 소개 및 구현
- *https://github.com/MoathShraim/Nodejs-rest-api-project-structure-Express*

** sqlite3 튜토리얼
- w3schools SQL (온라인 테스트 가능) : *https://www.w3schools.com/sql/*
- sqlite3 기초 실습 (웹북) : *https://wikidocs.net/12452*
- 위 sqlite3 강의 유튜브 : *https://www.youtube.com/watch?v=nvt16QqaktA*
- sqlite3 설치 : *https://5-ssssseung.tistory.com/52*
- sqlite3 DB Browser 설치 및 CRUD : *https://eine.tistory.com/entry/SQLite3%EB%A1%9C-%ED%95%B4%EB%B3%B4%EB%8A%94-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC-%ED%85%8C%EC%9D%B4%EB%B8%94-%EC%83%9D%EC%84%B1%EA%B3%BC-CRUD*
- Node.js SQLite Tutorial : *https://lightrun.com/debugging/node-js-sqlite-tutorial/*
- Creating a CRUD Application Using Node.js and SQLite3 : *https://medium.com/swlh/creating-a-crud-application-using-node-js-and-sqlite3-a57d4a39ab69*
- Build a REST API with Node.js SQLite and Express JS : *https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/*
- sqlite3 테이블 조회방법 정리 (select) 
    - *https://ybworld.tistory.com/21*
    - *https://bskyvision.com/entry/sqlite3-%EA%B8%B0%EB%B3%B8-%EB%AA%85%EB%A0%B9%EC%96%B4-%EB%B0%8F-create-read-update-delete-%ED%95%98%EB%8A%94-%EB%B2%95-%EC%A0%95%EB%A6%AC*
- basicCRUDops_NodeJs_sqlite (github) : *https://github.com/souvik-pl/basicCRUDops_NodeJs_sqlite*
- vue3용 node.js + splite3 연결 예제 (github) : *https://github.com/dongprojectteam/vue3_examples/tree/main/8/aws/database*

## 기타 사항 및 관련 링크
- Vue Financial Dash : *https://github.com/dongprojectteam/vue3_examples/tree/main/8/aws/database*
- o2obnb 백엔드 클론 (모델링 포함, github 예제) : *https://github.com/wecode-bootcamp-korea/37-2nd-O2bnb-backend*
- sqlite3 활용한 DB구축 미션 : *https://github.com/wecode-bootcamp-korea/justgram-node-7-team2*