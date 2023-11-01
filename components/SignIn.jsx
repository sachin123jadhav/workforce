import { useState, useEffect } from "react";

const SignIn = ({ startHours, startMinutes, startSeconds, isStopped }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (!isStopped) {
      const startTime = new Date();
      const interval = setInterval(() => {
        const currentTime = new Date();
        const timeDifference = Math.floor((currentTime - startTime) / 1000); // in seconds
        setElapsedTime(timeDifference);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isStopped]);

  const totalSeconds =
    startHours * 3600 + startMinutes * 60 + startSeconds + elapsedTime;

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <>
      <div className="flex flex-row items-center justify-center mt-10">
        <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center m-2 shadow-lg">
          <p className="text-xl font-semibold text-blue-700">{`${hours
            .toString()
            .padStart(2, "0")}`}</p>
        </div>
        <p className="text-xl font-semibold">:</p>
        <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center m-2 shadow-lg">
          <p className="text-xl font-semibold text-blue-700">{`${minutes
            .toString()
            .padStart(2, "0")}`}</p>
        </div>
        <p className="text-xl font-semibold">:</p>
        <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center m-2 shadow-lg">
          <p className="text-xl font-semibold text-blue-700">{`${seconds
            .toString()
            .padStart(2, "0")}`}</p>
        </div>
      </div>
    </>
  );
};

export default SignIn;

const styles = {
  timerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  timerBox: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: "0 5px",
    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
  },
  timerText: {
    fontSize: 24,
    fontWeight: "600",
  },
  colon: {
    fontSize: 24,
    fontWeight: "600",
    margin: "0 2px",
  },
};
