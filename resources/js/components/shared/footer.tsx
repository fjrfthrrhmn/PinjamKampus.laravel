import { Container, Title, Typography, Badge } from "@/ui"
import { FormContact, SocialLinks } from "@/widgets"

export const Footer = () => {
    return (
        <>
            <Container>
                <div className="space-y-10">
                    <div className="space-y-4">
                        <Badge>hello</Badge>
                        <Title text="Lorem ipsum dolor" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <FormContact />
                        <SocialLinks />
                    </div>
                </div>

            </Container>
        
            <div className="text-center bg-foreground text-secondary py-4">
                <Typography.Text variant="xs/normal">
                    Copyright © 2025 - Present PinjamKampus. All Rights Reserved.
                </Typography.Text>
            </div>
        </>
    )
}
