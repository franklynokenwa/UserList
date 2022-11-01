import create from "zustand";

const AccountStore = create((set) => ({
    accounts: "",
    formData: [],
        
    updatedAccounts: (newAccounts) => set((state) => ({
        accounts: state.newAccounts = newAccounts
    })),
    updatedFormData: (newFormData) => set((state) => ({
        formData: state.formData = newFormData
    })),

}))

export default AccountStore;