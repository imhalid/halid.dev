import Link from "next/link";
import { TbGitFork } from "react-icons/tb";
import cx from "clsx";
import classNames from "../../util/classNames";
import { AiFillStar } from "react-icons/ai";
import Layouts from "../../components/Layouts";
import GithubProfileCard from "../../components/githubProfileCard";
// import { useState, useEffect } from "react";
import Head from "next/head";

export const getStaticProps = async () => {
  const url = "https://api.github.com/users/";
  const [userRes, repoRes] = await Promise.all([
    fetch(url + "imhalid"),
    fetch(url + "imhalid" + "/repos"),
  ]);
  const [user, repos] = await Promise.all([userRes.json(), repoRes.json()]);
  if (userRes.status !== 200 || repoRes.status !== 200) {
    console.log("error");
  }
  return { props: { user, repos } };
};

const Projects = ({ user, repos }) => {
  // console.log(user);
  // console.log(repos);

  const myTime = "16:59:17";
  const d = new Date();
  let hour = d.toLocaleTimeString();
  // console.log(parseInt(hour.slice(0, 5)) - parseInt(myTime.slice(0, 5)));

  const timeSplit = (x) => {
    const time = x.replace("T", " ").replace("Z", " ");
    const splitTime = time.split(" ");
    // console.log(sliceTime);
    return splitTime[0];
  };

  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>
      <Layouts>
        <div className="columns-3 mt-8 space-y-5 ">
          <GithubProfileCard
            image={user.avatar_url}
            name={user.name}
            username={user.login}
            bio={user.bio}
            followers={user.followers}
            following={user.following}
            url={user.html_url}
            repos={user.public_repos}
          />
          {repos.map((repo) => (
            <div
              className={classNames(
                "repoCard break-inside-avoid",
                `${repo.fork} ? "bg-orange-500" : "bg-rose-500"`
              )}
              key={repo.id}
            >
              <Link href={repo.html_url}>
                <a className="">
                  <h2 className="font-medium">{repo.name}</h2>{" "}
                </a>
              </Link>
              <p className="opacity-70">
                {repo.description || "no description"}{" "}
              </p>
              <div className="absolute flex items-center justify-between px-3 left-0 bg-transparent dark:border-neutral-700/50 border-t w-full bottom-0 h-7">
                <div className="flex items-center space-x-[2px]">
                  <p>{repo.fork ? <TbGitFork color="gray" /> : ""}</p>
                  <AiFillStar fill="orange" />
                  <span className="dark:text-gray-400 text-gray-600">
                    {repo.stargazers_count}
                  </span>
                </div>
                <p className="dark:text-gray-400 text-gray-600">
                  {timeSplit(repo.created_at)}
                </p>
                {/* https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_split1 */}
              </div>
            </div>
          ))}
        </div>
      </Layouts>
    </div>
  );
};

export default Projects;
