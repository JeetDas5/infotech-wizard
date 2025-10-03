import React from "react";

const g1 = "/assets/g1.svg";
const g2 = "/assets/g2.svg";
const g3 = "/assets/g3.svg";
const g4 = "/assets/g4.svg";

type CardData = {
  image: string;
  title: string;
  description: string;
};

const CARDS: CardData[] = [
  {
    image: g1,
    title: "A Resume That Passes ATS Filters",
    description:
      "Get a professionally written, keyword-optimized resume that lands in recruiter inboxes — not rejection piles.",
  },
  {
    image: g2,
    title: "A Cover Letter That Gets Read",
    description:
      "Stand out with a cover letter that speaks directly to the role and reflects your strengths.",
  },
  {
    image: g3,
    title: "A LinkedIn Profile That Works For You",
    description:
      "Attract the right eyes, start conversations, and show up in recruiter searches.",
  },
  {
    image: g4,
    title: "Interview Confidence",
    description:
      "Interview preparation with real HR professionals so you speak clearly, confidently, and convincingly.",
  },
];

const Card: React.FC<CardData> = ({ image, title, description }) => (
  <article className="shadow-[0px_4px_16px_rgba(0,_0,_0,_0.08)] rounded-[20px] bg-white flex flex-col items-start p-5 box-border gap-6">
    <div className="w-full flex flex-col items-center gap-4">
      <img
        src={image}
        className="w-full max-w-[260px] h-auto object-contain"
        alt={title}
      />
      <h3 className="w-full text-center font-medium">{title}</h3>
    </div>

    <p className="w-full text-left text-lg leading-[1.6]">{description}</p>
  </article>
);

const Details: React.FC = () => {
  return (
    <section className="w-full flex flex-col gap-4 items-center justify-center py-2.5 px-5">
      <div className="capitalize bg-lightcoral font-semibold px-4 rounded-md py-2">
        What you Get
      </div>

      <div className="w-full relative text-[26px] capitalize font-semibold font-figtree text-black text-center inline-block">
        You&apos;re not just another applicant and your resume shouldn&apos;t
        look like one
      </div>

      <div className="w-full">
        <div className="w-full grid gap-5 text-left text-xl text-black font-figtree grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;
