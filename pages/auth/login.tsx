import { useState } from "react";
import Link from "next/link";
import {
  Heading,
  Link as CLink,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormControl,
  FormLabel,
  Flex,
  Center,
} from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    if (name == "email") {
      setEmail(value);
    } else if (name == "password") {
      setPassword(value);
    }
  };

  return (
    <Center>
      <Flex direction="column" align="center" w="90%" paddingTop="50px">
        <Heading as="h4" size="sm" mb="1.5rem">
          Login with your email address
        </Heading>
        <FormControl className="loginForm">
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            variant="outline"
            size="lg"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            mb="1.5rem"
          />
          <FormLabel htmlFor="id">Password</FormLabel>
          <InputGroup>
            <Input
              variant="outline"
              size="lg"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              mb="1.5rem"
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Center>
            <Button type="submit" width="250px" mb="1.5rem">
              Login
            </Button>
          </Center>
        </FormControl>
        <div>
          <p>
            Don&apos;t have an account? Register{" "}
            <Link href="/auth/register" passHref >
              <CLink href="#">here</CLink>
            </Link>
          </p>
        </div>
      </Flex>
    </Center>
  );
};
export default Login;
