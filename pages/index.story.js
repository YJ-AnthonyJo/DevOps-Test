// src/stories/Button.story.js
import React from "react";
import Home from "./index";

export default {
    title: "Home Index by tony",
    component: Home,
    args: {
        backgroundColor: "#000",
    },
    argTypes: {
        backgroundColor: { control: "color" },
    },
};
