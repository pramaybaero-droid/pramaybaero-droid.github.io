type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-graphite-200 bg-white/70 px-2.5 py-1 text-xs font-medium text-graphite-700">
      {children}
    </span>
  );
}
