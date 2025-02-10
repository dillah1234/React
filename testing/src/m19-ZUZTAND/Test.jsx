import { create } from "zustand"; 822 
const useStore = create((set) => ({
count: 0,
increase: () => set((state) => ({ count: state.count + 1 })),
decrease: () => set((state) => ({ count: state.count - 1 })),
}));

const Counter = () => {
    const { count, increase, decrease } = useStore();
    return (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    </div>
    );
    };
    
    export default Counter;