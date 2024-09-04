import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const exampleText = `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brown: {
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
        },
      }
    },
  },
}`;

export default function Home() {
  return (
    <div className="grow flex justify-center text-white">
      <Card className="w-full max-w-[700px] bg-transparent text-white">
        <CardHeader>
          <CardTitle className="text-4xl text-center">
            Generate color palettes for tailwindcss
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Link href="/gen">
            <Button className="w-[200px] bg-white text-black hover:bg-gray-300 active:bg-gray-500">
              Get Started
            </Button>
          </Link>
        </CardFooter>
        <CardContent>
          <SyntaxHighlighter
            language="javascript"
            style={gradientDark}
            className="rounded-lg shadow mx-auto"
          >
            {exampleText}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
    </div>
  );
}
