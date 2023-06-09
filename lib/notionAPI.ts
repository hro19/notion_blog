import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
const databaseId: string = process.env.NOTION_DATABASE_ID || '';
const n2m = new NotionToMarkdown({ notionClient: notion });

export const getAllPosts = async () => {
  const posts = await notion.databases.query({
    database_id: databaseId,
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
    database_id: databaseId,
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
    post.tags.find((tag: string) => tag === (tagName || ''))
  );

  return posts;
};

export const getAllTags = async () => {
  const allPosts = await getAllPosts();

  const getTags = allPosts.flatMap((post) => post.tags);
  const setGetTags = new Set(getTags); //配列から重複する要素を取り除きオブジェクトで返す
  return Array.from(setGetTags);
};
