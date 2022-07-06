import Link from "next/link";
import classNames from "../util/classNames";

const footer = () => {
  var time = new Date();
  var year = time.getFullYear();
  var fullTime = new Intl.DateTimeFormat("en-EN", {
    weekday: "short",
  }).format(time);

  var min =
    ("0" + time.getHours()).slice(-2) +
    ":" +
    ("0" + time.getMinutes()).slice(-2);

  return (
    <>
      <div
        className={classNames(
          "flex justify-between border-t py-4 text-xs text-slate-600"
        )}
      >
        <div className={classNames("sm:pl-8", "pl-5")}>
          <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en">
            <a className="link">CC BY-NC-SA 4.0</a>
          </Link>{" "}
          2022-PRESENT © Halid Icli
        </div>
        <div className={classNames("sm:pr-8", "pr-5")}>
          Locale: {min} {fullTime}
        </div>
      </div>
    </>
  );
};

export default footer;
