import style9 from 'style9';

export const { ...layoutStyles } = style9.create({
    container: {
        maxWidth: '36rem',
        padding: '0 1rem',
        margin: '3rem auto 6rem',
    },

    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    backToHome: {
        margin: '3rem 0 0'
    },
});
