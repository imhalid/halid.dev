import Nav from "./header";

const Layouts = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 border-red-600 border-8">
      <Nav />
      <div className=""></div>
      {children}
    </div>
  );
};

export default Layouts;
