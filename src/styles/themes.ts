interface theme {
    bgColor: Record<string, string>;
    font: Record<string, string>;
    common: Record<string, string>;
    sizeUnit: Record<string, Record<string, string>>;
}

const myBlog: theme = {
    bgColor: {
        block_body: '#ffffff',
        block_content: '#deeaee',

    },
    font: {
        spoqa: 'Spoqa Han Sans Neo, sans-serif'
    },
    common: {
        header: '3.125rem',
        bottomNavi: '0rem'
    },
    sizeUnit: {
        /** base font size 16 기준 */
        // 32px
        h1: { fontSize: '2rem', lineHeight: '130%' },
        // 24px
        h2: { fontSize: '1.5rem', lineHeight: '140%' },
        // 22px
        h3: { fontSize: '1.375rem', lineHeight: '140%' },
        // 20px
        h4: { fontSize: '1.25rem', lineHeight: '140%' },
        // 18px
        sub1: { fontSize: '1.125rem', lineHeight: '150%' },
        // 16px
        sub2: { fontSize: '1rem', lineHeight: '150%' },
        // 16px
        body1: { fontSize: '1rem', lineHeight: '150%' },
        // 15px
        body2: { fontSize: '0.9375rem', lineHeight: '150%' },
        // 14px
        body3: { fontSize: '0.875rem', lineHeight: '150%' },
        // 12px
        caption: { fontSize: '0.75rem', lineHeight: '150%' },
        // 10px
        caption2: { fontSize: '0.625rem', lineHeight: '100%' }
    }
};

export { myBlog };