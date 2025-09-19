import { Link } from "@inertiajs/react";
import { BUTTONS, NAV_ITEMS } from "@/data/home";
import { Button, Container, Typography } from "@/ui";
import { useEffect } from "react";
import { Spiral as Hamburger } from 'hamburger-react'

type NavbarDesktopProps = {
    isActive: string,
    navItems: typeof NAV_ITEMS
    buttonItems: typeof BUTTONS
}

// ! Tidak bisa nav items karena dalam satu halaman
export const NavbarDesktop = ({ ...props }: NavbarDesktopProps) => {
    const { isActive, navItems, buttonItems } = props

    return (
        <Container>

            <div className="hidden md:flex items-center justify-between py-4">
                {/* Logo */}
                <Typography.Text variant="lg/bold">
                    <Link href={'#'}>LOGO.</Link>
                </Typography.Text>

                <div className="flex items-center gap-10">
                    {/* Nav Menu */}
                    <div className="flex gap-6">
                        {navItems.map((item) => {
                            const classes = `${isActive === item.href} ? 'underline decoration`

                            return (
                                <Typography.Text variant="sm/medium" key={item.name} className={classes}>
                                    <Link href={item.href}>{item.name}</Link>
                                </Typography.Text>
                            );
                        })}
                    </div>

                    {/* Buttons */}
                    <div className="hidden lg:flex gap-4">
                        {buttonItems.map((item) => {
                            const IconComponent = item.icon;

                            return (
                                <Button asChild key={item.name} variant={item.variant}>
                                    <Link href={item.href}>
                                        {IconComponent && <IconComponent />}
                                        {item.name}
                                    </Link>
                                </Button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Container>
    )
}

type NavbarMobileProps = {
    onClick: () => void
    isOpen: boolean
    navItems: typeof NAV_ITEMS
    buttonItems: typeof BUTTONS
}

export const NavbarMobile = ({ ...props }: NavbarMobileProps) => {
    const { onClick, isOpen, buttonItems, navItems } = props

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
    }, [isOpen])

    return (
        <>
            <div className="relative z-50 py-4 block md:hidden">
                {/* Top bar always on top */}
                <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-2 px-4  shadow backdrop-blur-[4px] bg-background/50">
                    <Typography.Text variant="md/bold">
                        <Link href="#">LOGO.</Link>
                    </Typography.Text>

                    <button className="flex items-center justify-center " onClick={onClick}>
                        <Hamburger size={18} label="toggle navbar" />
                    </button>
                </div>

                {/* Content Menu */}
                <div
                    className={`fixed inset-0 z-40 flex flex-col gap-10 items-center justify-center transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}
                >
                    <div className="flex flex-col gap-6 text-center">
                        {navItems.map((item) => (
                            <Typography.Text variant="md/medium" key={item.name}>
                                <Link href={item.href}>{item.name}</Link>
                            </Typography.Text>
                        ))}
                    </div>

                    <div className="flex items-center flex-row flex-wrap sm:flex-nowrap justify-center gap-2 *:w-full">
                        {buttonItems.map((item) => {
                            const IconComponent = item.icon
                            return (
                                <Button asChild key={item.name} variant={item.variant}>
                                    <Link href={item.href}>
                                        {IconComponent && <IconComponent />}
                                        {item.name}
                                    </Link>
                                </Button>
                            )
                        })}
                    </div>
                </div>

                {/* Overlay */}
                <div
                    className={`fixed inset-0 z-30 bg-black/5 backdrop-blur-[4px] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                />
            </div>
        </>
    )
}