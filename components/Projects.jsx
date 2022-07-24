import projects from "../data/projects.jsx";
import Image from "next/image.js";
import classNames from "../util/classNames.jsx";
import Link from "next/link";
import { HiOutlineExternalLink, HiCode } from "react-icons/hi";
const ProjectsList = () => {
  return (
    <div className="grid center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-10">
      {projects.map((project) => {
        return (
          <div className="rounded-lg" key={project.id}>
            <div className="">
              <div className="relative group ">
                <Image
                  src={project.image}
                  width={500}
                  quality={100}
                  height={300}
                  className="rounded-lg  border"
                  style={{ border: "1px solid #eaeaea" }}
                  objectFit="cover"
                  alt={project.title}
                />
                <div className="absolute flex space-x-3 opacity-0  transition-opacity group-hover:opacity-100 bottom-4 left-2">
                  <Link href={project.link}>
                    <a
                      className={classNames(
                        "backdrop-blur inline   shadow bg-white/30 rounded-2xl overflow-hidden p-3",
                        "hover:bg-white/70  transition-all"
                      )}
                    >
                      <HiCode size={19} color="black" />
                    </a>
                  </Link>
                  <Link href={project.live}>
                    <a
                      className={classNames(
                        "backdrop-blur inline opacity-100 shadow bg-white/30 rounded-2xl overflow-hidden p-3",
                        "hover:bg-white/70 transition-all"
                      )}
                    >
                      <HiOutlineExternalLink size={19} color="black" />
                    </a>
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-lg font-bold mb-2">{project.name}</p>
                <p>{project.description}</p>
                <div className="flex">
                  {project.tags.map((tag) => {
                    return (
                      <p
                        className={classNames(
                          "mr-1 my-2 px-2 py-1 rounded text-xs font-bold",
                          "bg-blue-300/50 text-blue-900",
                          "dark:bg-blue-800/20 dark:text-blue-500"
                        )}
                        key={tag}
                      >
                        {tag}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <div className="titles py-10">Projects</div>
      <ProjectsList />
    </div>
  );
};

export default Projects;
