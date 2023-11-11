import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        'size': 'width, height, margin, padding, transform',
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [
        plugin(({ addVariant, e }: any) => {
            addVariant('label-checked', ({ modifySelectors, separator }: any) => {
                modifySelectors(
                    ({ className }: any) => {
                        const eClassName = e(`label-checked${separator}${className}`); // escape class
                        const yourSelector = 'input[type="radio"]'; // your input selector. Could be any
                        return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
                    }
                )
            })
        }),
      ],
  corePlugins: {
    preflight: true,
  }
}
export default config
