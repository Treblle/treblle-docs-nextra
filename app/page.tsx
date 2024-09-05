import Link from "next/link";

import { Button } from "~components/ui/Button";
import { Stack } from "~styled-system/jsx";

import { Icon } from "../theme/icons";

export default function Page() {
    return (
        <Stack direction="row" bgColor="bg.main" justifyContent="center" alignItems="center">
            <Link href="https://treblle.com">
                <Icon icon="LogoPositive" height="28px" width="100px" />
            </Link>
            <Button asChild>
                <Link href="/introduction">Get Started</Link>
            </Button>
        </Stack>
    );
}
