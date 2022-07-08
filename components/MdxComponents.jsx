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
  blockquote: (props) => (
    <blockquote className={classNames("bg-slate-200 px-5")} {...props} />
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

  hr: (props) => <hr {...props} className={classNames("")} />,
  ul: (props) => <ul className={classNames("")} {...props} />,
  ol: (props) => <ol className={classNames("")} {...props} />,
  li: (props) => <li className={classNames("")} {...props} />,
  strong: (props) => <strong className={classNames("")} {...props} />,
  del: (props) => <del className={classNames("")} {...props} />,

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
