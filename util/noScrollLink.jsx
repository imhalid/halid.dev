import Link from "next/link";

const NoScrollLink = ({ children, href }) => (
  <Link href={href}>{children}</Link>
);

export default NoScrollLink;
