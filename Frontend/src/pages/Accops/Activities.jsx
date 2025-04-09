import React, { useState } from "react";
import Selfie from "../../components/extra/Selfie";
import PeripheralsComparison from "../../components/extra/PeripheralsComparison";
import { Card, CardContent, CardMedia } from "@mui/material";
import Faq from "../../components/extra/EmbibeTesting";
import SoftwareCenterApps from "../../components/extra/SoftwareCenterApps";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AiChatBot from "../../components/extra/AiChatBot";
import EmbibeTesting from "../../components/extra/EmbibeTesting";

const Activities = () => {
  const [openSelfie, setOpenSelfie] = useState(false);
  const [openPeripherals, setOpenPeripherals] = useState(false);
  const [openEmbibe, setOpenEmbibe] = useState(false);
  const [openSoftwareCenterApps, setOpenSoftwareCenterApps] = useState(false);
  const [openAiChatBot, setOpenAiChatBot] = useState(false);
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <section className="container pt-10 p-10 flex flex-col h-full overflow-scroll">
      <header className="mb-4 px-6">
        <h2 className="text-4xl font-bold mt-6">Extra Activities</h2>
      </header>
      <div className="h-full flex flex-col justify-center">
        <Slider {...settings}>
          {/* Additional Apps */}
          <Card
            className="activityCard"
            onClick={() => setOpenSoftwareCenterApps(true)}
          >
            <SoftwareCenterApps
              open={openSoftwareCenterApps}
              setOpen={setOpenSoftwareCenterApps}
            />
            <CardMedia
              sx={{ height: 200 }}
              image="/images/extra/additional_apps.webp"
            />
            <CardContent>
              <div className="">
                <p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
                  Research
                </p>
                <h3 className="text-lg font-semibold">Additional Apps</h3>
                <p className="text-sm text-gray-600">
                  Team conducted research to identify and evaluate additional
                  applications
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Peripherals Comparison */}
          <Card
            className="activityCard"
            onClick={() => setOpenPeripherals(true)}
          >
            <PeripheralsComparison
              open={openPeripherals}
              setOpen={setOpenPeripherals}
              heading={""}
            />
            <CardMedia sx={{ height: 200 }} image="/images/extra/1.jpg" />
            <CardContent>
              <div className="">
                <p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
                  Comparison
                </p>
                <h3 className="text-lg font-semibold">
                  Peripherals Comparison
                </h3>
                <p className="text-sm text-gray-600">
                  Explored the key features and differences between mouse and
                  keyboards to choose the best peripherals.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Embibe */}
          <Card className="activityCard" onClick={() => setOpenEmbibe(true)}>
            <EmbibeTesting open={openEmbibe} setOpen={setOpenEmbibe} />

            <CardMedia sx={{ height: 200 }} image="/images/extra/" />
            <CardContent>
              <div className="">
                <p className="bg-blue-100 inline-block px-3 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
                  Testing
                </p>
                <h3 className="text-lg font-semibold">Embibe Testing</h3>
                <p className="text-sm text-gray-600">
                  Our team worked on creating a comprehensive FAQ section for
                  JioCloud PC
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ai Chat Bot */}
          <Card className="activityCard" onClick={() => setOpenAiChatBot(true)}>
            <AiChatBot open={openAiChatBot} setOpen={setOpenAiChatBot} />
            <CardMedia sx={{ height: 200 }} image="/images/extra/ai_bot.jpg" />
            <CardContent>
              <div className="">
                <p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
                  AI Feature
                </p>
                <h3 className="text-lg font-semibold">AI Chat Bot</h3>
                <p className="text-sm text-gray-600">
                  Developed a smart AI ChatBot to handle user queries and FAQs
                  regarding JioPC.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* LearnLite and TeachLite */}
          <Card className="activityCard" onClick={() => setOpenSelfie(true)}>
            <Selfie open={openSelfie} setOpen={setOpenSelfie} />
            <CardMedia sx={{ height: 200 }} image="/images/extra/4.jpg" />
            <CardContent>
              <div className="">
                <p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
                  Testing
                </p>

                <h3 className="text-lg font-semibold">
                  Teachlite and Learnlite
                </h3>
                <p className="text-sm text-gray-600">
                  The team performed testing on the JioTranslate app across
                  different versions.
                </p>
              </div>
            </CardContent>
          </Card>
        </Slider>
      </div>
    </section>
  );
};

export default Activities;
