import { create } from "zustand";

export type Modaltype = "createServer" | "editServer" | "createChannel";

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: Modaltype) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  onOpen: (type) => set({ isOpen: true, type }),
  onClose: () => set({ type: null, isOpen: false }),
}));
