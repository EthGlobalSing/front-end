"use client";

import { FC } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { dynamic_env } from "./environment/dynamic";

const Providers: FC<any> = ({ children }) => {
  return (
    <NextUIProvider>
      <DynamicContextProvider
        settings={{
          environmentId: dynamic_env,
        }}
      >
        {children}
      </DynamicContextProvider>
    </NextUIProvider>
  );
};

export default Providers;