const contentful = require('contentful');
const Config = require('../../config');

const client = contentful.createClient({
  space: Config.get('/contentful').spaceID,
  accessToken: Config.get('/contentful').contentDeliveryApiKey,
});

const getAllEntries = async () => {
  try {
    const { items } = await client.getEntries();
    return items;
  } catch (error) {
    return error;
  }
};

const getEntryBySlug = async (slug) => {
  try {
    const { items } = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug[match]': slug,
    });
    return items;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllEntries,
  getEntryBySlug,
};
