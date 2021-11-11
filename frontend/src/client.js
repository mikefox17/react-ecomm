import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'xsu446g2',
    dataset: 'production',
    useCdn: true,
});
