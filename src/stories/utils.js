export const parseHtml = (html) => {
  // convert SSI include to vue instance
  //<!--#include\b(?:(?=(\s+(?:virtual="([^"]*)")|[^\s>]+|\s+))\1)-->
  return html.replace(/<!--#include\b(?:(?=(\s+(?:virtual="(.*\/(.*)\..*)")|[^\s>]+|\s+))\1)-->/g, '<qg-$3/>').replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
};
