import codewayLogo from "./assets/codeway.jpg";

const experienceData = [
  {
    title: "CEO",
    company: "Codeway Enterprise Development",
    companyLink: "https://www.codeway.io/",
    logo: {
      path: codewayLogo,
      width: "calc(0.23 * 200px)",
      height: "calc(0.23 * 200px)",
    },
    city: "Tashkent",
    date: "Started Feb 2020 - Current",
    description: [],
  },
];

const educationData = [
  {
    name: "National University of Uzbekistan",
    link: "https://nuu.uz/",
    city: "Tashkent",
    date: "Sep 2017 - Aug 2021",
    description: [],
  },
];

const projectsData = [
  {
    title: "UZMDB MOVIE APP",
    description: (
      <div>
        <p>
          Uzmdb is an online database of information related to films,
          television programs, home videos, video games, and streaming content
          online – including cast, production crew and personal biographies,
          plot summaries, trivia, ratings, and fan and critical reviews.
        </p>
      </div>
    ),
    link: "https://uzmdb.netlify.app/",
  },
];

const skillsData = {
  programming: {
    preferred: ["C#", "JavaScript", "Typescript"],
    knowledge: [""],
    interested: ["Rust"],
  },
  web: {
    preferred: [],
    knowledge: ["React"],
    interested: [],
  },
  rendering: {
    preferred: [],
    knowledge: [],
    interested: ["WebGPU"],
  },
  tools: {
    preferred: [],
    knowledge: ["Docker", "Git", "AWS", "Shell"],
    interested: ["Kubernetes"],
  },
};

export { experienceData, educationData, projectsData, skillsData };
