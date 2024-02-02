import Container from "@/components/Container";
import BettaryReplacement from "@/components/serviceTilce/BettaryReplacement";
import ChipReplacement from "@/components/serviceTilce/ChipReplacement";
import DataRecovery from "@/components/serviceTilce/DataRecovery";

const ServicesSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-center items-center">
        <h1>Services that we provide.</h1>
        <p className="max-w-[80ch] mt-10 mb-20">
          We provide various computer repair services and solutions for our new
          and regular customers. Feel free to find out more below.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <BettaryReplacement></BettaryReplacement>
        <ChipReplacement></ChipReplacement>
        <DataRecovery></DataRecovery>
        <div className="col-span-12 h-[415px] bg-red-500 rounded-2xl"></div>
        <div className="lg:col-span-4 mx-auto md:col-span-6 col-span-12 h-[415px] bg-red-500 rounded-2xl"></div>
        <div className="lg:col-span-4 mx-auto md:col-span-6 col-span-12 h-[415px] bg-red-500 rounded-2xl"></div>
        <div className="lg:col-span-4 mx-auto md:col-span-6 col-span-12 h-[415px] bg-red-500 rounded-2xl"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
