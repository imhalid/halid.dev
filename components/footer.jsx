import Link from "next/link";

const footer = () => {
  return (
    <>
      <div className="container">
        <div className="credit">CC BY-NC-SA 4.0 2022-PRESENT © Halit Icli</div>
        <div className="time">2022 Thu 12:08:56</div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #efefef;
          padding: 15px 0;
          font-size: 12px;
          color: #161616;
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
