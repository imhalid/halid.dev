import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  // Location of Post source files (relative to `contentDirPath`)
  filePathPattern: `posts/*.mdx`,
  fields: {
    title: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) =>
        post._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  // Location of source files for all defined documentTypes
  contentDirPath: "data",
  documentTypes: [Post],
});
