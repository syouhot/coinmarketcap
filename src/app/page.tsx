
import Image from "next/image";
import Header from "@/components/Header";
import Trending from "@/components/Trending";
import CMCTable from "@/components/cmc-table/CmcTable";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-10"></div>
      <Trending />
      <div className="mt-20"></div>
      <CMCTable />
    </div>
  );
}
