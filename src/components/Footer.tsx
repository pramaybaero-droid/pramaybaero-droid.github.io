import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-graphite-200 bg-graphite-950 px-5 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-serif text-lg font-semibold">{profile.name}</p>
        <p className="text-sm text-graphite-200">
          Granular mechanics, DEM simulations, and computational mechanics.
        </p>
      </div>
    </footer>
  );
}
