import React from "react";

const COLORS = {
  Green: "#00FF00",
  Yellow: "#FFFF00",
  Red: "#FF0000",
  Gray: "#DDDDDD",
  Black: "#000000",
};

const TRAFFIC_LIGHTS_CONTAINER_STYLE = {
  display: "flex",
  flexDirection: "column",
  width: "120px",
  gap: "10px",
  backgroundColor: `${COLORS.Black}`,
  alignItems: "center",
  justifyContent: "center",
  border: `5px solid ${COLORS.Gray}`,
  borderRadius: "20px",
  padding: "10px",
};

const TrafficLightsSystem = () => {
  return (
    <div
      style={{
        width: "80%",
        backgroundColor: "azure",
        justifyItems: "center",
        padding: "20px 20px 20px 20px",
        border: "2px solid",
        borderRadius: "15px",
        marginTop: "20px",
      }}
    >
      <TrafficLightsContainer />
    </div>
  );
};

const TrafficLightsContainer = () => {
  const [color, setColor] = React.useState(COLORS.Green);
  const [shouldLoop, setShouldLoop] = React.useState(false);

  const toggleShouldLoop = () => {
    clearTimeout(currentTimerId);
    setShouldLoop(!shouldLoop);
  };
  const COLOR_TIMING = new Map([
    [COLORS.Red, 5000],
    [COLORS.Yellow, 2000],
    [COLORS.Green, 5000],
  ]);

  const ORDER = [COLORS.Red, COLORS.Yellow, COLORS.Green];

  const currentTimerId = React.useRef(-1);

  const getNextColor = () => {
    return ORDER[(ORDER.indexOf(color) + 1) % ORDER.length];
  };

  //   const loopLights=()=>{
  //     clearTimeout(currentTimerId.current);
  //     const nextColor = getNextColor()
  //     console.log("nextColor: ", nextColor, "current color : ",color)
  //     const nextColorTiming = COLOR_TIMING.get(nextColor);
  //     setColor(nextColor)
  //     console.log("next color timing", nextColorTiming)
  //     currentTimerId.current =  setTimeout(loopLights, nextColorTiming)
  //   }

  React.useEffect(() => {
    if (shouldLoop) {
      clearTimeout(currentTimerId.current);
      const nextColor = getNextColor();
      //   console.log("nextColor: ", nextColor, "current color : ", color);
      const nextColorTiming = COLOR_TIMING.get(color);
      //   console.log("next color timing", nextColorTiming);
      currentTimerId.current = setTimeout(
        () => setColor(nextColor),
        nextColorTiming,
      );
    }
  }, [color, shouldLoop]);
  return (
    <div style={TRAFFIC_LIGHTS_CONTAINER_STYLE} autoFocus={true}>
      <button onClick={toggleShouldLoop}>AUTO</button>
      <TrafficLight
        isOn={color === COLORS.Red}
        color={COLORS.Red}
        onClickHandler={setColor}
        key={COLORS.Red}
        toggleAuto={toggleShouldLoop}
      />
      <TrafficLight
        isOn={color === COLORS.Yellow}
        color={COLORS.Yellow}
        onClickHandler={setColor}
        key={COLORS.Yellow}
        toggleAuto={toggleShouldLoop}
      />
      <TrafficLight
        isOn={color === COLORS.Green}
        color={COLORS.Green}
        onClickHandler={setColor}
        key={COLORS.Green}
        toggleAuto={toggleShouldLoop}
      />
    </div>
  );
};

const TRAFFIC_LIGHT_STYLE = {
  border: "1px solid",
  borderRadius: "50%",
  height: "75px",
  width: "75px",
  cursor: "pointer",
};

const TrafficLight = ({ color, isOn, onClickHandler, toggleAuto }) => {
  return (
    <button
      style={{
        ...TRAFFIC_LIGHT_STYLE,
        backgroundColor: isOn ? color : COLORS.Gray,
      }}
      onClick={(e) => {
        toggleAuto();
        onClickHandler(color);
      }}
    />
  );
};

export default TrafficLightsSystem;
