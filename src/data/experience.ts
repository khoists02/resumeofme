
export type Experience = {
  date: string;
  title: string;
  description?: string;
  tasks: string[];
}

const experienceData: Experience[] = [
  {
    date: "Dec 2020 - Present",
    title: "Senior Frontend Developer at AdvahealthSolutions",
    tasks: [
      "Code Reviewing.",
      "Developing features and enhance the user experience.",
      "Building and config project for team.",
      "Building reuseable code.",
      "Deploying and testing new resources.",
      "Work closely with team member to resolve problems.",
      "Discuss with CTO to develop new technique."
    ]
  },
  {
    date: "Oct 2019 - Dec 2020",
    title: "Senior Frontend Developer at NextJuris",
    tasks: [
      "Developing features and enhance the user experience.",
      "Building reuseable code.",
      "Maintaining app consistency throughout the design."
    ]
  },
  {
    date: "Mar 2018 - Oct 2019",
    title: "Senior Frontend Developer at Saigon Technology Solutions",
    tasks: [
      "Developing features and enhance the user experience.",
      "Building reuseable code.",
      "Maintaining app consistency throughout the design.",
    ]
  },
  {
    date: "Nov 2016 - Nov 2017",
    title: "Web Developer - Junior Developer at FPT Software",
    tasks: [
      "Developing features and enhance the user experience.",
      "Building reuseable code.",
      "Maintaining app consistency throughout the design.",
    ]
  }
]


export { experienceData  }