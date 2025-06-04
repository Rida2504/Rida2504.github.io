/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rida Jaaved Kutty",
  title: "Hi all, I'm Rida",
  subTitle: emoji(
    "AI/ML engineer with practical experience in developing and deploying machine learning solutions across NLP, Computer Vision, and Analytics"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1oU5XuZKK21U0UqKknKaLXNzlqWzteonT/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rida2504",
  linkedin: "https://linkedin.com/in/ridajavedkutty/",
  gmail: "rkutty@umd.edu",
  scholar: "https://scholar.google.com/citations?user=g-yeQDIAAAAJ&hl=en&oi=ao",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI/ML ENGINEER WHO LOVES TO BUILD SCALABLE MACHINE LEARNING SYSTEMS",
  skills: [
    emoji("⚡ Building production-ready ML models with 85%+ accuracy"),
    emoji("⚡ Creating real-time analytics dashboards serving 20+ global teams"),
    emoji("⚡ Developing Computer Vision systems"),
    emoji("⚡ Implementing NLP solutions"),
    emoji("⚡ Building end-to-end data pipelines with Kafka, Spark, and Snowflake")
  ],
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Apache Kafka",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "Apache Spark",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "NLP",
      fontAwesomeClassname: "fas fa-comments"
    },
    {
      skillName: "Computer Vision",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Maryland",
      logo: require("./assets/images/umdnew1logo.png"), // You'll need to add this image
      subHeader: "Master's in Applied Machine Learning",
      duration: "August 2024 - Present",
      desc: "GPA: 3.45/4.0",
      descBullets: [
        "Focusing on advanced ML algorithms and production systems",
        "Research in Computer Vision and NLP applications",
        "Specialized coursework in Deep Learning, Data Engineering, and MLOps",
        "Working on real-world ML projects with industry applications"
      ]
    },
    {
      schoolName: "PES University",
      logo: require("./assets/images/peslogo.png"), // You'll need to add this image
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "August 2020 - May 2024",
      desc: "GPA: 3.3/4.0",
      descBullets: [
        "Core CS fundamentals: Data Structures, Algorithms, and Software Engineering",
        "Specialized in Machine Learning, Computer Vision, and Natural Language Processing",
        "Published research papers in IEEE and Springer conferences",
        "Led multiple AI/ML projects including fire detection systems and plant disease detection"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning and Real-Time Analytics", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Engineering & Backend Systems",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Visualization & BI Tools",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Business Intelligence Analyst",
      company: "GlaxoSmithKline",
      companylogo: require("./assets/images/gsknewlogo.png"), // Add GSK logo
      date: "Jan 2024 – Jul 2024",
      desc: "Created and maintained 10+ Power BI dashboards within the Digital Listening Platform",
      descBullets: [
        "Enabled real-time analysis of campaign and drug performance across 5+ social media channels",
        "Collaborated with 20+ Local Operating Companies to optimize regional marketing strategies",
        "Drove engagement improvements by up to 30% through actionable insights"
      ]
    },
    {
      role: "AI/ML Research Intern",
      company: "Centre of CCTV Research - RVCE",
      companylogo: require("./assets/images/rvcelogo.jpeg"),
      date: "Jun 2023 – Jan 2024",
      desc: "Engineered real-time fire and smoke detection system leveraging YOLOv8",
      descBullets: [
        "Achieved 85% precision in hazard detection with comprehensive performance metrics",
        "Conducted 100+ test iterations across 5 environmental conditions",
        "Contributed to data-driven analysis of system effectiveness and detection insights"
      ]
    },
    {
      role: "NLP Research Intern",
      company: "Microsoft Innovation Lab",
      companylogo: require("./assets/images/pillogo.jpeg"),
      date: "Jun 2022 – Aug 2022",
      desc: "Designed and developed web application for detecting contradictions between sentence pairs",
      descBullets: [
        "Fine-tuned BERT and DistilBERT on custom-labelled dataset of 110,000+ sentences",
        "Achieved 81.4% accuracy in contradiction classification across 4 predefined categories",
        "Enhanced detection accuracy by 10% through hyper-parameter tuning of transformer models"
      ]
    },
    {
      role: "Student Intern",
      company: "Cisco",
      companylogo: require("./assets/images/cisconewlogo.png"),
      date: "Aug 2019 – Feb 2020",
      desc: "Built and deployed secure Event Management System used by 1,200+ students across 3 institutions",
      descBullets: [
        "Designed 3 role-based dashboards with access controls reducing administrative overhead by 30%",
        "Streamlined event registration process, reducing manual coordination by 60%",
        "Achieved 99.9% uptime using HTML, CSS, JavaScript, Bootstrap, AWS, and Git/GitHub"
      ]
    }
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};


const publicationsSection = {
  title: "Publications",
  subtitle: "MY PUBLISHED RESEARCH WORK IN AI/ML AND COMPUTER SCIENCE",
  display: true,
  publications: [
    {
      title: "Secure Blockchain for Admission Processing in Educational Institutions",
      authors: "Rida Javed Kutty, Nazura Javed",
      conference: "IEEE Xplore",
      date: "April 2021",
      url: "https://ieeexplore.ieee.org/abstract/document/9402654/",
      description: "Proposed a blockchain-based solution for secure and transparent admission processing in educational institutions.",
      tags: ["Blockchain", "Security", "Education Technology"]
    },
    {
      title: "Detecting Fine-Grained Emotions from COVID-19 Tweets using Transformer-based Architecture",
      authors: "Rida Javed Kutty, Nazura Javed, Rahul Mallya",
      conference: "IEEE Xplore",
      date: "2023",
      url: "https://ieeexplore.ieee.org/document/10420305",
      description: "Developed transformer-based models to detect nuanced emotional patterns in COVID-19 related social media content.",
      tags: ["NLP", "Transformers", "Sentiment Analysis", "Social Media"]
    },
    {
      title: "DisContNet: Contradiction Detection in Texts using Transformers",
      authors: "Rida Javed Kutty, Roshni PN, Shreya S Adiga",
      conference: "IEEE Xplore",
      date: "2023",
      url: "https://ieeexplore.ieee.org/abstract/document/10585189",
      description: "Implemented BERT and DistilBERT models for detecting contradictions in text pairs with 81.4% accuracy.",
      tags: ["NLP", "BERT", "Text Classification", "Contradiction Detection"]
    },
    {
      title: "Plant Disease Detection for Guava and Mango using YOLO and Faster R-CNN",
      authors: "Rida Javed Kutty, Kruthi Shetty, Khushi Donthi, Anuj Patil, Natarajan Subramanyam",
      conference: "IEEE Xplore",
      date: "2024",
      url: "https://ieeexplore.ieee.org/document/10503209",
      description: "Developed computer vision models achieving 85% precision in detecting diseases in guava and mango plants.",
      tags: ["Computer Vision", "YOLO", "Agriculture", "Disease Detection"]
    },
    {
      title: "Real Time Fire and Smoke Detection in Surveillance Videos using Deep Learning",
      authors: "Rida Javed Kutty, Anshula Aithal, Kruthi U Shetty, Mohanna",
      conference: "Springer",
      date: "2025",
      url: "https://link.springer.com/chapter/10.1007/978-981-97-8093-8_1",
      description: "Engineered real-time fire and smoke detection system using YOLOv8 with 85% precision across multiple environmental conditions.",
      tags: ["Computer Vision", "YOLOv8", "Safety Systems", "Real-time Detection"]
    }
  ]
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resume: "https://drive.google.com/file/d/1oU5XuZKK21U0UqKknKaLXNzlqWzteonT/view?usp=sharing", // Replace with your actual resume URL
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (540) 934-8738",
  email_address: "rkutty@umd.edu"
};

// LinkedIn Section (instead of Twitter)
const twitterDetails = {
  userName: "https://linkedin.com/in/ridajavedkutty/", // Your LinkedIn username from: linkedin.com/in/ridajavedkutty/
  display: false // Set true to display this section
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  publicationsSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
