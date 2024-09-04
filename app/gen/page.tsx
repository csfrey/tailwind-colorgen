import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Generate = () => {
  return (
    <div className="text-white flex justify-center">
      <Card className="w-full max-w-[700px] bg-transparent text-white">
        <CardHeader>Generate</CardHeader>
        <CardContent className="h-[800px] brand-gradient rounded-lg">
          <div></div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Generate;
