👉 필수 구현 사항

- CRUD 구현 (작성, 조회, 수정, 삭제)
- 아티스트별 게시물 조회 기능 구현 (Home - Read)
- 원하는 아티스트에게 팬레터 등록 구현 (Home - Create)
- 팬레터 상세 화면 구현 (Detail - Read)
- 상세화면에서 팬레터 내용 수정 구현 (Detail - Update)
- 상세화면에서 팬레터 삭제 구현 (Detail - Delete)
- styled-components 를 이용하여 스타일링
  - 인라인 스타일링이나 일반 css 파일을 이용한 스타일링 방식 지양 (이번 과제 한정)
  - 모든 태그를 styled-components 화 할 필요는 없으나 스타일링이 들어가는 경우는 styled-components 화 할 것
- 전역 스타일에 reset.css 를 적용해주고 box-sizing이 border-box가 되도록 설정
- styled-components에 props를 넘김으로 인한 조건부 스타일링 적용
  - 아티스트 선택탭에 적용해 보세요
- 팬레터 등록 시 id는 uuid 라이브러리를 이용(https://www.npmjs.com/package//uuid)

📌 과제 진행 순서 안내

- (1) 프로젝트 셋업
  - CRA boilerplate 로 프로젝트 생성
  - pages/ , components/ , shared/ , assets/ 폴더 작성 및 필요 컴포넌트 사전 작성
  - styled-components, react-router-dom 설치
  - title 변경 (index.html)
  - jsconfig.json (src 폴더 기준 절대경로 설정)
- (2) “props-drilling” 브랜치 생성 및 이동
  Remind: props-drilling 브랜치에서는 context 나 redux는 사용하지 않습니다!
  ```bash
  git checkout -b props-drilling
  ```
- (3) Router 셋업
  - react-router-dom 을 이용하여 홈화면과 상세화면에 대한 라우터 설정을 해주세요.
- (4) 전역스타일링 적용
  - styled-components 를 이용해 주세요. (App.css, index.css 는 삭제하셔도 좋습니다.)
  - reset.css 코드 및 box-sizing 적용
- (5) 홈 화면 UI: 배너 및 헤더 파트 UI 구현
  - 상세요구사항
    아티스트탭에서 아티스트를 클릭했을 때 어떤 탭이 활성화되었는지 styled-components의 조건부 스타일링을 적용해 보세요.
- (6) 홈 화면 UI: Dummy Data(fakeData.json)를 이용한 리스트 UI 구현
  - fakeData.json
  ```json
  [
    {
      "createdAt": "2023-11-03T02:07:09.423Z",
      "nickname": "Dr. Clint Christiansen",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg",
      "content": "카리나1 Vitae recusandae tenetur debitis impedit ut dolorem atque reprehenderit magnam. Cum dolor magnam commodi qui perferendis. Vel temporibus soluta. Eum delectus blanditiis. Neque dicta non quod ex. Maiores aspernatur fuga reprehenderit a magni eaque fuga voluptatum hic.",
      "writedTo": "카리나",
      "id": "1"
    },
    {
      "createdAt": "2023-11-02T23:13:18.491Z",
      "nickname": "Chad Graham",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg",
      "content": "지젤1 Ipsam aspernatur nostrum eos unde velit molestiae dolorem. Tenetur ullam nostrum pariatur. Et in eos. Harum commodi ipsa quaerat aspernatur quod dignissimos quae quidem sapiente.",
      "writedTo": "지젤",
      "id": "2"
    },
    {
      "createdAt": "2023-11-02T11:25:37.026Z",
      "nickname": "Tommy Abshire",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/646.jpg",
      "content": "윈터1 Itaque nihil quae neque itaque. Non a officiis ducimus nemo consectetur. Ducimus libero voluptatum consequuntur.",
      "writedTo": "윈터",
      "id": "3"
    },
    {
      "createdAt": "2023-11-02T16:06:34.150Z",
      "nickname": "Max Mayert",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/37.jpg",
      "content": "닝닝1 Sint qui eligendi repudiandae placeat maiores repudiandae assumenda repudiandae. Distinctio commodi iste. Qui architecto iusto.",
      "writedTo": "닝닝",
      "id": "4"
    },
    {
      "createdAt": "2023-11-03T05:40:17.575Z",
      "nickname": "Olga Christiansen",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/720.jpg",
      "content": "카리나2 Molestiae saepe reiciendis saepe natus quo occaecati. Vel vero illum quo. Ducimus maiores porro optio illum officia nam. Cum possimus aut consequatur eaque libero ad nihil pariatur officiis.",
      "writedTo": "카리나",
      "id": "5"
    }
  ]
  ```
  - 상세요구사항
    1. 팬레터의 내용은 딱 한 줄까지만 표현하고 한 줄이상의 컨텐츠일 경우 … 으로 표현하세요.
    2. 아티스트탭 클릭 시 해당 아티스트에게 쓰여진 팬레터 리스트만 보이게 구현
- (7) 팬레터 입력창(AddForm) 작성하여 팬레터 등록 기능 구현
  - 상세요구사항
    1. 닉네임 및 내용을 입력하고 팬레터 보낼 아티스트를 선택하세요
       참고: 아바타 이미지 업로드 기능은 숙련과제에서는 요구하지 않습니다.
       팬레터 등록 시 프로필이미지는 기본 아바타 이미지를 적용해 주세요.
    2. 닉네임과 내용을 입력하지 않을 시 팬레터 등록이 되지 않도록 유효성 검사를 적용해 주세요.
    3. 닉네임과 내용 입력에 관하여 최대 글자수 제한을 주도록 합니다.
- (8) 홈화면의 팬레터 클릭 시 상세화면으로 이동 구현
  - 상세화면 이동 시 클릭한 팬레터의 id값을 가지고 이동해 주세요.
- (9) 상세화면 UI 구현
  - 상세요구사항
    1. 팬레터 내용 전체를 볼 수 있도록 UI를 표현해 주세요.
    2. 수정, 삭제 기능을 넣어야 하니 버튼도 넣어주세요.
    3. 홈 화면의 아바타 이미지와 버튼과 동일한 공용 컴포넌트를 만들어 적용해 보세요. (선택 - 어려울 시 스킵)
- (10) 팬레터 삭제 기능 구현
  - 상세요구사항
    1. 삭제 버튼 클릭 시 즉시 삭제하기 보다는 사용자에게 확인받은 뒤 삭제처리 하도록 해주세요.
    2. 삭제 확인 시 홈 화면으로 페이지 이동시켜 주세요.
    3. 홈 화면에 남겨진 팬레터가 없을 경우, 해당 멤버에게 남겨진 팬레터가 없다는 문구를 보여주세요.
- (11) 팬레터 수정 기능 구현
  - 상세요구사항
    1. 수정버튼 클릭 시 수정 가능한 textarea 가 나오도록 합니다.
    2. 수정 가능 textarea가 나올 때 빈 입력란이 아니라 기존의 내용이 입력된 상태가 되도록 합니다.
    3. 아무런 수정사항 없이 수정완료 버튼을 클릭하면 수정처리하지 않고 사용자에게 “아무런 수정사항이 없습니다.” 라고 알림을 줍니다.
- (12) “context” 로 브랜치 생성 및 이동
  Remind: context 브랜치에서는 redux는 사용하지 않습니다!
  ```bash
  git checkout -b context
  ```
- (13) props drilling으로 불편하게 관리하던 state를 context api 로 리팩터링
  - 전체 팬레터 state 는 context 전역상태로 변경합니다. 이외에도 전역상태 관리하고 싶은 상태가 있으면 자유롭게 context 로 관리해 줍니다.
- (14) “redux” 로 브랜치 생성 및 이동
  Remind: redux 브랜치에서는 context 없이 redux만 사용합니다!
  ```bash
  git checkout -b redux
  ```
- (15) context 로 관리중이던 모든 것을 redux 로 리팩터링
  - 숙련주차 강의에서 배운 오리지널 redux 를 이용하셔야 합니다. 심화주차에서 배울 redux-toolkit을 미리 적용하시면 안됩니다.
  - 강의에서 배운대로 ducks 패턴에 따라 리덕스 모듈을 작성합니다.
