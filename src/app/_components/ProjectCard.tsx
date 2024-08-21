import Image from "next/image";

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <a href={project.link}>
      <div
        className="shadow rounded-md hover:shadow-md mb-4"
        style={{ width: "100%" }}
      >
        <Image
          width={100}
          height={100}
          className="w-full h-[140px] object-cover rounded-t-md pointer-events-none"
          src={project.coverImage}
          alt="company-list"
        />
        <div className="px-4 pt-8 pb-10 relative">
          <Image
            width={50}
            height={50}
            className="w-[50px] h-[50px] object-cover rounded-md absolute top-[-30px] pointer-events-none"
            src={project.logo}
            alt="company-list"
          />
          <div className="cursor-pointer">
            <p className="font-semibold text-md line-clamp-1">{project.name}</p>
            <p className="text-xs line-clamp-1">{project.company}</p>
            <p className="font-light text-xs text-brand-500 mt-3">
              Target Pendanaan
            </p>
            <p className="font-medium text-sm line-clamp-1">
              {project.targetFunding}
            </p>
            <p className="font-light text-xs text-brand-500 mt-3">
              Sisa Pendanaan
            </p>
            <p className="font-medium text-xs text-brand-500 line-clamp-1">
              {project.remainingFunding}
            </p>
            <div className="flex flex-row items-center mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 text-brand-500"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                <line x1="16" x2="16" y1="2" y2="6"></line>
                <line x1="8" x2="8" y1="2" y2="6"></line>
                <line x1="3" x2="21" y1="10" y2="10"></line>
                <path d="m9 16 2 2 4-4"></path>
              </svg>
              <p className="font-medium text-xs ml-1 text-brand-500">
                Pendanaan Ditutup
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
export default ProjectCard;
