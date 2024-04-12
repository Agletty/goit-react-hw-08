export const selectContacts = (state) => state.contacts;
export const selectItems = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectIsAddingContact = (state) => state.contacts.isAddingContact;
export const selectIsDeletingContact = (state) =>
  state.contacts.isDeleteContact;
export const selectIsEditingContact = (state) => state.contacts.isEditContact;
