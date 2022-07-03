import Link from "next/link";

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
      <div className="container">
        <div className="credit">
          <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en">
            <a className="link">CC BY-NC-SA 4.0</a>
          </Link>{" "}
          2022-PRESENT © Halid Icli
        </div>
        <div className="time">
          {year} {fullTime} {min}
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #efefef;
          padding: 15px 0;
          font-size: 12px;
          color: #898989;
        }
        .time {
          padding-right: 35px;
        }
        .credit {
          padding-left: 35px;
        }
      `}</style>
    </>
  );
};

export default footer;
