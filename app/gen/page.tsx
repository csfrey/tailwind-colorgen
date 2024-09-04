import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Generate = () => {
  return (
    <div className="text-white flex justify-center">
      <Card className="bg-transparent text-white border-none">
        <CardHeader>Generate</CardHeader>
        <CardContent className="w-[700px] h-[800px] brand-gradient rounded-lg">
          <div></div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Generate;
