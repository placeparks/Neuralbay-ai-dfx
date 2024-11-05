"use client";

import { Button } from "../../../../components/ui/button";
import { models } from "../../../../constants";
import { Star } from "lucide-react";
import { useState } from "react";
import { AiOutlineExclamationCircle, AiOutlineHeart } from "react-icons/ai";
import { GoGitBranch } from "react-icons/go";
import { MdVerified } from "react-icons/md";
import { PiStar } from "react-icons/pi";

export default function Details(props) {
  const model = models.find((item) => item.modelId === "model-3");

  // Set active model tag
  const [activeTag, setActiveTag] = useState("Model Details");
  // Tabs for the model details
  const tabs = [
    { icon: <AiOutlineExclamationCircle />, title: "Model Details" },
    { icon: <GoGitBranch />, title: "Files and Versions" },
    { icon: <PiStar />, title: "Ratings and Reviews" },
  ];

  return (
    <div className="flex flex-col pt-20">
      <div className="relative py-12 bg-customBackgroundGreyGrad shadow">
        <div className="container grid grid-cols-10 items-center gap-4 3xl:gap-8 pb-12">
          <div className="col-span-10 lg:col-span-6 grid grid-cols-5 items-stretch gap-6">
            <div className="relative max-lg:h-[220px] col-span-5 lg:col-span-2 py-2">
              <img src={model?.modelImg} fill alt="img" />
            </div>
            <ShortDesc
              modelName={model?.modelName}
              providerImg={model?.providerImg}
              providerName={model?.providerName}
              shortDes={model?.shortDes}
              likes={model?.likes}
              reviews={model?.reviews}
            />
          </div>
          <div className="col-span-10 lg:col-span-4">
            <CurrentPrice modelPrice={model?.modelPrice} />
          </div>
        </div>
        <div className="absolute inset-x-0 -bottom-2 container flex items-center gap-8 py-2 whitespace-nowrap max-md:overflow-x-scroll">
          {tabs.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveTag(item.title)}
              className={`flex items-center gap-2 py-2 border-b-[3px] text-lg ${
                activeTag === item.title
                  ? "border-b-[#7B68EE]"
                  : "text-[#8C8C8C] border-transparent"
              }  cursor-pointer`}
            >
              <p>{item.icon}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#12113D]">
        <div className="container py-12 grid grid-cols-10 items-start gap-4 3xl:gap-8">
          <div
            className={`${
              activeTag === "Files and Versions"
                ? "col-span-10"
                : "col-span-10 lg:col-span-6 lg:mr-28"
            }`}
          >
            {activeTag === "Model Details" ? (
              <ModelDetails
                modelOverview={model?.modelOverview}
                developedBy={model?.developedBy}
                modelType={model?.modelType}
                languages={model?.languages}
                licence={model?.licence}
                modelDesc={model?.modelDesc}
                moreInfo={model?.moreInfo}
              />
            ) : activeTag === "Files and Versions" ? (
              <FilesAndVersions />
            ) : (
              <RatingsAndReviews reviews={model?.reviews} />
            )}
          </div>
          {activeTag !== "Files and Versions" && (
            <div className="col-span-10 lg:col-span-4 space-y-8">
              <Tags modelTags={model?.modelTags} />
              <Provider
                providerImg={model?.providerImg}
                providerName={model?.providerName}
                providerVerified={model?.providerVerified}
                providerLinks={model?.providerLinks}
              />
              <MoreDetails
                projectUrl={model?.projectUrl}
                organizationId={model?.organizationId}
                serviceId={model?.serviceId}
                contributers={model?.contributers}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ShortDesc({
  modelName,
  providerImg,
  providerName,
  shortDes,
  likes,
  reviews,
}) {
  return (
    <div className="col-span-5 lg:col-span-3 flex flex-col items-start justify-center gap-2 3xl:gap-4">
      <h3 className="text-3xl font-medium">Generate Image</h3>
      <div className="flex items-center gap-2">
        <img
          src={providerImg}
          alt="img"
          className="w-8 h-8 rounded-full object-cover"
        />
        <p className="text-muted">{providerName}</p>
      </div>
      <p className="">{shortDes}</p>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <AiOutlineHeart />
          <p className="text-muted">Likes {likes}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <Star fill="#FAC177" className="text-[#FAC177] w-4 h-4" />
            <Star fill="#FAC177" className="text-[#FAC177] w-4 h-4" />
            <Star fill="#FAC177" className="text-[#FAC177] w-4 h-4" />
            <Star fill="#FAC177" className="text-[#FAC177] w-4 h-4" />
            <Star fill="" className="text-[#FAC177] w-4 h-4" />
          </div>
          <p className="text-muted">{reviews.length} Reviews</p>
        </div>
      </div>
    </div>
  );
}

function CurrentPrice({ modelPrice }) {
  return (
    <div className="bg-[#12113D] p-6 space-y-4 rounded-2xl">
      <p>Current Price</p>
      <div className="flex items-end gap-2">
        <p className="text-4xl font-customBold">{modelPrice.eth} ETH</p>
        <p className="text-lg">${modelPrice.dollar}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
          <Button className="w-full rounded-lg">Buy Now</Button>
          <a href="/marketplace/generate-image/test">
          <Button variant="secondary" className="w-full rounded-lg">Test Run</Button>
          </a>
        </div>
    </div>
  );
}

function ModelDetails({
  modelOverview,
  developedBy,
  modelType,
  languages,
  licence,
  modelDesc,
  moreInfo,
}) {
  return (
    <div className="grid gap-6">
      {/* Overview */}
      <div className="grid gap-4">
        <h3 className="text-[1.5rem] font-semibold">Overview</h3>
        <p className="text-muted leading-relaxed">{modelOverview}</p>
      </div>
      {/* Model Details */}
      <div className="grid gap-4">
        <h3 className="text-[1.5rem] font-semibold">Model Details</h3>
        <div className="grid gap-4">
          <p className="font-medium">
            Developed By:{" "}
            <span className="font-normal text-muted">{developedBy}</span>
          </p>
          <p className="font-medium">
            Model Type:{" "}
            <span className="font-normal text-muted">{modelType}</span>
          </p>
          <p className="font-medium">
            Language(s):{" "}
            <span className="font-normal text-muted">{languages}</span>
          </p>
          <p className="font-medium">
            License: <span className="font-normal text-muted">{licence}</span>
          </p>
          <p className="font-medium">
            Model Description:{" "}
            <span className="font-normal text-muted">{modelDesc}</span>
          </p>
          <p className="font-medium">
            Resources for more information:{" "}
            <span className="font-normal text-muted">{moreInfo}</span>
          </p>
        </div>
      </div>
      {/* Use Cases */}
      <div className="grid gap-4">
        <h3 className="text-[1.5rem] font-semibold">Use Cases</h3>
        <div className="grid gap-4">
          <p className="text-lg leading-normal font-medium">Direct Use</p>
          <ul className="leading-normal list-disc list-inside space-y-2">
            <p className="text-muted">
              The model is intended for research purposes only. Possible
              research areas and tasks include
            </p>
            <li className="text-muted">
              Safe deployment of models which have the potential to generate
              harmful content.
            </li>
          </ul>

          <p className="text-lg leading-normal font-medium">
            Misuse and Malicious Use
          </p>
          <ul className="leading-normal list-disc list-inside space-y-2">
            <p className="text-muted">
              Using the model to generate content that is cruel to individuals
              is a misuse of this model. This includes, but is not limited to:
            </p>
            <li className="text-muted">
              Safe deployment of models which have the potential to generate
              harmful content.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function FilesAndVersions() {
  return <div>FilesAndVersions</div>;
}

function RatingsAndReviews({ reviews }) {
  return (
    <div className="space-y-4">
      <h3 className="text-[1.5rem] font-semibold">Ratings and Reviews</h3>
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          <Star fill="#FAC177" className="text-[#FAC177] w-4 h-4" />
          <Star fill="#FAC177" className="text-[#FAC177] w-4 h-4" />
          <Star fill="#FAC177" className="text-[#FAC177] w-4 h-4" />
          <Star fill="#FAC177" className="text-[#FAC177] w-4 h-4" />
          <Star fill="" className="text-[#FAC177] w-4 h-4" />
        </div>
        <p className="text-sm text-muted">{reviews.length} Reviews</p>
      </div>
      <div className="grid gap-8 pt-4">
        {reviews.map((item, index) => (
          <div key={index} className="flex max-md:flex-col gap-4 items-start">
            <img
              src={item.userImg}
              alt="img"
              className="w-14 h-14 object-cover rounded-full lg:mt-2"
            />
            <div className="w-[90%] grid gap-2">
              <h5 className="text-lg font-medium">{item.userName}</h5>
              <div className="flex gap-2 items-center">
                <div className="flex">
                  <Star fill="#FAC177" className="text-[#FAC177] w-4 h-4" />
                  <Star fill="#FAC177" className="text-[#FAC177] w-4 h-4" />
                  <Star fill="#FAC177" className="text-[#FAC177] w-4 h-4" />
                  <Star fill="#FAC177" className="text-[#FAC177] w-4 h-4" />
                  <Star fill="" className="text-[#FAC177] w-4 h-4" />
                </div>
                <h4 className="font-medium">{item.title}</h4>
              </div>
              <p className="text-muted">Reviewed On {item.reviewedOn}</p>
              <p className="text-muted">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Tags({ modelTags }) {
  return (
    <div className="p-6 bg-background rounded-2xl space-y-8">
      <p className="text-2xl font-semibold">Tags</p>
      <div className="flex flex-wrap gap-4">
        {modelTags.map((item, index) => (
          <p
            key={index}
            className={`bg-[#0E0C3A] text-sm text-[#7B68EE] px-3 py-1 rounded-lg`}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function Provider({
  providerImg,
  providerName,
  providerVerified,
  providerLinks,
}) {
  return (
    <div className="p-6 bg-background rounded-2xl space-y-8">
      <h4 className="text-[1.5rem] font-semibold">Provider</h4>
      <div className="flex items-center gap-4">
        <img
          src={providerImg}
          alt="img"
          className="w-28 h-28 rounded-full object-cover"
        />
        <div className="grid gap-3">
          <div className="flex items-center gap-2">
            <h3 className="text-[1.6875rem] font-customBold leading-none">
              {providerName}
            </h3>
            {providerVerified && (
              <MdVerified className="text-xl text-green-500" />
            )}
          </div>
          <div className="flex items-center gap-x-3 flex-wrap">
            {providerLinks.map((item, index) => (
              <a
                key={index}
                href={item.uri}
                className={`flex items-center gap-1 text-[#ABABAB]`}
              >
                <img src={item.img} alt="img" className="w-5 h-5" />
                <p>{item.url}</p>
              </a>
            ))}
          </div>
          <a href="/" className="font-customBold text-customPrimaryColor">
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}

function MoreDetails({
  projectUrl,
  organizationId,
  serviceId,
  contributers,
}) {
  return (
    <div className="p-6 bg-background rounded-2xl space-y-8">
      <h4 className="text-[1.5rem] font-semibold">Details</h4>
      <div className="grid gap-4">
        <div className="flex items-center gap-1 flex-wrap">
          <p className="font-semibold">Project URL:</p>
          <p className="text-muted">{projectUrl}</p>
        </div>
        <div className="flex items-center gap-1 flex-wrap">
          <p className="font-semibold">Organization ID:</p>
          <p className="text-muted">{organizationId}</p>
        </div>
        <div className="flex items-center gap-1 flex-wrap">
          <p className="font-semibold">Service ID:</p>
          <p className="text-muted">{serviceId}</p>
        </div>
        <div className="flex items-center gap-1 flex-wrap">
          <p className="font-semibold">Contributers:</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {contributers.map((item, index) => (
                <img
                  key={index}
                  src={item.contributerImg}
                  alt="img"
                  className={`w-6 h-6 object-cover rounded-full ${
                    index > 0 && "-ml-3"
                  }`}
                />
              ))}
            </div>
            <p className="text-muted">{contributers.length} Contributers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
