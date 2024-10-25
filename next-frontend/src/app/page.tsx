import { getServices } from "@/actions/services";
import Head from "next/head";
import Services from "./services";

export default async function Page() {
  const data = await getServices();

  return (
    <>
      {/* SEO Head section */}
      <Head>
        <title>Why Choose Us</title>
        <meta
          name="description"
          content="Discover why our industry experts and dedicated team provide the highest quality services, ensuring great outcomes and cyber security expertise."
        />
        <meta
          name="keywords"
          content="industry experts, dedicated team, high quality service, cyber security, outcome focused"
        />
        <meta
          property="og:title"
          content="Why Choose Us"
        />
        <meta
          property="og:description"
          content="Find out why our industry experts deliver high-quality results for clients with guaranteed outcomes."
        />
        <meta property="og:image" content="https://img.freepik.com/free-psd/portrait-woman-using-laptop-computer_23-2150116864.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-5/12 mx-auto py-16">
          <h2 className="text-center text-gray-500 mb-2">WHY CHOOSE US</h2>
          <h1 className="text-center text-3xl font-bold mb-4">
            We Are Different From Others
          </h1>
          <p className="text-center text-gray-500 mx-auto mb-12">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Ipsa
            cupiditate accusantium recusandae soluta explicabo hic! Facere unde
            nam accusantium natus?
          </p>

          <Services data={data} />
        </div>
      </div>
    </>
  );
}
