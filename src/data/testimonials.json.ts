export interface Template {
    url: string;
    image: string;
    name: string;
  };
  const one: Template = {
    url: "/components/1",
    image: "/components/1.png",
    name: "1"
  };
  const two: Template = {
    url: "/components/2",
    image: "/components/2.png",
    name: "2"
  };
  const three: Template = {
    url: "/components/3",
    image: "/components/3.png",
    name: "3"
  };
  const four: Template = {
    url: "/components/4",
    image: "/components/4.png",
    name: "4"
  };
  const five: Template = {
    url: "/components/5",
    image: "/components/5.png",
    name: "5"
  };
  export const byName = {
    one,
    two,
    three,
    four,
    five

  };
  export const testimonials = Object.values(byName);
