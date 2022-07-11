import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    tag: { type: "string", required: true },
  },
}));

const computedFields = {
  slug: {
    type: "string",
    resolve: (snips) =>
      snips._raw.sourceFileName
        // hello-world.mdx => hello-world
        .replace(/\.mdx$/, ""),
  },
};

const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  // Location of Post source files (relative to `contentDirPath`)
  filePathPattern: `posts/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string", required: true },
    status: { type: "enum", options: ["draft", "published"], required: true },
    tags: {
      type: "list",
      of: Tag,
    },
  },
  // Transform the source file into a content layer document

  computedFields,
}));

const Snippets = defineDocumentType(() => ({
  name: "Snippets",
  contentType: "mdx",
  // Location of Post source files (relative to `contentDirPath`)
  filePathPattern: `snippets/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string", required: true },
    status: { type: "enum", options: ["draft", "published"], required: true },
    tags: {
      type: "list",
      of: Tag,
    },
  },

  computedFields,
}));

const rehypePrettyCodeOptions = {
  theme: {
    light: "github-light",
    dark: "github-dark",
    //double display of themes should be fixed
  },
  tokensMap: {
    // VScode command palette: Inspect Editor Tokens and Scopes
    // https://github.com/Binaryify/OneDark-Pro/blob/47c66a2f2d3e5c85490e1aaad96f5fab3293b091/themes/OneDark-Pro.json
    fn: "entity.name.function",
    objKey: "meta.object-literal.key",
  },
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("line--highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word--highlighted"];
  },
};

const contentLayerConfig = makeSource({
  // Location of source files for all defined documentTypes
  contentDirPath: "data",
  documentTypes: [Post, Snippets],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext";
      return options;
    },
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [
      [rehypeSlug],
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {},
        },
      ],
    ],
  },
});

export default contentLayerConfig;
