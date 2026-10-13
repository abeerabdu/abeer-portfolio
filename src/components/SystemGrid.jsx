// Persistent blueprint dot-grid background — the "infinite canvas of creation".
export default function SystemGrid() {
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-blueprint-grid opacity-60 pointer-events-none"
      />
    );
  }