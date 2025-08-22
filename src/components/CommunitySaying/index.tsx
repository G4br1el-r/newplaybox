import { CommumitySayingType } from "@/@types/CommunitySayingType";
import Comments from "./Comments";

interface CommunitySayingProps {
  CommunitySayingData: CommumitySayingType[];
}
export default function CommunitySaying({
  CommunitySayingData,
}: CommunitySayingProps) {
  const photoPerson = [
    "/pessoa1.webp",
    "/pessoa2.webp",
    "/pessoa3.webp",
    "/pessoa4.webp",
    "/pessoa5.webp",
  ];

  return (
    <section className="flex w-screen flex-col gap-5 px-3">
      <h2 className="text-[1.2rem] md:text-[1.8rem]">
        What the Community Is Saying Now
      </h2>
      <div className="flex w-full flex-col gap-3 xl:grid xl:grid-cols-2">
        {CommunitySayingData.map((comment, index) => (
          <Comments key={comment.id} {...comment} photo={photoPerson[index]} />
        ))}
      </div>
    </section>
  );
}
