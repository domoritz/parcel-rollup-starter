import embed from "vega-embed";

/**
 * Hello World;
 */
embed(
  "#vis",
  {
    mark: "bar",
    data: {
      url: ""
    },
    encoding: {}
  },
  { defaultStyle: true }
);
