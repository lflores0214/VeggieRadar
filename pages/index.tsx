import { extendTheme, Box } from "@chakra-ui/react";
export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    brand: { main: "#52BA5D", accent: "#0364F6", text: "#343434" },
  },
});

export default function Home() {
  return (
    <Box bg="brand.main" className="container">
      <p>This is the home page</p>
    </Box>
  );
}
