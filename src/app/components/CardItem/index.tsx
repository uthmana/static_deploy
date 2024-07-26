export default function CardItem({
  name,
  value,
  className,
}: {
  name: string;
  value?: number | string;
  className?: string;
}) {
  return (
    <p className={`flex gap-1 text-base ${className}`}>
      <span className="font-bold whitespace-nowrap"> {name} :</span>
      <span className="font-thin">{value}</span>
    </p>
  );
}
