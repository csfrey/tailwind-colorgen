"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { useGen } from "@/context/GenContext";
import { calculateNumericShades, calculateSemanticShades } from "@/lib/colors";
import { useMemo } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Output = () => {
  const { primaryColor, secondaryColor, outputStyle } = useGen();

  const primaryNumericShades = useMemo(() => {
    const m = primaryColor
      ? calculateNumericShades(primaryColor.toString())
      : new Map();
    return Array.from(m);
  }, [primaryColor, outputStyle]);

  console.log(primaryNumericShades);

  return (
    <div className="grow flex justify-center text-white mt-12">
      <Card className="w-full max-w-[600px] text-white bg-slate-950 shadow bg-opacity-20">
        <CardHeader className="text-center text-4xl">Your theme</CardHeader>
        <CardDescription className="text-center">
          Copy and paste this into your <code>tailwind.config.js</code>
        </CardDescription>
        <CardContent>
          <div className="">
            <div>Primary</div>
            <div
              className="h-12 w-12"
              style={{ backgroundColor: primaryColor?.toString() }}
            />
            <div>Shades</div>
            <div className="flex justify-evenly">
              {primaryNumericShades.map((kv) => (
                <div className="flex flex-col justify-center items-center">
                  <div
                    className="h-12 w-12"
                    style={{ backgroundColor: kv[1] }}
                  />
                  <div>{kv[0]}</div>
                </div>
              ))}
            </div>
          </div>
          <SyntaxHighlighter
            language="javascript"
            style={gradientDark}
            className="rounded shadow text-left"
          >
            hello world
          </SyntaxHighlighter>
        </CardContent>
      </Card>
    </div>
  );
};

export default Output;
