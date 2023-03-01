import Vue from "vue";
import VueRouter from "vue-router";
// 라우터를 사용하기 위해서는 터미널에서 npm install vue-router@3.6.5라고 입력한 후 실행시키면 됩니다.
// 왜 궂이 버전까지 결정해주느냐? 버전없이 설치하게 되면 4.대의 버전이 설치되는데 4.대의 버전은 vue3에서만 작동됩니다.
// 지금 이 프로젝트는 vue2 기반이기때문에 궂이 3.대의 버전을 설치하는것입니다.
// 이 파일은 vue-router를 설치한 후 직접 손으로 코딩해야 하는 파일입니다.
// vue-router설치후 가장 먼저 손봐야 할 부분은 @/main.js입니다.
// router에 대한 설명은 간단하지가 않아서 차후로 미루도록 하겠습니다.
Vue.use(VueRouter);
const routes = [
	{
		path: "/",
		name: "Home",
		redirect: "/mission1",
		component: () => import("@/views/default/defaultView.vue"),
	},
	{
		path: "/mission1",
		name: "mission1",
		component: () => import("@/views/mission1View.vue"),
	},
	{
		path: "/mission2",
		name: "mission2",
		component: () => import("@/views/mission2View.vue"),
	},
	{
		path: "/mission3",
		name: "mission3",
		component: () => import("@/views/mission3View.vue"),
	},
	{
		path: "/mission11",
		name: "mission11",
		component: () => import("@/views/mission11View.vue"),
	},
	{
		path: "/mission12",
		name: "mission12",
		component: () => import("@/views/mission12View.vue"),
	},
	{
		path: "/mission13",
		name: "mission13",
		component: () => import("@/views/mission13View.vue"),
	},
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;