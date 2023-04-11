import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({
  auth: 'secret_MAcIXdXmRXGlCHo3NjYc3PqHT7Vl0du1GYt1Nc0KYXM',
});
const database_id: string = '9d06b4f4ca7e4651a96b3f4d3e9405a7';
const n2m = new NotionToMarkdown({ notionClient: notion });

export const getAllPosts = async () => {
  const posts = await notion.databases.query({
    database_id: database_id,
    page_size: 100,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  const allPosts = posts.results;

  // return allPosts;
  return allPosts.map((post) => {
    return getPageMetaData(post);
  });
};

const getPageMetaData = (post: any) => {
  const getTags = (tags: any) => {
    const allTags = tags.map((tag: any) => {
      return tag.name;
    });

    return allTags;
  };

  return {
    id: post.id,
    title: post.properties.Title.title[0].plain_text,
    // description: post.properties.Description.rich_text[0].plain_text,
    date: post.properties.Date.date.start,
    slug: post.properties.Slug.rich_text[0].plain_text,
    tags: getTags(post.properties.Tags.multi_select),
    thumbnail: post.properties.Thumbnail.files[0].file.url,
  };
};

export const getSinglePost = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: database_id,
    filter: {
      property: 'Slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const page = response.results[0];
  // console.log(page);
  const metadata = getPageMetaData(page);
  // console.log(metadata);
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdBlocks);
  // console.log(mdString);

  return {
    metadata,
    markdown: mdString,
  };
};

export const getPostsByTag = async (tagName: string | undefined) => {
  const allPosts = await getAllPosts();
  const posts = allPosts.filter((post) =>
    post.tags.find((tag: string) => tag === tagName)
  );

  return posts;
};
