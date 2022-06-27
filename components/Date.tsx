import { format, formatISO } from "date-fns";

type Props = {
  date: Date;
};
export default function Date({ date }: Props) {
  return (
    <time dateTime={formatISO(date)}>
      <span className="text-[0.6em] text-black font-display">{format(date, "LLLL d, yyyy")}</span>
    </time>
  );
}
