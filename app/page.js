import Bouncetitle from "@/components/Bouncetitle/bouncetitle";
import Findsearch from "@/components/Findsearch/findsearch";
import Header from "@/components/Header/Header";
import Search from "@/components/Search/search";

export default function Home() {
  return (
    <>
      <Header />
      <Findsearch />
      <Search />
      <Bouncetitle />
    </>
  );
}
