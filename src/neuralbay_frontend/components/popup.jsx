import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog
import { Button } from "./ui/button

export default function Popup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="max-lg:w-full h-12 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
          >
            <g clipPath="url(#clip0_4160_1199)">
              <path
                d="M6.60231 9.36261C6.25356 9.24636 6.25356 8.75388 6.60231 8.63763L8.64937 7.95599C9.09936 7.80595 9.50823 7.55316 9.84355 7.21765C10.1789 6.88214 10.4314 6.47314 10.5812 6.02306L11.2629 3.97706C11.3791 3.62831 11.8716 3.62831 11.9879 3.97706L12.6695 6.02412C12.8195 6.47412 13.0723 6.88298 13.4078 7.2183C13.7433 7.55363 14.1524 7.80619 14.6024 7.95599L16.6484 8.63763C16.7248 8.6627 16.7913 8.71124 16.8384 8.77633C16.8856 8.84143 16.911 8.91975 16.911 9.00012C16.911 9.0805 16.8856 9.15882 16.8384 9.22391C16.7913 9.28901 16.7248 9.33755 16.6484 9.36261L14.6014 10.0443C14.1515 10.1942 13.7427 10.4468 13.4074 10.7821C13.0721 11.1175 12.8194 11.5262 12.6695 11.9761L11.9879 14.0232C11.9628 14.0995 11.9143 14.166 11.8492 14.2132C11.7841 14.2603 11.7057 14.2857 11.6254 14.2857C11.545 14.2857 11.4667 14.2603 11.4016 14.2132C11.3365 14.166 11.2879 14.0995 11.2629 14.0232L10.5812 11.9761C10.4313 11.5262 10.1787 11.1175 9.84336 10.7821C9.50804 10.4468 9.09925 10.1942 8.64937 10.0443L6.60231 9.36261ZM1.2136 13.4451C1.16783 13.4299 1.12801 13.4008 1.09978 13.3617C1.07155 13.3226 1.05636 13.2756 1.05636 13.2274C1.05636 13.1792 1.07155 13.1322 1.09978 13.0931C1.12801 13.054 1.16783 13.0248 1.2136 13.0097L2.44162 12.6007C2.98905 12.4179 3.41812 11.9888 3.60095 11.4414L4.00994 10.2133C4.02509 10.1676 4.05429 10.1278 4.09337 10.0995C4.13245 10.0713 4.17943 10.0561 4.22764 10.0561C4.27585 10.0561 4.32284 10.0713 4.36192 10.0995C4.401 10.1278 4.43019 10.1676 4.44535 10.2133L4.85434 11.4414C4.94429 11.7114 5.09589 11.9567 5.29712 12.1579C5.49835 12.3592 5.74368 12.5107 6.01367 12.6007L7.24169 13.0097C7.28745 13.0248 7.32728 13.054 7.35551 13.0931C7.38374 13.1322 7.39893 13.1792 7.39893 13.2274C7.39893 13.2756 7.38374 13.3226 7.35551 13.3617C7.32728 13.4008 7.28745 13.4299 7.24169 13.4451L6.01367 13.8541C5.74368 13.944 5.49835 14.0956 5.29712 14.2969C5.09589 14.4981 4.94429 14.7434 4.85434 15.0134L4.44535 16.2414C4.43019 16.2872 4.401 16.327 4.36192 16.3553C4.32284 16.3835 4.27585 16.3987 4.22764 16.3987C4.17943 16.3987 4.13245 16.3835 4.09337 16.3553C4.05429 16.327 4.02509 16.2872 4.00994 16.2414L3.60095 15.0134C3.511 14.7434 3.3594 14.4981 3.15817 14.2969C2.95694 14.0956 2.71161 13.944 2.44162 13.8541L1.2136 13.4451ZM0.104995 5.97445C0.0749037 5.96402 0.0488105 5.94447 0.0303433 5.91852C0.0118761 5.89257 0.00195266 5.86152 0.00195266 5.82967C0.00195266 5.79782 0.0118761 5.76676 0.0303433 5.74081C0.0488105 5.71487 0.0749037 5.69532 0.104995 5.68488L0.922972 5.41222C1.28863 5.29069 1.57503 5.00429 1.69656 4.63863L1.96922 3.82066C1.97965 3.79056 1.9992 3.76447 2.02515 3.746C2.0511 3.72754 2.08216 3.71761 2.11401 3.71761C2.14586 3.71761 2.17691 3.72754 2.20286 3.746C2.22881 3.76447 2.24836 3.79056 2.25879 3.82066L2.53145 4.63863C2.5914 4.81883 2.69253 4.98258 2.82681 5.11686C2.9611 5.25115 3.12484 5.35228 3.30504 5.41222L4.12302 5.68488C4.15311 5.69532 4.1792 5.71487 4.19767 5.74081C4.21614 5.76676 4.22606 5.79782 4.22606 5.82967C4.22606 5.86152 4.21614 5.89257 4.19767 5.91852C4.1792 5.94447 4.15311 5.96402 4.12302 5.97445L3.30504 6.24711C3.12484 6.30706 2.9611 6.40819 2.82681 6.54247C2.69253 6.67676 2.5914 6.8405 2.53145 7.0207L2.25879 7.83762C2.24836 7.86771 2.22881 7.89381 2.20286 7.91227C2.17691 7.93074 2.14586 7.94066 2.11401 7.94066C2.08216 7.94066 2.0511 7.93074 2.02515 7.91227C1.9992 7.89381 1.97966 7.86771 1.96922 7.83762L1.69656 7.01965C1.57503 6.65399 1.28863 6.36759 0.922972 6.24605L0.106052 5.97445L0.104995 5.97445Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_4160_1199">
                <rect
                  width="16.9091"
                  height="16.9091"
                  fill="white"
                  transform="translate(0 17.4546) rotate(-90)"
                />
              </clipPath>
            </defs>
          </svg>{" "}
          Explore AI Solutions
        </Button>
      </DialogTrigger>
      <DialogContent className="max-lg:w-[90%] bg-[linear-gradient(180deg,#12113D_0%,#070232_100%)]">
        <DialogHeader>
          <DialogTitle className="text-xl">Subscribe to Neuralbay</DialogTitle>
          <DialogDescription className="hidden">
            Subscription Dialog
          </DialogDescription>
        </DialogHeader>

        <form className="flex flex-col lg:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full border-none px-2 py-2 text-sm"
          />
          <Button>Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
