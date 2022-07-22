const TimeSpliter = ({ x }) => {
  //delete T and Z and replace with " "
  const time = x.replace("T", " ").replace("Z", " ");
  const splitTime = time.split(" ");
  //console.log(sliceTime);
  return splitTime[0];
};

export default TimeSpliter;
