import { useRouter } from "next/router";

// our-domain.com/news/anotherpage

function DetailsPage() {
  const router = useRouter();
  const newsId = (router.query.newsid);

  // send a request to the backend API
  // to fetch the news item with newsId
  return <h1>The Details page</h1>;
}
export default DetailsPage;
