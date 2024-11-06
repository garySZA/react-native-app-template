import { create } from 'zustand';

interface CounterStore {
    count: number;
    increase: (value: number) => void;
    reset: () => void;
}

export const useCounterStore = create<CounterStore>()((set) => ({
    count: 10,
    increase: (value) => {
        set((state) => ({ count: state.count + value }));
    },
    reset: () => {
        set({ count: 0 });
    },
}));
