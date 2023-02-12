export default function Keyboard({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      width="36"
      height="36"
      stroke-width="1.25"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"></path>
      <path d="M6 10l0 0"></path>
      <path d="M10 10l0 0"></path>
      <path d="M14 10l0 0"></path>
      <path d="M18 10l0 0"></path>
      <path d="M6 14l0 .01"></path>
      <path d="M18 14l0 .01"></path>
      <path d="M10 14l4 0"></path>
    </svg>
  );
}
