import create from "zustand";

const AccountStore = create((set) => ({
  accounts: "",

  updatedAccounts: (newAccounts) =>
    set((state) => ({
      accounts: (state.newAccounts = newAccounts),
    })),
}));

export default AccountStore;
