import Link from "next/link";
export const SearchPage = () => {
  return (
    <>
      <h1>This is the Search Page</h1>
      <ul>
        <li>
          <Link href="/search/streamer">Streamer Page</Link>
        </li>
        <li>
          <Link href="/search/sponsors">Sponsor Page</Link>
        </li>
      </ul>
    </>
  );
};
export default SearchPage;
