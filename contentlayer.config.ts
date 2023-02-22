import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`, // Type of file to parse (every mdx in all subfolders)
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    summary: {
      type: 'string',
      required: true,
    },
    coverImage: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'json',
      required: true,
      name: {
        type: 'string',
      },
      picture: {
        type: 'string',
      },
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content', // Source directory where the content is located
  documentTypes: [Post],
});
