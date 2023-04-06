import { Client } from "@notionhq/client";

const notion = new Client({
  auth: "secret_MAcIXdXmRXGlCHo3NjYc3PqHT7Vl0du1GYt1Nc0KYXM",
});

export const getAllPosts = async () => {
  const database_id: string = "9d06b4f4ca7e4651a96b3f4d3e9405a7";

  const posts = await notion.databases.query({
    database_id: database_id,
    page_size: 100,
  });

  const allPosts = posts.results;

  //return allPosts;
  return allPosts.map((post)=> {
    return getPageMetaData(post);
  })
};

const getPageMetaData = (post: Post) => {
  const getTags = (tags) => {
    const allTags = tags.map((tag) => {
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
