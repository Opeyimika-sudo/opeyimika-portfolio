import localFont from "next/font/local";

export const generalSans = localFont({
  src: [
    {
      path: "./GeneralSans-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "./GeneralSans-Semibold.woff2",
      weight: "600",
      style: "semibold",
    },
  ],
});

export const supreme = localFont({
    src: [
        {
            path: "./Supreme-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./Supreme-Light.woff2",
            weight: "200",
            style: "light",
        },
        {
            path: "./Supreme-Medium.woff2",
            weight: "300",
            style: "medium",
        },
        {
            path: "./Supreme-Thin.woff2",
            weight: "100",
            style: "thin",
        }
    ],
});