import localFont from "next/font/local";

export const generalSans = localFont({
  src: [
    {
      path: "../assets/GeneralSans/GeneralSans-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../assets/GeneralSans/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "semibold",
    },
  ],
});

export const supreme = localFont({
    src: [
        {
            path: "../assets/Supreme/Supreme-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/Supreme/Supreme-Light.woff2",
            weight: "200",
            style: "light",
        },
        {
            path: "../assets/Supreme/Supreme-Medium.woff2",
            weight: "300",
            style: "medium",
        },
        {
            path: "../assets/Supreme/Supreme-Thin.woff2",
            weight: "100",
            style: "thin",
        }
    ],
});