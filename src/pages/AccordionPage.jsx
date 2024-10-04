import Accordion from "../components/Accordion";

export default function AccordionPage() {
  const items = [
    {
      id: "s1",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "s2",
      label: "Can I use JaveScript on a project?",
      content:
        "You can use JaveScript on any project you want. You can use JaveScript on any project you want. You can use JaveScript on any project you want.",
    },
    {
      id: "s3",
      label: "Can I use CSS on a project?",
      content:
        "You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}
