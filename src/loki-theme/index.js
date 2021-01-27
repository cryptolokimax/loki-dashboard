import colors from "./colors";
import charts from "./charts";
import typography from "./typography";

export default {
  name: "Oxen Theme",
  typography,
  colors,
  root: {
    color: colors.text,
    background: colors.background,
    extend: `
        
        & a {
            color: #f6ecd0;
        }
        `,
  },
  dashboard: {
    header: {
      background: "#12C7BA",
      color: "#000000",
      // boxShadow: "0 1px 1px rgba(0, 0, 0, 0.35)",
      title: {
        fontFamily: "Prompt",
        fontWeight: "600",
        fontSize: "2.8vmin",
      },
    },
  },
  widget: {
    background: "#ffffff",
    extend: `
        border-radius: 2px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .35);
        `,
    wrapper: {
      padding: "0.6vmin",
    },
    header: {
      height: "5vmin",
      background: "#DBF7F5",
      color: "#000000",
      fontFamily: "Prompt",
      fontWeight: "600",
      fontSize: "2.8vmin",
      // extend: `
      //       box-shadow: 0 1px 0 #000000 inset;
      //       border-bottom: 1px solid #000000;
      //       border-radius: 2px 2px 0 0;
      //       `,
      subject: {},
      count: {
        color: "#C3F53A",
        extend: `
                background-color: #1e2836;
                box-shadow: 0 1px 0 rgba(0, 0, 0, 0.5) inset;
                text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
                border-radius: 2px;
                padding: 0.5vmin 0.8vmin;
                `,
      },
      icon: {
        fontSize: "2.2vmin",
        color: "#78be20",
      },
    },
    body: {
      top: "5vmin",
    },
  },
  notifications: {
    item: {
      padding: "1.2vmin 2vmin",
      background: colors.background,
      color: colors.text,
      extend: `
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.15);
            border-radius: 2px;
            `,
    },
  },
  label: {
    extend: `
        border-radius: 2px;
        `,
    main: {
      background: "#654192",
      color: "#C3F53A",
    },
    addon: {
      background: "#654192",
      color: "#C3F53A",
    },
  },
  list: {
    item: {
      extend: `
            border-bottom: 1px solid #28323f;
            &:last-child {
                border-bottom: 0;
            }
            `,
      hover: {
        background: "#654192",
      },
      meta: {
        color: "#DBF7F5",
      },
    },
  },
  charts,
};
