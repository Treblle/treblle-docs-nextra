import { Button } from "~components/ui/Button";
import { Stack, styled } from "~styled-system/jsx";

export default function Page() {
    return (
        <Stack direction="row" justifyContent="center" alignItems="center">
            <styled.h1 textStyle="h1">Page</styled.h1>
            <Button variant="outline">Click me</Button>
        </Stack>
    );
}
