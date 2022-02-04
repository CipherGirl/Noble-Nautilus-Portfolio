import Layout from "../../components/Layout";
import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";

function ProjectsPage() {
  return (
    <Layout>
      <h1 className="text-3xl text-center m-10">Projects</h1>
      <section>
        <h2 className="text-2xl text-center">
          The projects that the fellows are going to contribute to
        </h2>
        <div className="flex my-10 mx-20 px-10 gap-5">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-contain md:h-full md:w-48 ml-4 "
                  src="/images/code-closed-source.svg"
                  alt="Man looking at item at a store"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-2xl text-gray-900 hover:text-blue-900 font-semibold">
                  Intellibus — Meet.grid
                </div>
                <p className="mb-3 italic text-sm text-red-500">
                  Closed Source Projects
                </p>

                <p className="mt-2 mb-5 text-slate-500">
                  We build Intelligent Platforms that process Millions of
                  Transactions per second. Our expertise is in React, Svelte,
                  Java, Python, Kafka, Snowflake, Postgres, Jenkins, GitLab,
                  Nexus, PCF, Terraform, Kubernetes, AWS, Azure, GCP & Linux.
                </p>
                <a
                  href="https://intellibus.com/"
                  target="_blank"
                  className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
                >
                  Visit Intellibus Site
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-contain md:h-full md:w-48 ml-4"
                  src="/images/code-open-source.svg"
                  alt="Man looking at item at a store"
                />
              </div>
              <div className="p-8">
                <div className="text-2xl uppercase tracking-wide  text-gray-900 hover:text-blue-900 font-semibold">
                  Multiple OSS (with Jordan Harband)
                </div>
                <p className="mb-3 italic text-sm text-green-500">
                  Open Source Projects
                </p>

                <p className="mt-2 mb-5 text-slate-500">
                  Jordan Harband is an open source maintainer and an editor for
                  TC39 (the committee that writes the specification for
                  Javascript). He has been heavily involved in the community for
                  multiple years now and has created/inherited many open source
                  projects.
                </p>
                <a
                  href="https://github.com/ljharb"
                  target="_blank"
                  className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
                >
                  Visit Projects by Jordan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="m-20">
        <h2 className="text-2xl text-center">
          The Orientation Hackathon projects by the Fellows
        </h2>
        <div className="flex  gap-5 m-10 items-center justify-center">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </Layout>
  );
}

export default ProjectsPage;
