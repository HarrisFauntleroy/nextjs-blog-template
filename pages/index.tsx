import { Blockquote, Flex, Spoiler, Stack, Text } from "@mantine/core";
import Link from "next/link";
import { Notepad } from "phosphor-react";
import { Layout as MainLayout } from "../components/AppLayout";
import Posts from "../components/Posts";
import Title from "../components/Title";
import { useDailyQuote } from "../hooks/useDailyQuote";
import { Post } from "../lib/posts";
import { getAllPosts } from "./api/posts/tags/[tag]";

type Properties = {
  posts: Post[];
};

const Index = ({ posts }: Properties) => {
  const dailyQuote = useDailyQuote();
  return (
    <MainLayout home>
      <Stack style={{ flex: 1 }}>
        <Stack style={{ flex: 1 }}>
          <Flex justify="space-between" align="center">
            <Title label="Posts" icon={<Notepad />} />
            <Link href="/posts">See all posts</Link>
          </Flex>
          <Posts posts={posts} />
        </Stack>
      </Stack>
      <Spoiler maxHeight={200} showLabel="See full quote" hideLabel="Hide">
        <Blockquote cite={dailyQuote.cite}>
          <Text size="sm">{dailyQuote.quote}</Text>
        </Blockquote>
      </Spoiler>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts(8);

  return {
    props: {
      posts,
    },
  };
}

export default Index;
