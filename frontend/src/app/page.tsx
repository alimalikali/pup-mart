
import Header from "@/components/Header";
import Landing from "./(non-dashboard)/landing/page";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default function Home() {

  return (
    <div className=" flex flex-col w-full">
      <Banner title="PUP Opening 2024" subtitle="Join us in Lahore from June 7 – 9 to see what’s coming next." buttonText="Register now" buttonLink="#" />
      <Header />
      <main className="min-h-screen flex-col flex flex-grow w-full h-full justify-center items-center container my-4 mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
