import NextLink from "next/link";

export const components = {
  h1: (props) => (
    <h2
      className="mt-12 mb-8 border-t-2 border-rose-100/[15%] pt-9 text-3xl font-medium text-rose-100/90"
      {...props}
    />
  ),
  h2: (props) => (
    <h3
      className="mt-12 mb-8 border-t-2 border-rose-100/[15%] pt-9 text-2xl font-medium text-rose-100/90"
      {...props}
    />
  ),
  h3: (props) => (
    <h4
      className="mt-12 mb-8 text-xl font-medium text-rose-100/90"
      {...props}
    />
  ),
  h4: (props) => (
    <h5 className="mt-6 mb-5 text-lg font-medium text-rose-100/90" {...props} />
  ),
  p: (props) => <p className="mb-5 leading-7" {...props} />,
  a: ({ href = "", ...props }) => {
    if (href.startsWith("http")) {
      return <a href={href} target="_blank" rel="noopener" {...props} />;
    }

    return (
      <NextLink href={href} passHref>
        <a {...props} />
      </NextLink>
    );
  },
  hr: (props) => (
    <hr {...props} className="my-12 border-t-2 border-rose-100/[15%]" />
  ),
  ul: (props) => <ul className="mb-6" {...props} />,
  ol: (props) => (
    <ol className="my-12 list-decimal pl-10 leading-7" {...props} />
  ),
  li: (props) => (
    <li
      className="relative my-3 pl-7 before:absolute before:left-1 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-rose-100/20"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold" {...props} />,

  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-4 border-rose-200/10 pl-4 italic lg:-mx-12"
      {...props}
    />
  ),
  del: (props) => <del className="line-through" {...props} />,
};
