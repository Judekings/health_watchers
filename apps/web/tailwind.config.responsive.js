// Comprehensive responsive design configuration for Health Watchers
// Tailwind breakpoints:
// - sm: 640px (mobile landscape, small tablets)
// - md: 768px (tablets)
// - lg: 1024px (desktops)
// - xl: 1280px (large desktops)

module.exports = {
  theme: {
    extend: {
      // Minimum touch target sizes for accessibility
      minWidth: {
        touch: '44px',
      },
      minHeight: {
        touch: '44px',
      },
      // Safe area insets for notched devices
      spacing: {
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-top': 'env(safe-area-inset-top)',
      },
      // Responsive typography scale
      fontSize: {
        'mobile-xs': ['0.75rem', { lineHeight: '1rem' }],
        'mobile-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'mobile-base': ['1rem', { lineHeight: '1.5rem' }],
        'tablet-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'tablet-base': ['1rem', { lineHeight: '1.5rem' }],
        'desktop-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'desktop-base': ['1rem', { lineHeight: '1.5rem' }],
      },
    },
  },
  // Mobile-first responsive utilities
  plugins: [
    function ({ addUtilities, addComponents, theme }) {
      // Touch target utilities
      const touchUtilities = {
        '.touch-target': {
          minWidth: '44px',
          minHeight: '44px',
        },
        '.safe-area-bottom': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
        '.safe-area-top': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        // Responsive container utilities
        '.container-narrow': {
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        },
        '.container-content': {
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        },
        // Horizontal scroll prevention
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        // Responsive text truncation
        '.line-clamp-1': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '1',
        },
        '.line-clamp-2': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '2',
        },
        '.line-clamp-3': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '3',
        },
      };

      // Responsive component variants
      const componentVariants = {
        '.btn-responsive': {
          '@apply min-h-touch px-4 py-2 text-sm md:text-base': {},
        },
        '.card-responsive': {
          '@apply rounded-lg border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 p-4 md:p-6': {},
        },
        '.input-responsive': {
          '@apply min-h-touch w-full rounded-md border border-neutral-200 px-3 py-2 text-sm md:text-base dark:border-neutral-600': {},
        },
      };

      addUtilities(touchUtilities);
      addComponents(componentVariants);
    },
  ],
};
