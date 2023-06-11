import HttClient from './axios-base'
export default {
  get: () => HttClient.get('v1/Panel/GetCategory'),
  new: (category) => HttClient.post('v1/Panel/AddCategory', category),
  edit: (category) => HttClient.post('v1/Panel/EditCategory', category),
  delete: (categoryId) => HttClient.post(`v1/Panel/DeleteCategory/${categoryId}`),
};