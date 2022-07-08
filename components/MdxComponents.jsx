import NextLink from "next/link";
import classNames from "../util/classNames";
// yazı etiketleri burada şekillendiriliyor
export const components = {
  h1: (props) => (
    <h1
      className={classNames(
        "text-4xl mt-8 text-neutral-800 font-medium",
        "dark:text-sky-100"
      )}
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className={classNames(
        "text-3xl text-neutral-800 mt-8 font-medium",
        "dark:text-sky-100"
      )}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className={classNames(
        "text-2xl text-neutral-800 mt-8 font-medium",
        "dark:text-sky-100"
      )}
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className={classNames(
        "text-xl text-neutral-800 mt-8 font-medium",
        "dark:text-sky-100"
      )}
      {...props}
    />
  ),
  h5: (props) => (
    <h5
      className={classNames(
        "text-lg text-neutral-800 mt-8 font-medium",
        "dark:text-sky-100"
      )}
      {...props}
    />
  ),

  p: (props) => (
    <p
      className={classNames(
        "py-4 text-slate-600 leading-7",
        "dark:text-slate-300"
      )}
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className={classNames(
        "bg-slate-200 dark:bg-neutral-700/25 shadow rounded-lg text-red-700 px-5"
      )}
      {...props}
    />
  ),

  hr: (props) => (
    <hr {...props} className={classNames("my-6 border-t-1 border-rose-500")} />
  ),
  ul: (props) => <ul className={classNames("mb-6")} {...props} />,
  ol: (props) => <ol className={classNames("mb-6")} {...props} />,
  li: (props) => (
    <li
      className={classNames(
        "relative my-3 pl-5 before:absolute before:left-1 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-blue-200"
      )}
      {...props}
    />
  ),
  strong: (props) => <strong className={classNames("font-bold")} {...props} />,
  del: (props) => (
    <del className={classNames("border border-red-600")} {...props} />
  ),
  table: (props) => <table className={classNames("")} {...props} />,
  th: (props) => <th className={classNames("")} {...props} />,
  td: (props) => <td className={classNames("")} {...props} />,
  thead: (props) => <thead className={classNames("")} {...props} />,
  tbody: (props) => <tbody className={classNames("")} {...props} />,
  img: (props) => (
    <img className={classNames("rounded-xl", " shadow ")} {...props} />
  ),

  a: ({ href = "", ...props }) => {
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          className={classNames("text-blue-600 after:content-['_↗']")}
          target="_blank"
          rel="noopener"
          {...props}
        />
      );
    }

    return (
      <NextLink href={href} passHref>
        <a {...props} />
      </NextLink>
    );
  },
};
