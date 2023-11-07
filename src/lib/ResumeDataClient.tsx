"use client";

import { DefaultApi, UserData } from "@/api/v1";
import { ResumeEntriesByType } from "@/models/models";
import React, { createContext, useEffect, useState } from "react";

export class ResumeDataClient {
  private service = new DefaultApi();

  public getEntriesByUser(user: string): Promise<UserData> {
    // return this.service.getEntriesByUser({ user });
    return Promise.resolve<UserData>({
      items: [
        {
          endDate: "8/10/2023",
          startDate: "8/1/2020",
          user: "alecwest",
          details: {
            degree: "MS Computer Science",
            notableClasses: [
              "Systems Issues in Cloud Computing",
              "High Performance Computer Architecture",
              "Human Computer Interaction",
              "Quantum Computing",
            ],
            description: ["Specialization in Computing Systems"],
          },
          id: "1673746185836",
          title: "Georgia Institute of Technology",
          type: "education",
        },
        {
          endDate: "5/4/2019",
          startDate: "8/1/2015",
          user: "alecwest",
          details: {
            degree: "BS Computer Science",
            description: [
              "Distributed & High Performance Computing Concentration",
            ],
            notableClasses: [
              "Artificial Intelligence",
              "Distributed & Cloud Computing",
            ],
          },
          id: "1673746226169",
          title: "Tennessee Technological University",
          type: "education",
        },
        {
          endDate: "5/4/2019",
          startDate: "1/10/2017",
          user: "alecwest",
          details: {
            description: [
              "Worked with other students to build a Ruby on Rails website.",
              "Provided team with initial DevOps tools to help support unit testing expectations",
            ],
            position: "Intern",
          },
          id: "1673747782535",
          title: "Tennessee Technological University",
          type: "employment",
        },
        {
          endDate: "5/4/2018",
          startDate: "8/1/2016",
          user: "alecwest",
          details: {
            description: [
              "Ran network simulations with custom python scripts and presented results to mentors",
              "Built debian packages and contributed to existing services in C++",
              "Designed the end-to-end GUI testing framework for a new platform using Angular 2 and mocked requests",
            ],
            position: "Co-Op",
          },
          id: "1673747805599",
          title: "Adtran",
          type: "employment",
        },
        {
          endDate: "7/1/2021",
          startDate: "6/3/2019",
          user: "alecwest",
          details: {
            description: [
              "Rebuilt a legacy Flash GUI from the ground up using Angular",
              "Learned how to build full-stack features to orchestrate customer networks with REST apis",
              "Ran a UX & Accessibility Community of Practice, actively encouraging good accessibility and UX patterns in our Angular framework",
            ],
            position: "Software Engineer",
          },
          id: "1673747855249",
          title: "Adtran",
          type: "employment",
        },
        {
          endDate: "8/1/2022",
          startDate: "7/1/2021",
          user: "alecwest",
          details: {
            description: [
              "Revamped old GUI build system, cutting build times for developers up to 10x and significantly lowering the barrier to entry for new teams",
              "Developed a checkpointing mechanism for internal event processing to cut upgrade startup times by up to 50%",
              "Introduced Trivy vulnerability scanning into our pipeline, increasing our visibility into CVEs across all microservices",
            ],
            position: "Software Engineer II",
          },
          id: "1673747883391",
          title: "Adtran",
          type: "employment",
        },
        {
          endDate: "present",
          startDate: "8/1/2022",
          user: "alecwest",
          details: {
            description: [
              "Led the packaging and release of a new microservice for OSS/BSS integrations",
              "Led the design and creation of a new templated object creation page, simplifying the UX of creating devices or services by ~80%",
            ],
            position: "Senior Software Engineer",
          },
          id: "1673747907996",
          title: "Adtran",
          type: "employment",
        },
        {
          endDate: "8/10/2018",
          startDate: "5/14/2018",
          user: "alecwest",
          details: {
            description: [
              "Helped plan/execute a developer-driven improvement of our GUI build pipeline, cutting build times for developers up to 10x and significantly lowering the barrier to entry for new teams.",
              "Prioritized and planned features for the team backlog in coordination with the ART as a SAFe Product Owner",
            ],
            position: "Intern",
          },
          id: "1673747932680",
          title: "Joint Warfare Analysis Center",
          type: "employment",
        },
        {
          endDate: "present",
          startDate: "1/1/2023",
          user: "alecwest",
          details: {
            proficiency: 3,
          },
          id: "1673749250288",
          title: "Spring Boot",
          type: "skillhard",
        },
        {
          endDate: "present",
          startDate: "1/1/2018",
          user: "alecwest",
          details: {
            proficiency: 5,
          },
          id: "1673749808349",
          title: "Typescript / Javascript",
          type: "skillhard",
        },
        {
          endDate: "present",
          startDate: "1/1/2018",
          user: "alecwest",
          details: {
            proficiency: 3,
          },
          id: "1673749835436",
          title: "Kafka / Activemq",
          type: "skillhard",
        },
        {
          endDate: "present",
          startDate: "1/1/2019",
          user: "alecwest",
          details: {
            proficiency: 3,
          },
          id: "1673749858793",
          title: "AWS / Azure",
          type: "skillhard",
        },
        {
          endDate: "present",
          startDate: "8/1/2014",
          user: "alecwest",
          details: {
            proficiency: 4,
          },
          id: "1673749858794",
          title: "Scala / Java",
          type: "skillhard",
        },
        {
          endDate: "present",
          startDate: "6/1/2017",
          user: "alecwest",
          details: {
            proficiency: 4,
          },
          id: "1673749858796",
          title: "Python",
          type: "skillhard",
        },
        {
          endDate: "5/4/2019",
          startDate: "8/1/2015",
          user: "alecwest",
          details: {
            proficiency: 2,
          },
          id: "1673749858797",
          title: "C / C++",
          type: "skillhard",
        },
        {
          endDate: "1/1/2020",
          startDate: "6/1/2017",
          user: "alecwest",
          details: {
            proficiency: 2,
          },
          id: "1673749858798",
          title: "Golang",
          type: "skillhard",
        },
        {
          endDate: "present",
          startDate: "8/1/2016",
          user: "alecwest",
          details: {
            proficiency: 3,
          },
          id: "1673749858799",
          title: "Databases",
          type: "skillhard",
        },
        {
          endDate: "5/4/2019",
          startDate: "1/1/2016",
          user: "alecwest",
          details: {
            proficiency: 2,
          },
          id: "1673749858801",
          title: "Ruby / Rails",
          type: "skillhard",
        },
        {
          endDate: "present",
          startDate: "1/1/2018",
          user: "alecwest",
          details: {
            proficiency: 4,
          },
          id: "1673749858900",
          title: "Node.js",
          type: "skillhard",
        },
        {
          endDate: "present",
          startDate: "1/1/2019",
          user: "alecwest",
          details: {
            proficiency: 5,
          },
          id: "1673749858901",
          title: "Agile / Product Ownership",
          type: "skillhard",
        },
        {
          endDate: "5/1/2022",
          startDate: "3/1/2022",
          user: "alecwest",
          details: {
            description: [
              "Fed OpenSky flight data through Azure services (functions, event hub, HDInsight with Apache Spark, CosmosDB) before displaying queryable, realtime, and historic flight paths on a static Angular page",
            ],
            projectSource: "available upon request",
          },
          id: "1673750380530",
          title: "Flight Path Tracking with Azure",
          type: "project",
        },
        {
          endDate: "present",
          startDate: "3/1/2020",
          user: "alecwest",
          details: {
            description: [
              "Conveniently update both my resume and Angular website simultaneously.",
              "Resume built using a google docs template and google apps script.",
              "All data provided in a single google spreadsheet.",
              "Migrated Data, API, and resume generator to AWS using DynamoDB, S3, Cognito, Lambda, Step Function, and API Gateway in 2023",
            ],
            projectSource: "https://github.com/alecwest/resume-website",
          },
          id: "1673750380531",
          title: "Resume / Website single source of truth",
          type: "project",
        },
        {
          endDate: "8/1/2019",
          startDate: "6/1/2017",
          user: "alecwest",
          details: {
            description: [
              "Wrote multiple iterations of an irc dad/mom bot in javascript, python, and go",
              "Each iteration aimed to improve on code readability and ability to easily add new responses, while also exploring different languages.",
            ],
            projectSource:
              "https://github.com/AFTERWAKE/IRCBots/tree/master/dad",
          },
          id: "1673750380532",
          title: "IRC bots",
          type: "project",
        },
        {
          endDate: "5/4/2019",
          startDate: "8/1/2018",
          user: "alecwest",
          details: {
            description: [
              "Mobile App using Ionic and Cordova",
              "To provide park info, alerts and events straight to visitors' phones.",
              "Cached data so users can still use the app while in low-coverage park areas.",
              "Precursor to official TN State Parks App",
            ],
            projectSource: "available upon request",
          },
          id: "1673750380533",
          title: "Cummins Falls State Park App",
          type: "project",
        },
        {
          endDate: "9/27/2018",
          startDate: "10/1/2017",
          user: "alecwest",
          details: {
            description: [
              "AI class project in C that initially had the highest performance.",
              "Redone over the summer in Kotlin to practice design patterns.",
            ],
            projectSource: "https://github.com/alecwest/wumpus-kotlin",
          },
          id: "1673750380534",
          title: "Wumpus World text game",
          type: "project",
        },
        {
          endDate: "present",
          startDate: "8/1/2016",
          user: "alecwest",
          details: {
            description: [
              "Hi! I'm Alec West.",
              "I'm a Software Engineer in the Denver area. Thus far in my career, I've become an expert on Angular frontends and accessible web pages, created full stack features in a microservice platform, improved build pipelines, explored scalable services in the cloud, mentored others, and planned/managed my team's backlog.",
            ],
            images: [
              "https://drive.google.com/uc?id=1g_VnKtKKBEzHF23UfGWYpihP6urEM1iv",
            ],
            social: [
              {
                name: "Personal Website",
                url: "http://www.alecnwest.com",
              },
              {
                name: "Github",
                url: "https://www.github.com/alecwest",
              },
              {
                name: "Personal Website",
                url: "https://www.linkedin.com/in/alexander-west-587545117/",
              },
            ],
            subtitle: "Senior Software Engineer",
          },
          id: "1673752107528",
          title: "Alec West",
          type: "bio",
        },
        {
          endDate: "present",
          startDate: "1/1/2022",
          user: "alecwest",
          details: {
            proficiency: 3,
          },
          id: "1674927176658",
          title: "Elasticsearch",
          type: "skillhard",
        },
        {
          endDate: "present",
          startDate: "1/1/2023",
          user: "alecwest",
          details: {
            proficiency: 5,
          },
          id: "1694303943512",
          title: "Angular / React.js",
          type: "skillhard",
        },
        {
          endDate: "present",
          startDate: "1/1/2023",
          user: "alecwest",
          details: {
            proficiency: 3,
          },
          id: "1694303943513",
          title: "GraphQL",
          type: "skillhard",
        },
        {
          endDate: "present",
          startDate: "8/1/2023",
          user: "alecwest",
          details: {
            description: [
              "Made a plan for building a microservice architecture",
              "Designed and built a collection of services that would create a book rating catalog",
              "Ongoing project which uses Java Spring Boot, PostgreSQL, Apollo GraphQL, Next.JS with React, and Kubernetes",
            ],
            projectSource: "https://github.com/alecwest/toy-book-app",
          },
          id: "1694304344503",
          title: "Toy Book App",
          type: "project",
        },
      ],
      count: 30,
      scannedCount: 30,
      consumedCapacity: {
        tableName: "resume-data",
        capacityUnits: 1,
      },
    });
  }

  public getEntriesByType(username: string): Promise<ResumeEntriesByType> {
    return this.getEntriesByUser(username).then((resp) =>
      ResumeEntriesByType.fromResumeEntries(resp.items)
    );
  }
}

export const ResumeDataContext = createContext<
  | [
      ResumeEntriesByType | undefined,
      React.Dispatch<React.SetStateAction<ResumeEntriesByType | undefined>>
    ]
  | []
>([]);

export default function ResumeDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [resumeData, setResumeData] = useState<ResumeEntriesByType>();

  const resumeDataClient = new ResumeDataClient();

  useEffect(() => {
    resumeDataClient
      .getEntriesByType("alecwest") // TODO how do I make this changeable?
      .then((response) => setResumeData(response));
  });

  return (
    <ResumeDataContext.Provider value={[resumeData, setResumeData]}>
      {children}
    </ResumeDataContext.Provider>
  );
}
