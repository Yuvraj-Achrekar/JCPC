import React, { useState } from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import SoftwareCenterApps from "../../components/extra/SoftwareCenterApps";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// components import
import PeripheralsTesting from "../../components/extra/PeripheralsTesting";
import Firmware from "../../components/extra/Firmware";
import JioWrite from "../../components/extra/JioWrite";
import Desklet from "../../components/extra/Desklet";
import AiChatBot from "../../components/extra/AiChatBot";
import EmbibeTesting from "../../components/extra/EmbibeTesting";
import EmbibeSectionReport from "../../components/extra/EmbibeSectionReport";
import Desklets from "../../components/extra/Desklet";
import BenchMark from "../../components/extra/Benchmark";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Activities = () => {
  const [openSelfie, setOpenSelfie] = useState(false);
  const [openPeripherals, setOpenPeripherals] = useState(false);
  const [openSoftwareCenterApps, setOpenSoftwareCenterApps] = useState(false);
  const [openJioGenie, setOpenJioGenie] = useState(false);
  const [openBenchmarkTesting, setOpenBenchmarkTesting] = useState(false);
  const [openJioWrites, setOpenJioWrites] = useState(false);
  const [openFirmwareTesting, setOpenFirmwareTesting] = useState(false);
  const [openDesklet, setOpenDesklet] = useState(false);

  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    swipeToSlide: true, // allows touchpad drag to scroll
    draggable: true, // allows mouse drag
    touchMove: true,
    responsive: [
      {
        breakpoint: 1200, // screens <= 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900, // screens <= 768px
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // screens <= 480px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
            sx={{ maxHeight: 465, minHeight: 465 }}
            onClick={() => setOpenSoftwareCenterApps(true)}
          >
            <SoftwareCenterApps
              open={openSoftwareCenterApps}
              setOpen={setOpenSoftwareCenterApps}
            />

            <CardMedia
              sx={{ height: 295 }}
              image="/images/extra/Additional.png"
            />

            <CardContent className="mb-5">
              <div className="">
                <p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
                  Testing
                </p>
                <h3 className="text-lg font-semibold">Additional Apps</h3>
                <p className="text-sm text-gray-600">
                  The team tested over 400 internal apps in the SIT environment
                  to evaluate stability and usability.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Firmware */}
          <Card
            sx={{ maxHeight: 465, minHeight: 465 }}
            onClick={() => setOpenFirmwareTesting(true)}
          >
            <Firmware
              open={openFirmwareTesting}
              setOpen={setOpenFirmwareTesting}
            />
            <CardMedia
              sx={{
                height: 295,
                backgroundPosition: "center top 10%", // Moves the image lower
              }}
              image="/images/extra/Firmware.png"
            />
            <CardContent>
              <div className="">
                <p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
                  Testing
                </p>
                <h3 className="text-lg font-semibold">Firmware Checklist</h3>
                <p className="text-sm text-gray-600">
                  The team tested the different versions of firmwares across
                  multiple hardware devices provided by the product team.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Peripherals Testing */}
          <Card
            sx={{ maxHeight: 465, minHeight: 465 }}
            onClick={() => setOpenPeripherals(true)}
          >
            <PeripheralsTesting
              open={openPeripherals}
              setOpen={setOpenPeripherals}
            />
            <CardMedia
              sx={{ height: 295 }}
              image="/images/extra/Peripherals.png"
            />
            <CardContent>
              <div className="">
                <p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
                  Testing
                </p>
                <h3 className="text-lg font-semibold">Peripherals Testing</h3>
                <p className="text-sm text-gray-600">
                  The team tested wireless keyboards and mice to ensure
                  compatibility and user experience before bundling with the
                  product.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Applet and Deklet */}
          <Card
            sx={{ maxHeight: 465, minHeight: 465 }}
            onClick={() => setOpenDesklet(true)}
          >
            <Desklets open={openDesklet} setOpen={setOpenDesklet} />

            <CardMedia sx={{ height: 295 }} image="/images/extra/Applet.png" />
            <CardContent>
              <div className="">
                <p className="bg-blue-100 inline-block px-3 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
                  Testing
                </p>
                <h3 className="text-lg font-semibold">
                  Applets & Desklets Testing
                </h3>
                <p className="text-sm text-gray-600">
                  The team conducted thorough testing of interactive elements
                  like desklets and applets to ensure their performance and
                  stability.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Embibe */}
          <Card
            sx={{ maxHeight: 465, minHeight: 465 }}
            onClick={() => setOpenSelfie(true)}
          >
            <EmbibeSectionReport open={openSelfie} setOpen={setOpenSelfie} />
            <CardMedia
              sx={{
                height: 295,
                backgroundPosition: "top", // Moves the image lower
              }}
              image="/images/extra/Embibe.png"
            />
            <CardContent>
              <div className="">
                <p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
                  Testing
                </p>
                <h3 className="text-lg font-semibold">
                  Embibe Website Testing
                </h3>
                <p className="text-sm text-gray-600">
                  The team tasted the Embibe LeanLits application, which was
                  being considered for integration with the product.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* BenchMark Testing */}
          <Card
            sx={{ maxHeight: 465, minHeight: 465 }}
            onClick={() => setOpenBenchmarkTesting(true)}
          >
            <BenchMark
              open={openBenchmarkTesting}
              setOpen={setOpenBenchmarkTesting}
            />
            <CardMedia
              sx={{
                height: 295,
                backgroundPosition: "center top 10%", // Moves the image lower
              }}
              image="/images/extra/Benchmarking.png"
            />
            <CardContent>
              <div className="">
                <p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
                  Research
                </p>
                <h3 className="text-lg font-semibold">
                  VDI Performance Benchmarking
                </h3>
                <p className="text-sm text-gray-600">
                  The team benchmarked VDI performance under 25, 15, and 5 Mbps
                  internet speeds to assess usability and responsiveness.
                </p>
              </div>
            </CardContent>
          </Card>

          {/*JioWrite  */}
          <Card
            sx={{ maxHeight: 465, minHeight: 465 }}
            onClick={() => setOpenJioWrites(true)}
          >
            <JioWrite open={openJioWrites} setOpen={setOpenJioWrites} />
            <CardMedia
              sx={{
                height: 295,
                backgroundPosition: "center top 10%", // Moves the image lower
              }}
              image="/images/extra/Apps.png"
            />
            <CardContent>
              <div className="">
                <p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
                  Testing
                </p>
                <h3 className="text-lg font-semibold">
                  JioWrite, JioDesks, JioSheets Testing
                </h3>
                <p className="text-sm text-gray-600">
                  The team tested three applications within the JioWorkspace
                  suite on persistent machines.
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
