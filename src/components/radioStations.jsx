import React from "react";
import { motion } from "framer-motion";
import triangle from "../images/playBtn.png";
import { setActiveStation } from "../hooks/setActiveStation";

const RadioStations = ({
  Ambient,
  Anime,
  Astral,
  ChillHop,
  Cow,
  Ivy,
  Boy,
  Lofi,
  Chill,
  Jazz,
  Nice,
  Tokyo,
  StationName,
  College,
}) => {
  return (
    <div className="radioList">

    <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.15 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Anime}
          className={
            setActiveStation(StationName) === "Vlaamse Top 30"
              ? "activeStation"
              : "station"
          }
        >
          <img
            className={
              setActiveStation(StationName) === "Vlaamse Top 30"
                ? "activeTriangle"
                : "triangle"
            }
            src={triangle}
            alt=""
          />
          Vlaamse Top 30
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Ambient}
          className={
            setActiveStation(StationName) === "Singles 50 Vlaanderen"
              ? "activeStation"
              : "station"
          }
        >
          <img
            className={
              setActiveStation(StationName) === "Singles 50 Vlaanderen"
                ? "activeTriangle"
                : "triangle"
            }
            src={triangle}
            alt=""
          />
          Singles 50 Vlaanderen
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.25 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Astral}
          className={
            setActiveStation(StationName) === "Astral Throb"
              ? "activeStation"
              : "station"
          }
        >
          <img
            className={
              setActiveStation(StationName) === "Astral Throb"
                ? "activeTriangle"
                : "triangle"
            }
            src={triangle}
            alt=""
          />
          Astral Throb
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.35 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={ChillHop}
          className={
            setActiveStation(StationName) === "ChillHop Music"
              ? "activeStation"
              : "station"
          }
        >
          <img
            className={
              setActiveStation(StationName) === "ChillHop Music"
                ? "activeTriangle"
                : "triangle"
            }
            src={triangle}
            alt=""
          />
          ChillHop Music
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.45 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Cow}
          className={
            setActiveStation(StationName) === "Chilled Cow"
              ? "activeStation"
              : "station"
          }
        >
          <img
            className={
              setActiveStation(StationName) === "Chilled Cow"
                ? "activeTriangle"
                : "triangle"
            }
            src={triangle}
            alt=""
          />
          Chilled Cow
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.55 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Chill}
          className={
            setActiveStation(StationName) === "ChillAF"
              ? "activeStation"
              : "station"
          }
        >
          <img
            className={
              setActiveStation(StationName) === "ChillAF"
                ? "activeTriangle"
                : "triangle"
            }
            src={triangle}
            alt=""
          />
          ChillAF
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.55 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={College}
          className={
            setActiveStation(StationName) === "College Music"
              ? "activeStation"
              : "station"
          }
        >
          <img
            className={
              setActiveStation(StationName) === "College Music"
                ? "activeTriangle"
                : "triangle"
            }
            src={triangle}
            alt=""
          />
          College Music
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.65 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Ivy}
          className={
            setActiveStation(StationName) === "Ivy Records"
              ? "activeStation"
              : "station"
          }
        >
          <img
            className={
              setActiveStation(StationName) === "Ivy Records"
                ? "activeTriangle"
                : "triangle"
            }
            src={triangle}
            alt=""
          />
          Ivy Records
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.75 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Boy}
          className={
            setActiveStation(StationName) === "LofiBoy"
              ? "activeStation"
              : "station"
          }
        >
          <img
            className={
              setActiveStation(StationName) === "LofiBoy"
                ? "activeTriangle"
                : "triangle"
            }
            src={triangle}
            alt=""
          />
          Lofi Boy
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.85 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Lofi}
          className={
            setActiveStation(StationName) === "Vlaamse Top 30"
              ? "activeStation"
              : "station"
          }
        >
          <img
            className={
              setActiveStation(StationName) === "Vlaamse Top 30"
                ? "activeTriangle"
                : "triangle"
            }
            src={triangle}
            alt=""
          />
          <span> Vlaamse Top 30 </span>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.85 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Nice}
          className={
            setActiveStation(StationName) === "Nice Guys"
              ? "activeStation"
              : "station"
          }
        >
          <img
            className={
              setActiveStation(StationName) === "Nice Guys"
                ? "activeTriangle"
                : "triangle"
            }
            src={triangle}
            alt=""
          />
          <span> Nice Guys </span>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1.15 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Jazz}
          className={
            setActiveStation(StationName) === "theJazz Cafe"
              ? "activeStation"
              : "station"
          }
        >
          <img
            className={
              setActiveStation(StationName) === "theJazz Cafe"
                ? "activeTriangle"
                : "triangle"
            }
            src={triangle}
            alt=""
          />
          The Jazz Café
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1.35 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Tokyo}
          className={
            setActiveStation(StationName) === "TOKYO TONES"
              ? "activeStation"
              : "station"
          }
        >
          <img
            className={
              setActiveStation(StationName) === "TOKYO TONES"
                ? "activeTriangle"
                : "triangle"
            }
            src={triangle}
            alt=""
          />
          TOKYO TONES
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RadioStations;
