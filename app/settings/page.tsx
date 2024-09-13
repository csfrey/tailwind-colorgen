"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import TransitionLink from "@/components/utils/TransitionLink";
import { useGen } from "@/context/GenContext";
import { calculateColor } from "@/lib/colors";
import { useEffect, useMemo } from "react";
import { SketchPicker } from "react-color";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const numericExample = `brand: {
  50: '#fdf8f6',
  100: '#f2e8e5',
  200: '#eaddd7',
  300: '#e0cec7',
  400: '#d2bab0',
  500: '#bfa094',
  600: '#a18072',
  700: '#977669',
  800: '#846358',
  900: '#43302b',
}`;

const semanticExample = `brand: {
  lighter: '#f2e8e5',
  light: '#e0cec7',
  normal: '#bfa094',
  dark: '#977669',
  darker: '#43302b',
}`;

type ColorOption = {
  [key: string]: string | undefined;
};

const Primary = () => {
  const {
    primaryColor,
    secondaryColor,
    outputStyle,
    setPrimaryColor,
    setSecondaryColor,
    setOutputStyle,
  } = useGen();

  // TODO: figure out how to calculate colors
  const secondaryOptions: ColorOption = useMemo(() => {
    if (!primaryColor) {
      return {};
    }

    const hex = primaryColor.toString();

    return {
      c1: calculateColor(hex, 160),
      c2: calculateColor(hex, 180),
      c3: calculateColor(hex, 200),
      a1: calculateColor(hex, -20),
      a2: calculateColor(hex, 20),
    };
  }, [primaryColor]);

  return (
    <div className="text-white flex justify-center my-16 ">
      <Card className="w-full max-w-[600px] text-white bg-slate-950 shadow bg-opacity-20">
        <CardHeader className="text-center text-4xl">
          Pick your brand color
        </CardHeader>
        <CardContent className="flex flex-col">
          <div className="flex gap-4">
            <SketchPicker
              className="text-black"
              color={primaryColor}
              onChange={(color) => setPrimaryColor(color.hex)}
            />
            <div className="flex flex-col justify-evenly items-center bg-white p-2 rounded grow">
              <div
                className="w-32 h-32 rounded flex justify-center items-center text-black text-center"
                style={{
                  backgroundColor: primaryColor?.toString(),
                }}
              >
                {!primaryColor && "Pick a color, any color"}
              </div>
              <div className="text-black">
                {primaryColor?.toString().toUpperCase()}
              </div>
            </div>
          </div>
        </CardContent>
        <CardHeader className="text-center text-4xl">
          Pick your highlight color
        </CardHeader>
        <CardContent className="mx-8">
          <ToggleGroup
            type="single"
            className="flex flex-col space-y-2"
            disabled={!primaryColor}
            onValueChange={(key) => setSecondaryColor(secondaryOptions[key])}
          >
            <div className="flex items-center space-x-2">
              <div className="grow text-lg">Complementary</div>
              <ToggleGroupItem
                value="c1"
                variant="outline"
                aria-label="Complementary 1"
                className="h-24 w-24 p-2"
              >
                <div
                  className="h-full w-full rounded"
                  style={{
                    backgroundColor: secondaryOptions?.c1,
                  }}
                />
              </ToggleGroupItem>
              <ToggleGroupItem
                value="c2"
                variant="outline"
                aria-label="Complementary 2"
                className="h-24 w-24 p-2"
                onSelect={() => setSecondaryColor(secondaryOptions?.c2)}
              >
                <div
                  className="h-full w-full rounded"
                  style={{
                    backgroundColor: secondaryOptions?.c2,
                  }}
                />
              </ToggleGroupItem>
              <ToggleGroupItem
                value="c3"
                variant="outline"
                aria-label="Complementary 3"
                className="h-24 w-24 p-2"
                onSelect={() => setSecondaryColor(secondaryOptions?.c3)}
              >
                <div
                  className="h-full w-full rounded"
                  style={{
                    backgroundColor: secondaryOptions?.c3,
                  }}
                />
              </ToggleGroupItem>
            </div>
            <div className="flex items-center space-x-2">
              <div className="grow text-lg">Analagous</div>
              <ToggleGroupItem
                value="a1"
                variant="outline"
                aria-label="Analagous 1"
                className="h-24 w-24 p-2"
                onSelect={() => setSecondaryColor(secondaryOptions?.a1)}
              >
                <div
                  className="h-full w-full rounded"
                  style={{
                    backgroundColor: secondaryOptions?.a1,
                  }}
                />
              </ToggleGroupItem>
              <ToggleGroupItem
                value="a2"
                variant="outline"
                aria-label="Analagous 2"
                className="h-24 w-24 p-2"
                onSelect={() => setSecondaryColor(secondaryOptions?.a2)}
              >
                <div
                  className="h-full w-full rounded"
                  style={{
                    backgroundColor: secondaryOptions?.a2,
                  }}
                />
              </ToggleGroupItem>
            </div>
          </ToggleGroup>
        </CardContent>
        <CardHeader className="text-center text-4xl">
          Pick your output styles
        </CardHeader>
        <CardContent>
          <ToggleGroup
            type="multiple"
            className="flex justify-evenly"
            onValueChange={(styles) => setOutputStyle(styles)}
          >
            <ToggleGroupItem
              value="numeric"
              className="text-xl flex flex-col space-y-2 h-full pb-2"
            >
              <div>Numeric</div>
              <SyntaxHighlighter
                language="javascript"
                style={gradientDark}
                className="rounded shadow text-left"
              >
                {numericExample}
              </SyntaxHighlighter>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="semantic"
              className="text-xl flex flex-col space-y-2 h-full pb-2"
            >
              <div>Semantic</div>
              <SyntaxHighlighter
                language="javascript"
                style={gradientDark}
                className="rounded shadow text-left"
              >
                {semanticExample}
              </SyntaxHighlighter>
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
        <CardFooter>
          {primaryColor &&
          secondaryColor &&
          outputStyle &&
          outputStyle.length > 0 ? (
            <TransitionLink href="/output" className="w-full">
              <Button className="w-full bg-white text-black hover:bg-gray-300 active:bg-gray-400">
                Okay
              </Button>
            </TransitionLink>
          ) : (
            <Button
              disabled
              className="w-full bg-white text-black hover:bg-gray-300 active:bg-gray-400"
            >
              Okay
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Primary;
