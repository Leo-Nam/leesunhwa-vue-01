이 과제는 화면에 사용되는 2개의 div가 click이벤트에 의하여 변경되는 flag값에 따라서 왼쪽, 오른쪽으로 슬라이딩 되는 효과를 만드는것이 목적입니다.
사용된 주요기능은 아래와 같습니다.
1. vuetify 추가(nodejs설치 => npm설치 => vuetify설치)
2. default.css생성(@/assets/styles/default.css)
3. 기본 appBar 컴포넌트 생성(@/components/NewAppBar.vue)
4. TestBody.vue 컴포넌트 생성(@/components/TestBody.vue)

먼저 defalut.css의 첫라인에서 1rem의 크기를 규정하였습니다. 
또한 전체 프로젝트에서 공통으로 사용할 클래스를 정의되어 있습니다. 이 클래스들은 적당한 형태로 모두 수정해야 할겁니다.
appBar.vue는 화면에 그냥 보여지는 용도로 붙여넣었으므로 별 의미가 없습니다.
TestBody.vue 컴포넌트 내부에 이 과제의 주요 내용들이 구현되었습니다.

TestBody.vue의 구현내용 요약
이 컴포넌트에서 template과 script사이에 공유할 몇가지 데이타를 data()부분에서 선언하였습니다.
flag는 토글되는 값으로서 0과 1의 값을 가집니다. 
각각의 값에 따라 화면에 구현된 div의 위치가 변경되도록 하였습니다.
이때 변경되는 화면을 변경시키는 내용은 css 클래스 형태로 style부분에 구현되었습니다.
flag의 값에 따라 좌측div는 leftSlideClasses의 배열에 정의되어 있고
우측div는 rightSlideClasses 배열에서 정의되었습니다.
각 배열에는 2개의 값이 존재하는 첫번째 값이 div가 왼쪽으로 밀리는 경우에 적용되고 두번째 배열값은 div가 오른쪽으로 밀릴때 적용됩니다.

각 파일별로 내부에 자세한 주석이 달려 있습니다.

github로부터 다운로드 받아서 사용하는 방법
1. mkdir vue-lesson-01
2. cd vue-lesson-01
3. git init
4. git remote add origin https://github.com/Leo-Nam/leesunhwa-vue-01.git
5. git pull origin master
6. npm install
7. npm run serve
8. 웹브라우저에서 http://localhost:8080 실행
