// our-domain.com/news

import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News page</h1>
      <ul>
        <li>
          <Link href={"/news/a-different-page"}>
            NextJS Is A Great Framework
          </Link>
        </li>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
