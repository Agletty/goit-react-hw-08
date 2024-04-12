import { createSelector } from "@reduxjs/toolkit";
import { selectItems } from "../contacts/selectors";

export const selectNameFilter = (state) => state.filters.name;
// export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectItems, selectNameFilter],
  (contacts, filterContacts) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterContacts.trim().toLowerCase())
    )
);
export const selectVisibleContacts = createSelector(
  [selectItems, selectNameFilter],
  (contacts, filter) => {
    if (filter && filter.trim() !== "") {
      return contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  }
);
