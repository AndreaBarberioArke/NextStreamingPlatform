import { useRouter } from "next/router";

export const FindSponsor = () => {
  const router = useRouter();
  console.log(router.query);
  console.log(router.pathname);
  
  //qui è dove fare la chiamata al server chiedendo la get di un determinato dato con id di router.query.sponsorId

  return (
    <>
      <h1>This is the sponsor ID specific page</h1>
    </>
  );
};
export default FindSponsor;
