import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Home',
        path: '/portfolio',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiIcons.AiOutlineFundProjectionScreen />,
        className: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaInfo />,
        className: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FaIcons.FaEnvelopeOpen />,
        className: 'nav-text'
    }
]