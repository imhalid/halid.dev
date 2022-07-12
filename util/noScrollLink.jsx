import Link from "next/link";

const NoScrollLink = ({ children, href }) => (
  <Link href={href} scroll={false}>
    {children}
  </Link>
);

export default NoScrollLink;
