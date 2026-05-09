"use client";

import { Bubble } from "@typebot.io/react";

export function TypebotBubble() {
  return (
    <Bubble
      typebot="the-best-questions"
      apiHost="https://viewer.cppem.com.br"
      theme={{
        button: {
          backgroundColor: "#00ff66",
          customIconSrc:
            "https://s3.cppem.com.br/typebot/public/workspaces/cmoueynrf00001dms1c11653l/typebots/g6le7koq32l1p6rup751fibf/bubble-icon?v=1778338428902",
        },
      }}
    />
  );
}
