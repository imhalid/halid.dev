import Link from "next/link";
import Layouts from "../../components/Layouts";
import classNames from "../../util/classNames";
// import { useState, useEffect } from "react";
import Head from "next/head";

/*

export const getStaticProps = async () => {
  const { data: navbarData } = await client.query({
    query: navbar,
  });

  const { data: footerData } = await client.query({
      query: footer,
  });

  return {
    props: {
      headermenu: navbarData.menu.edges,
      footer: navBarFooter.foo.bar
    },
    revalidate: 1,
  };
};`

*/

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

// export const getStaticProps = async () => {
//   const res = await fetch("https://api.github.com/users/imhalid");
//   const user = await res.json();
//   if (res.status !== 200) {
//     console.error(user);
//     throw new Error("Failed to fetch API");
//   }
//   return {
//     props: {
//       user,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 10, // In seconds
//   };
// };

const Projects = ({ user, repos }) => {
  console.log(user);
  console.log(repos);

  // const [repos, setRepos] = useState("");
  // const [user, setUser] = useState("");

  // const getUserRepos = async (username) => {
  //   const response = await fetch(
  //     `https://api.github.com/users/${username}/repos`
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   setRepos(data);
  // };

  // const getUser = async (username) => {
  //   const response = await fetch(`https://api.github.com/users/${username}`);
  //   const data = await response.json();
  //   setUser(data);
  //   console.log(data);
  // };

  // console.log(user);

  // useEffect(() => {
  //   getUserRepos("imhalid");
  //   getUser("imhalid");
  // }, []);

  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>
    </div>
  );
};

export default Projects;
