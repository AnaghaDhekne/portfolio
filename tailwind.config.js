
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette"; 

/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx}'
];
export const theme = {
    extend: {
        backgroundImage: {
            'dot-pattern': 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
        },
        fontFamily: {
            signature: ['var(--font-signature)'],
        },
    },
};
export const plugins = [addVariablesForColors,];

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}
