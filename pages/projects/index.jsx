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

  // sorted by updated date
  repos.sort((a, b) => {
    return (
      parseInt(b.updated_at.split("-")[1]) -
      parseInt(a.updated_at.split("-")[1])
    );
  });

  const myTime = "16:59:17";
  const d = new Date();
  let hour = d.toLocaleTimeString();
  // console.log(parseInt(hour.slice(0, 5)) - parseInt(myTime.slice(0, 5)));

  const timeSplit = (x) => {
    //delete T and Z and replace with " "
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
        <div className="sm:columns-2 md:columns-3 mt-8 space-y-5 ">
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
          {repos.map((repo, index) => (
            <div
              className={cx("repoCard break-inside-avoid", {
                "bg-blue-100/40 dark:bg-zinc-700/10": repo.fork,
                "bg-[#FCFCFC] dark:bg-zinc-900/70": !repo.fork,
              })}
              key={repo.id}
            >
              <div className="absolute flex items-center font-bold text-sm text-white justify-center bg-orange-500 w-5 h-5 top-3 -left-5">
                {index + 1}
              </div>
              <Link href={repo.html_url}>
                <a>
                  <span className="inline-block">
                    {repo.fork ? (
                      <TbGitFork className="inline" color="gray" />
                    ) : (
                      ""
                    )}
                  </span>
                  <h2 className="font-medium inline">{repo.name}</h2>{" "}
                </a>
              </Link>
              <p className="opacity-70">
                {repo.description || "no description"}{" "}
              </p>
              <div className="absolute flex items-center justify-between px-3 left-0 bg-transparent dark:border-neutral-700/50 border-t w-full bottom-0 h-7">
                <div className="flex items-center space-x-[2px]">
                  <AiFillStar fill="orange" />
                  <span className="dark:text-gray-400 text-gray-600">
                    {repo.stargazers_count}
                  </span>
                </div>
                <p className="dark:text-gray-400 text-gray-600">
                  {timeSplit(repo.created_at)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Layouts>
    </div>
  );
};

export default Projects;
