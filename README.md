🚀 Goorm FE 7th Final Semi Project - Team 2

구름 프론트엔드 7회차 이론 과정의 마지막 실습 프로젝트입니다.
Next.js App Router 기반으로 구현되었으며, Parallel Routes, Intercepting Routes, Zustand, Tanstack Query를 사용하였습니다.

🛠 Tech Stack
Category	Stack
Framework	Next.js (App Router), TypeScript
State Management	Zustand (Client State), TanStack Query (Server State)
Styling	Tailwind CSS, shadcn/ui
Components	Carousel, Switch, Card, Dialog
📌 Key Features
1️⃣ Home Page – Image Slide

핵심 기능

shadcn/ui의 Carousel 컴포넌트를 활용한 이미지 슬라이드 구현

기술 포인트

CarouselApi를 사용하여 현재 슬라이드 인덱스를 추적

2️⃣ Photos Page – Modal & Advanced Routing

핵심 기능

사진 목록 조회

사진 클릭 시 상세 보기 모달 표시

라우팅 전략

Parallel Routes

Intercepting Routes

동작 방식

리스트에서 사진 클릭 시 URL은 변경되지만,
현재 페이지 위에 모달 형태로 상세 정보 출력

모달 상태에서 새로고침 시 Intercept가 해제되며
독립적인 상세 페이지로 전환

3️⃣ Login – Simple Client-side Authentication

핵심 기능

Zustand 기반 전역 로그인 상태 관리

구현 방식

백엔드 인증 없이 클라이언트 스토어로 인증 상태 제어

전역 상태를 통해 로그인 여부에 따른 UI 분기 처리


4️⃣ Posts Page – Dynamic Loading Mode

핵심 기능

게시글 목록 조회

게시글 상세보기 페이지

데이터 로딩 방식 전환

shadcn/ui의 Switch 컴포넌트를 활용하여 두 가지 로딩 전략 제공:

🔹 Infinite Scroll Mode

스크롤 하단 도달 시 자동 데이터 페칭

🔹 Load More Mode

버튼 클릭 시 수동 데이터 페칭

기술 적용

TanStack Query의 useInfiniteQuery
