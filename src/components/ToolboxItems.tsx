import { TechIcon } from "./TechIcon";

export const ToolboxItems = ({
  items,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
}) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.title}
          className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
        >
          <TechIcon component={item.iconType} />
          <span className="font-semibold">{item.title}</span>
        </div>
      ))}
    </div>
  );
};