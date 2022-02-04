import Layout from "./Layout";

const ProjectCard = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="/images/project.jpg" alt="" />
      </a>
      <div className="p-5">
        <a
          href="https://fellowship-orientation-22-1.devpost.com/"
          target="_blank"
        >
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:uppercase hover:text-lg">
            Noble Nautilus Portfolio
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-800 dark:text-gray-400">
          This is an awesome project developed by{" "}
          <span className="italic">Jhon Doe & Mary Jane</span>
        </p>
        <a
          href="https://fellowship-orientation-22-1.devpost.com/"
          target="_blank"
          className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
        >
          Hackathon Project
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
