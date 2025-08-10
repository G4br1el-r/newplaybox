import Comments from "./Comments";

export default function CommunitySaying() {
  return (
    <section className="w-full px-3">
      <h2 className="mb-4 text-[1.2rem]">What the Community Is Saying Now</h2>
      <div className="flex w-full flex-col gap-3">
        <Comments />
        <Comments />
        <Comments />
      </div>
    </section>
  );
}
