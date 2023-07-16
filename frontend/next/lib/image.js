
const url = process.env.NEXT_PUBLIC_API_HOSTNAME;

export const imageLoader = ({ src, width, quality }) => {
    return `${url}${src}?w=${width}&q=${quality || 75}`;
};

