import { format, formatISO } from "date-fns";

type Props = {
  date: Date;
};
export default function Date({ date }: Props) {
  return (
    <time dateTime={formatISO(date)}>
      <span className="text-gray-500 text-xs">{format(date, "LLLL d, yyyy")}</span>
    </time>
  );
}
