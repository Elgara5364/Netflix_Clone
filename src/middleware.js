import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "id"],

  // Used when no locale matches
  defaultLocale: "id",
  localePath: path.resolve("./public/locales"),
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(id|en)/:path*"],
};
