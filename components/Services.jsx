import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      " Web design is the process of creating websites that are displayed on the internet. It involves combining various elements such as layout, content, graphics, and user experience to create an appealing and functional website.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Web development is the work involved in developing a website for the Internet or an intranet.Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "Mobile app development is the act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital assistants (PDA), enterprise digital assistants (EDA), or mobile phones.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                key={index}
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 items-center relative"
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4 ">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
