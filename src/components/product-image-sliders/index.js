import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//89/MTA-4812632/best-seller_best-seller-tromol-set-for-vixion-depan-belakang-_full01.jpg",
  },
  {
    label: "Bird",
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUQLyPwq8s5lFyeJaoH5Ce1ZhLYWWuz9SBcRt8q-7mfN3kyHTN&usqp=CAU",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://awsimages.detik.net.id/community/media/visual/2019/08/23/eccd19df-dac8-47a1-8b99-7cbcd50e5ef9.jpeg?w=700&q=80",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: "10px",
    height: 30,
    maxWidth: 400,
    background: "none",
    flexGrow: 1,
  },
  img: {
    height: 250,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
  },
}));

function ProductImageSliders() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div
      style={{
        // backgroundColor: "white",
        width: "100%",
        marginTop: "15px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: 400,
          background: "none",
          marginTop: "50px",
          flexGrow: 1,
        }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  style={
                    {
                      // borderRadius: "15px",
                    }
                  }
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          variant="dots"
          steps={tutorialSteps.length}
          position="static"
          activeStep={activeStep}
          className={classes.root}
        />
      </div>
    </div>
  );
}

export default ProductImageSliders;
