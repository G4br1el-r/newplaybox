export default function Comments() {
  return (
    <a
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      className="from-purple-dark to-blue-darkest relative h-50 w-full rounded-r-[3px] bg-gradient-to-l p-3"
    >
      <div className="bg-purple-dark absolute top-0 left-0 h-full w-0.5 rounded-l-[3px]" />
      <div className="bg-purple-neon absolute top-2 right-2 h-2 w-2 animate-pulse rounded-full" />
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center justify-between gap-2">
            <p className="text-purple-neon line-clamp-1 w-full text-[0.8rem]">
              TÍTULO DO POST GRANDE PARA COMENTARIOS
            </p>
            <div className="flex w-full items-center justify-between gap-1 text-gray-500">
              <div className="flex items-center gap-1.5">
                <div className="h-4 w-4 rounded-full bg-red-700/50" />
                <p className="text-[0.6rem]">Usuário</p>
              </div>
              <p className="text-[0.6rem]">📅 10/08/2025</p>
            </div>
          </div>
          <p className="line-clamp-4 w-full text-[0.6rem]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et officia
            consequuntur minus aliquam suscipit veritatis praesentium ea
            deleniti id vero, a assumenda! Repellendus voluptatibus repellat
            accusamus incidunt similique quisquam sed!
          </p>
        </div>
        <div className="flex w-full items-center justify-between gap-3 text-[0.6rem] text-gray-500">
          <p>👁️ 2.4K Views</p>
          <p>💬 89 Comments</p>
          <p>❤️ 156 Likes</p>
        </div>
      </div>
    </a>
  );
}
