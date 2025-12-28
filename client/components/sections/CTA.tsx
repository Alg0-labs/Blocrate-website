import JoinWaitlistButton from "@/components/JoinWaitlistButton";

export default function CTA() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-[757px] mx-auto text-center">
        <h2 className="gradient-text text-[64px] font-normal leading-[120%] mb-6">
          Lorem Ipsum Tagline
        </h2>
        <p className="text-brand-gray text-xl font-medium leading-[150%] mb-12">
          Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum
        </p>
        <JoinWaitlistButton variant="simple" size="medium" />
      </div>
    </section>
  );
}

