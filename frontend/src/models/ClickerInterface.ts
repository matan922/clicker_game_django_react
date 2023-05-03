export interface ClickerState {
    clicks: number;
    coins: number;
    workers: {
        workerCost: number;
        value: number
        incrementBy: number;
    }
    multip: number;
    cursors: {
        cursorCost: number;
        value: number;
    };
}