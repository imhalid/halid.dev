import Link from "next/link";
import Image from "next/image";

const GithubProfileCard = ({
  image,
  name,
  username,
  bio,
  followers,
  following,
  url,
  repos,
}) => {
  return (
    <div className="profileCard">
      <img
        src={image}
        className="absolute top-0 left-0 right-0 saturate-0 w-full object-cover blur-sm"
        alt=""
      />
      <div className="bg-[#FCFCFC]  dark:bg-zinc-900 w-full top-[70px] shadow-[0px_0px_26px_rgb(0,0,10)] rounded-t-2xl h-full right-0 left-0 absolute"></div>
      <Image
        className="rounded-full absolute top-0"
        src={image}
        width={100}
        height={100}
      />
      <div className="z-1 relative">
        <h1 className="font-semibold text-2xl leading-none">{name}</h1>
        <p className="opacity-50 text-sm">{username}</p>
        <p className="font-medium mt-2">{bio}</p>
        <div className="flex text-sm justify-between mt-1">
          <p>
            <span className="font-bold">{followers}</span> Followers
          </p>
          <p>
            <span className="font-bold">{following}</span> Following
          </p>
        </div>
        <Link href={url}>
          <a>
            <p className="bg-blue-200 text-blue-900  hover:scale-[1.02] hover:shadow-md hover:shadow-orange-100/30 transition-all text-center p-3 mt-4 rounded-xl">
              <span className="font-bold">{repos}</span> Public Repos
            </p>
          </a>
        </Link>

        {/* <p>{user.hireable ? "hireable" : "injob"}</p> */}
        {/* <p>{user.created_at} created date</p> */}
        {/* <p>{user.updated_at} updated at</p> */}
      </div>
    </div>
  );
};

export default GithubProfileCard;
