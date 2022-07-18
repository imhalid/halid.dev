import Link from "next/link";
import Layouts from "../../components/Layouts";
import classNames from "../../util/classNames";
// import { useState, useEffect } from "react";
import Head from "next/head";

export const getStaticProps = async () => {
  const [userRes, repoRes] = await Promise.all([
    fetch("https://api.github.com/users/imhalid"),
    fetch("https://api.github.com/users/imhalid/repos"),
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
        <img src={user.avatar_url} alt="" />
        <h1>{user.name}</h1>
        <p>{user.bio}</p>
        <p>{user.hireable ? "hireable" : "injob"}</p>
        <p>{user.created_at} created date</p>
        <p>{user.followers} followers</p>
        <p>{user.following} following</p>
        <p>{user.public_repos} public repos</p>
        <a href={user.html_url}>link</a>
        <p>{user.updated_at} updated at</p>

        <hr />
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
      </Layouts>
    </div>
  );
};

export default Projects;
