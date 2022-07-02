export default function classNames(...args) {
  return args.filter(Boolean).join(" ");
}
