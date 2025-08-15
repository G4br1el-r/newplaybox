import { CommumitySayingType } from "@/@types/CommunitySayingType";
import Comments from "./Comments";

interface CommunitySayingProps {
  CommunitySayingData: CommumitySayingType[];
}
export default function CommunitySaying({
  CommunitySayingData,
}: CommunitySayingProps) {
  return (
    <section className="flex w-full flex-col gap-5 px-3">
      <h2 className="text-[1.2rem] md:text-[1.8rem]">
        What the Community Is Saying Now
      </h2>
      <div className="flex w-full flex-col gap-3 xl:grid xl:grid-cols-2">
        {CommunitySayingData.map((comment) => (
          <Comments key={comment.id} {...comment} />
        ))}
      </div>
    </section>
  );
}
