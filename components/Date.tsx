import { format, formatISO } from "date-fns";

type Props = {
  date: Date;
};
export default function Date({ date }: Props) {
  return (
    <time dateTime={formatISO(date)}>
      <span className="text-[0.7em] text-gray-500 font-display">{format(date, "LLLL d, yyyy")}</span>
    </time>
  );
}
