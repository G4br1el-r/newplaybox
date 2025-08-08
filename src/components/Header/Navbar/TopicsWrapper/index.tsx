interface TopicsWrapperProps {
  title: string;
  children: React.ReactNode;
}
export default function TopicsWrapper({ children, title }: TopicsWrapperProps) {
  return (
    <div className="w-full py-4 text-[0.8rem]">
      <p className="text-blue-light px-4 pb-4 font-bold">{title}</p>
      {children}
    </div>
  );
}
