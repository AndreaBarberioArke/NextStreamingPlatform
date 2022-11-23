import Link from "next/link";
export const Manage = () => {
  const pages = [
    { id: "bilance" },
    { id: "sponsors" },
    { id: "streamers" },
    { id: "teams" },
];

  return (
    <>
      <h1>This is the Manage Page</h1>
      <ul>
        <li>
          <Link href="/manage/bilance">Bilance Page</Link>
        </li>
        <li>
          <Link href="/manage/sponsors">Sponsors Page</Link>
        </li>
        <li>
          <Link href="/manage/streamers">Streamer Page</Link>
        </li>
        <li>
          <Link href="/manage/teams">Teams Page</Link>
        </li>
      </ul>
    </>
  );
};
export default Manage;
