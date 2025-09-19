import { BUTTONS, NAV_ITEMS } from '@/data/home';
import { NavbarDesktop, NavbarMobile } from '@/ui';
import { useCallback, useState } from 'react';

/**
 * Navigation component that renders both desktop and mobile navigation bars
 * @component
 *
 * @property {boolean} open - State to control mobile navigation menu visibility
 * @property {function} handleOpen - Callback function to toggle mobile navigation menu
 */
export const Navigation = () => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = useCallback(
        (state: boolean) => {
            setOpen(!state);
        },
        [],
    );

    return (
        <>
            <NavbarDesktop navItems={NAV_ITEMS} isActive="/" buttonItems={BUTTONS} />
            <NavbarMobile isOpen={open} onClick={() => handleOpen(open)} navItems={NAV_ITEMS} buttonItems={BUTTONS} />
        </>
    );
};
