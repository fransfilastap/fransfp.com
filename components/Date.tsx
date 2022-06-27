import { format, formatISO } from "date-fns";

type Props = {
  date: Date;
};
export default function Date({ date }: Props) {
  return (
    <time dateTime={formatISO(date)}>
      <span className="uppercase group-hover:text-white text-xs md:text-[0.8em] font-light text-black font-mono">{format(date, "LLLL d, yyyy")}</span>
    </time>
  );
}
