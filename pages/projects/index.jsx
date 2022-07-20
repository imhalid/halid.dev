import Link from "next/link";
import { TiStarFullOutline } from "react-icons/ti";
import Layouts from "../../components/Layouts";
import GithubProfileCard from "../../components/githubProfileCard";
// import { useState, useEffect } from "react";
import Head from "next/head";

export const getStaticProps = async () => {
  //https://stackoverflow.com/questions/69423933/how-can-i-pull-the-languages-used-by-github-api-users-and-their-percentages-int
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
  console.log(user);
  console.log(repos);

  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>
      <Layouts>
        <div className="columns-3 space-y-5 ">
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
            <div className="repoCard break-inside-avoid" key={repo.id}>
              <Link href={repo.html_url}>
                <a>
                  <h2 className="font-medium">{repo.name}</h2>
                </a>
              </Link>
              <p className="opacity-70">
                {repo.description || "no description"}{" "}
              </p>
              <div className="flex items-center space-x-1">
                <TiStarFullOutline fill="orange" />
                <span>{repo.stargazers_count}</span>
              </div>

              <p>{repo.language}</p>
              {/* <p>{repo.created_at} created_at</p> */}
              {/* <p>{repo.size} size</p> */}
            </div>
          ))}
        </div>
      </Layouts>
    </div>
  );
};

export default Projects;

/*

{repos.map((repo) => (
          <div key={repo.id}>
            <hr />
            <h2>{repo.name} repos name</h2>
            <p>{repo.description} description</p>
            <p>{repo.language} language</p>
            <p>{repo.created_at} created_at</p>
            <p>{repo.size} size</p>
            <a href={repo.html_url}>link</a>
            <p>{repo.stargazers_count}</p>
          </div>
        ))}

*/
