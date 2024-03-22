import self from "../img/self.png";
import mock1 from "../img/dollar.png";
import mock2 from "../img/aslan_nft.png";
import mock3 from "../img/mustgo.png";
import mock4 from "../img/feeddamoa.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "지민",
  lastName: "유",
  initials: "JIMIN", // the example uses first and last, but feel free to use three or more if you like.
  position: "백엔드 개발자",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the US",
    },
    {
      emoji: "📱",
      text: "010-5344-1712",
    },
    {
      emoji: "📧",
      text: "johnsmith@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://facebook.com",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://instagram.com",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/keeepmin94",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  // bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  bio:
    `안녕하세요. 백엔드 개발자 유지민입니다.\n` +
    `대학교에서 '소프트웨어학과'를 전공하며 컴퓨터의 기초적인 지식을 숙련한 이후, 지난 직장에서 윈도우 프로그램 개발 및 유지보수를 하면서 사용자들의 요청사항을 반영해 병원정보시스템을 운영했습니다.` +
    `RDBMS의 데이터베이스와 소프트웨어 설계를 통해 다양한 실무  전산 프로그램을 개발했고 사용자의 업무효율성과 업무 속도를 증가시킨 경험이 있습니다. \n` +
    `\n` +
    `현재는 퇴사 후 개인 역량을 키우기 위해 온라인 부트캠프와 다양한 토이프로젝트를 진행했고 전체적인 웹개발을 진행할 수 있도록 javascript와 node.js를 학습하였습니다. \n` +
    `백엔드 개발을 집중적으로 학습하였고 주력 프레임워크는 Nest.JS로 WAS 개발과 설계 및 베포 환경 구축, CI/CD를 학습해 토이프로젝트를 서비스하였습니다.  \n` +
    `\n` +
    `개발자로서 개발 스킬만을 중요하게 여기지 않고 협업을 중요시하여 끊임없이 통합니다. 또한, 체계적인 업무 일정 관리를 통해 매주 우선순위의 업무를 구분 짓고, 업무 세분화 작업으로 일정에 차질이 생기지 않게 합니다.`,
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "figma",
    ],
    exposedTo: ["nodejs", "python", "adobe illustrator"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Dollar Guard",
      live: "https://github.com/keeepmin94/dollar-Guard", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/keeepmin94/dollar-Guard", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
      contents:
        "개인 재정을 효과적으로 관리하고 지속 가능한 소비 습관을 형성할 수 있도록 도와주는 예산 관리 어플리케이션입니다.",
    },
    {
      title: "Aslan NFT",
      live: "https://github.com/keeepmin94/AslanAcademy-NFT",
      source: "https://github.com/keeepmin94/AslanAcademy-NFT",
      image: mock2,
      contents:
        "블록 체인 연구 및 커뮤니티 운영 단체인 아슬란 아카데미의 자체 NFT 민팅 프로젝트. NFT를 소유함으로서 아슬란 아카데미 소속임을 증명하고 유저가 원하는 케릭터를 직접 커스터마이징하여 NFT를 발급합니다.",
    },
    {
      title: "Must Go",
      live: "https://github.com/keeepmin94/Must-Go",
      source: "https://github.com/keeepmin94/Must-Go",
      image: mock3,
      contents:
        "공공데이터를 활용하여, 지역 음식점 목록을 자동으로 업데이트 하고 이를 활용하여 내 위치 또는 지정한 위치 기반으로 맛집을 추천하는 서비스입니다.",
    },
    {
      title: "FeedDamoa",
      live: "https://github.com/keeepmin94/FeedDaMoA",
      source: "https://github.com/keeepmin94/FeedDaMoA",
      image: mock4,
      contents:
        "유저 계정의 해시태그(”#daily”) 를 기반으로 인스타그램, 스레드, 페이스북, 트위터 등 복수의 SNS에 게시된 게시물 중 유저의 해시태그가 포함된 게시물들을 하나의 서비스에서 확인할 수 있는 통합 Feed 어플리케이션입니다.",
    },
  ],
};
